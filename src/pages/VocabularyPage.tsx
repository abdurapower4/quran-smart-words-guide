
import React from 'react';
import VocabTabs from '../components/VocabTabs';

const VocabularyPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Vocabulary Management</h1>
      <VocabTabs />
    </div>
  );
};

export default VocabularyPage;
