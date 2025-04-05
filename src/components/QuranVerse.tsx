
import React from 'react';
import { QuranVerse as QuranVerseType } from '../types/quran';
import WordCard from './WordCard';

interface QuranVerseProps {
  verse: QuranVerseType;
}

const QuranVerse: React.FC<QuranVerseProps> = ({ verse }) => {
  return (
    <div className="p-4 mb-6 rounded-lg border shadow-sm">
      <div className="flex flex-wrap justify-center gap-2 mb-4">
        {verse.words.map((word) => (
          <WordCard 
            key={word.id} 
            word={word}
            className="min-w-20"
          />
        ))}
      </div>
      <div className="mt-4 text-sm text-gray-600 border-t pt-3">
        <span className="font-bold text-gray-700">{verse.chapterNumber}:{verse.verseNumber}</span> {verse.translation}
      </div>
    </div>
  );
};

export default QuranVerse;
