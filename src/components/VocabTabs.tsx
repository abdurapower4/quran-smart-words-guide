
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { VocabStatus } from '../types/quran';
import { useVocab } from '../contexts/VocabContext';
import WordCard from './WordCard';

const VocabTabs: React.FC = () => {
  const { getWordsByStatus, getMostUsedWords } = useVocab();

  const recommendedWords = getWordsByStatus(VocabStatus.RECOMMENDED);
  const learningWords = getWordsByStatus(VocabStatus.LEARNING);
  const learnedWords = getWordsByStatus(VocabStatus.LEARNED);
  const mostUsedWords = getMostUsedWords();

  return (
    <div className="p-4">
      <Tabs defaultValue="recommended">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="recommended" className="text-vocab-recommended">
            Recommended ({recommendedWords.length})
          </TabsTrigger>
          <TabsTrigger value="learning" className="text-vocab-learning">
            Learning ({learningWords.length})
          </TabsTrigger>
          <TabsTrigger value="learned" className="text-vocab-learned">
            Learned ({learnedWords.length})
          </TabsTrigger>
          <TabsTrigger value="most-used">
            Most Used ({mostUsedWords.length})
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="recommended" className="mt-6">
          <h2 className="text-xl font-semibold mb-4">Recommended Words to Learn</h2>
          <p className="text-gray-600 mb-6">Words that appear 10 or more times in the Quran.</p>
          {recommendedWords.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {recommendedWords.map((word) => (
                <WordCard key={word.id} word={word} showControls />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">No recommended words found.</p>
          )}
        </TabsContent>
        
        <TabsContent value="learning" className="mt-6">
          <h2 className="text-xl font-semibold mb-4">Words I'm Learning</h2>
          {learningWords.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {learningWords.map((word) => (
                <WordCard key={word.id} word={word} showControls />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">You haven't marked any words as learning yet.</p>
          )}
        </TabsContent>
        
        <TabsContent value="learned" className="mt-6">
          <h2 className="text-xl font-semibold mb-4">Words I've Learned</h2>
          {learnedWords.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {learnedWords.map((word) => (
                <WordCard key={word.id} word={word} showControls />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">You haven't marked any words as learned yet.</p>
          )}
        </TabsContent>
        
        <TabsContent value="most-used" className="mt-6">
          <h2 className="text-xl font-semibold mb-4">Most Used Words in the Quran</h2>
          <p className="text-gray-600 mb-6">Words sorted by frequency of occurrence.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {mostUsedWords.map((word) => (
              <WordCard key={word.id} word={word} showControls />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default VocabTabs;
