
import React from 'react';
import { mockChapters } from '../data/mockData';
import QuranReader from '../components/QuranReader';

const QuranReaderPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Quran Reader</h1>
      <QuranReader chapter={mockChapters[0]} />
    </div>
  );
};

export default QuranReaderPage;
