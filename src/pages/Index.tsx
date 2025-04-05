
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import QuranReaderPage from './QuranReaderPage';
import VocabularyPage from './VocabularyPage';
import AppHeader from '../components/AppHeader';
import { VocabProvider } from '../contexts/VocabContext';
import { getAllWords } from '../data/mockData';

const Index = () => {
  return (
    <VocabProvider initialWords={getAllWords()}>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <AppHeader />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<QuranReaderPage />} />
            <Route path="/vocabulary" element={<VocabularyPage />} />
          </Routes>
        </main>
        <footer className="py-4 text-center text-sm text-gray-500">
          <p>© 2025 Quran Smart Words Guide - Learn Quranic Arabic Vocabulary</p>
        </footer>
      </div>
    </VocabProvider>
  );
};

export default Index;
