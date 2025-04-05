
import React from 'react';
import { QuranChapter } from '../types/quran';
import QuranVerse from './QuranVerse';

interface QuranReaderProps {
  chapter: QuranChapter;
}

const QuranReader: React.FC<QuranReaderProps> = ({ chapter }) => {
  return (
    <div className="p-4">
      <div className="text-center mb-8">
        <h2 className="arabic-text text-4xl mb-2">{chapter.name}</h2>
        <p className="text-xl text-gray-600">{chapter.translatedName}</p>
      </div>
      <div className="space-y-6">
        {chapter.verses.map((verse) => (
          <QuranVerse key={verse.id} verse={verse} />
        ))}
      </div>
    </div>
  );
};

export default QuranReader;
