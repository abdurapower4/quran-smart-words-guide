
export enum VocabStatus {
  NOT_LEARNING = "NOT_LEARNING",
  LEARNING = "LEARNING",
  LEARNED = "LEARNED",
  RECOMMENDED = "RECOMMENDED"
}

export interface QuranWord {
  id: string;
  arabic: string;
  translation: string;
  root?: string;
  occurrences: number;
  status: VocabStatus;
}

export interface QuranVerse {
  id: string;
  verseNumber: number;
  chapterNumber: number;
  words: QuranWord[];
  translation: string;
}

export interface QuranChapter {
  id: number;
  name: string;
  translatedName: string;
  verses: QuranVerse[];
}
