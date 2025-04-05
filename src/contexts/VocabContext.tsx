
import React, { createContext, useContext, useState, useEffect } from 'react';
import { QuranWord, VocabStatus } from '../types/quran';
import { toast } from '../hooks/use-toast';  // Update import to use the correct path

interface VocabContextType {
  wordStatuses: Record<string, VocabStatus>;
  rootStatuses: Record<string, VocabStatus>;
  updateWordStatus: (word: QuranWord, newStatus: VocabStatus) => void;
  getWordsByStatus: (status: VocabStatus) => QuranWord[];
  getMostUsedWords: () => QuranWord[];
}

const VocabContext = createContext<VocabContextType | undefined>(undefined);

interface VocabProviderProps {
  children: React.ReactNode;
  initialWords?: QuranWord[];
}

export const VocabProvider: React.FC<VocabProviderProps> = ({ children, initialWords = [] }) => {
  const [wordStatuses, setWordStatuses] = useState<Record<string, VocabStatus>>({});
  const [rootStatuses, setRootStatuses] = useState<Record<string, VocabStatus>>({});
  const [words, setWords] = useState<QuranWord[]>(initialWords);

  // Load saved statuses from localStorage on initial render
  useEffect(() => {
    const savedWordStatuses = localStorage.getItem('wordStatuses');
    const savedRootStatuses = localStorage.getItem('rootStatuses');
    
    if (savedWordStatuses) {
      setWordStatuses(JSON.parse(savedWordStatuses));
    }
    
    if (savedRootStatuses) {
      setRootStatuses(JSON.parse(savedRootStatuses));
    }
  }, []);

  // Save statuses to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('wordStatuses', JSON.stringify(wordStatuses));
  }, [wordStatuses]);

  useEffect(() => {
    localStorage.setItem('rootStatuses', JSON.stringify(rootStatuses));
  }, [rootStatuses]);

  const updateWordStatus = (word: QuranWord, newStatus: VocabStatus) => {
    // Update the status for this specific word
    setWordStatuses(prev => ({
      ...prev,
      [word.id]: newStatus
    }));

    // If the word has a root and the status is LEARNING or LEARNED
    if (word.root) {
      if (newStatus === VocabStatus.LEARNED) {
        // Only update this specific word to LEARNED
        setWordStatuses(prev => ({
          ...prev,
          [word.id]: VocabStatus.LEARNED
        }));
        
        // Set root status to LEARNING (not LEARNED)
        setRootStatuses(prev => ({
          ...prev,
          [word.root!]: VocabStatus.LEARNING
        }));
        
        toast({
          title: "Word marked as Learned",
          description: `Related words with the same root are now marked as Learning.`,
        });
      } 
      else if (newStatus === VocabStatus.LEARNING) {
        // Set status for all words with the same root to LEARNING
        const rootWords = words.filter(w => w.root === word.root);
        
        const updatedStatuses = { ...wordStatuses };
        rootWords.forEach(w => {
          if (wordStatuses[w.id] !== VocabStatus.LEARNED) {
            updatedStatuses[w.id] = VocabStatus.LEARNING;
          }
        });
        
        setWordStatuses(updatedStatuses);
        
        // Update root status
        setRootStatuses(prev => ({
          ...prev,
          [word.root!]: VocabStatus.LEARNING
        }));
        
        toast({
          title: "Word marked as Learning",
          description: `All related words with the same root are now marked as Learning.`,
        });
      }
      else {
        // For NOT_LEARNING or RECOMMENDED, just update this word
        setWordStatuses(prev => ({
          ...prev,
          [word.id]: newStatus
        }));
      }
    } else {
      // Word has no root, just update its status
      setWordStatuses(prev => ({
        ...prev,
        [word.id]: newStatus
      }));
      
      toast({
        title: `Word status updated`,
        description: `Word marked as ${newStatus.toLowerCase()}.`,
      });
    }
  };

  const getWordsByStatus = (status: VocabStatus): QuranWord[] => {
    return words.filter(word => {
      const wordStatus = wordStatuses[word.id] || 
        (word.occurrences >= 10 ? VocabStatus.RECOMMENDED : VocabStatus.NOT_LEARNING);
      return wordStatus === status;
    });
  };

  const getMostUsedWords = (): QuranWord[] => {
    return words
      .filter(word => word.occurrences >= 10)
      .sort((a, b) => b.occurrences - a.occurrences);
  };

  // Load and update initial words with statuses
  useEffect(() => {
    if (initialWords.length > 0) {
      const wordsWithStatuses = initialWords.map(word => {
        // If we have a saved status, use it
        if (wordStatuses[word.id]) {
          return { ...word, status: wordStatuses[word.id] };
        }
        
        // If no saved status but word appears 10+ times, mark as recommended
        if (word.occurrences >= 10) {
          return { ...word, status: VocabStatus.RECOMMENDED };
        }
        
        // Otherwise, default to not learning
        return { ...word, status: VocabStatus.NOT_LEARNING };
      });
      
      setWords(wordsWithStatuses);
    }
  }, [initialWords, wordStatuses]);

  return (
    <VocabContext.Provider
      value={{
        wordStatuses,
        rootStatuses,
        updateWordStatus,
        getWordsByStatus,
        getMostUsedWords
      }}
    >
      {children}
    </VocabContext.Provider>
  );
};

export const useVocab = () => {
  const context = useContext(VocabContext);
  if (context === undefined) {
    throw new Error('useVocab must be used within a VocabProvider');
  }
  return context;
};
