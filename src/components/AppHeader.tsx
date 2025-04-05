
import React from 'react';
import { Link } from 'react-router-dom';
import { Book, BookOpen, List, Heart } from 'lucide-react';

const AppHeader: React.FC = () => {
  return (
    <header className="bg-primary text-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">Quran Smart Words Guide</Link>
          
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="flex items-center hover:text-primary-foreground/80">
              <BookOpen className="w-5 h-5 mr-1" />
              <span>Quran Reader</span>
            </Link>
            <Link to="/vocabulary" className="flex items-center hover:text-primary-foreground/80">
              <Book className="w-5 h-5 mr-1" />
              <span>Vocabulary</span>
            </Link>
          </nav>
          
          <div className="md:hidden">
            <button className="p-2" aria-label="Menu">
              <List className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
