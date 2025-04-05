
import React, { useState } from 'react';
import { QuranWord, VocabStatus } from '../types/quran';
import { useVocab } from '../contexts/VocabContext';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Check, Book, BookOpen } from 'lucide-react';

interface WordCardProps {
  word: QuranWord;
  showControls?: boolean;
  className?: string;
}

const WordCard: React.FC<WordCardProps> = ({ word, showControls = false, className = '' }) => {
  const { wordStatuses, updateWordStatus } = useVocab();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Get the current status or use the default from the word
  const currentStatus = wordStatuses[word.id] || word.status;

  // Get background color based on status
  const getBackgroundColor = (status: VocabStatus) => {
    switch (status) {
      case VocabStatus.LEARNING:
        return 'bg-vocab-learning';
      case VocabStatus.LEARNED:
        return 'bg-vocab-learned';
      case VocabStatus.RECOMMENDED:
        return 'bg-vocab-recommended';
      case VocabStatus.NOT_LEARNING:
      default:
        return 'bg-white';
    }
  };

  const handleStatusChange = (newStatus: VocabStatus) => {
    updateWordStatus(word, newStatus);
  };

  return (
    <>
      <Card 
        className={`cursor-pointer border hover:shadow-md transition-shadow duration-200 ${getBackgroundColor(currentStatus)} ${className}`}
        onClick={() => setIsDialogOpen(true)}
      >
        <CardContent className="p-3 text-center">
          <div className="arabic-text text-2xl mb-1">{word.arabic}</div>
          <div className="text-sm text-gray-700">{word.translation}</div>
        </CardContent>
      </Card>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex justify-center">
              <span className="arabic-text text-3xl mb-2">{word.arabic}</span>
            </DialogTitle>
            <DialogDescription className="text-center text-lg font-medium text-gray-900">
              {word.translation}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            {word.root && (
              <div className="flex justify-center items-center space-x-2">
                <span className="text-sm text-gray-600">Root:</span>
                <span className="arabic-text text-lg">{word.root}</span>
              </div>
            )}
            
            <div className="flex items-center justify-center space-x-2">
              <span className="text-sm text-gray-600">Occurrences in Quran:</span>
              <span className="font-medium">{word.occurrences}</span>
            </div>

            <div className="flex justify-center gap-2 mt-4">
              <Button 
                variant={currentStatus === VocabStatus.LEARNING ? "default" : "outline"} 
                className={`${currentStatus === VocabStatus.LEARNING ? "bg-vocab-learning text-white" : ""}`}
                onClick={() => handleStatusChange(VocabStatus.LEARNING)}
              >
                <Book className="w-4 h-4 mr-1" /> Learning
              </Button>
              <Button 
                variant={currentStatus === VocabStatus.LEARNED ? "default" : "outline"}
                className={`${currentStatus === VocabStatus.LEARNED ? "bg-vocab-learned text-white" : ""}`}
                onClick={() => handleStatusChange(VocabStatus.LEARNED)}
              >
                <Check className="w-4 h-4 mr-1" /> Learned
              </Button>
              <Button 
                variant="outline" 
                onClick={() => handleStatusChange(VocabStatus.NOT_LEARNING)}
              >
                Reset
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default WordCard;
