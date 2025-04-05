
import { QuranChapter, QuranVerse, QuranWord, VocabStatus } from '../types/quran';

// Mock data for Al-Fatiha (Chapter 1)
export const mockChapters: QuranChapter[] = [
  {
    id: 1,
    name: "الفاتحة",
    translatedName: "The Opening",
    verses: [
      {
        id: "1:1",
        verseNumber: 1,
        chapterNumber: 1,
        translation: "In the name of Allah, the Entirely Merciful, the Especially Merciful.",
        words: [
          {
            id: "1:1:1",
            arabic: "بِسْمِ",
            translation: "In (the) name",
            root: "س م و",
            occurrences: 22,
            status: VocabStatus.NOT_LEARNING
          },
          {
            id: "1:1:2",
            arabic: "اللَّهِ",
            translation: "of Allah",
            root: "الله",
            occurrences: 2699,
            status: VocabStatus.RECOMMENDED
          },
          {
            id: "1:1:3",
            arabic: "الرَّحْمَٰنِ",
            translation: "the Most Gracious",
            root: "ر ح م",
            occurrences: 57,
            status: VocabStatus.RECOMMENDED
          },
          {
            id: "1:1:4",
            arabic: "الرَّحِيمِ",
            translation: "the Most Merciful",
            root: "ر ح م",
            occurrences: 115,
            status: VocabStatus.RECOMMENDED
          }
        ]
      },
      {
        id: "1:2",
        verseNumber: 2,
        chapterNumber: 1,
        translation: "[All] praise is [due] to Allah, Lord of the worlds.",
        words: [
          {
            id: "1:2:1",
            arabic: "الْحَمْدُ",
            translation: "All praise",
            root: "ح م د",
            occurrences: 38,
            status: VocabStatus.RECOMMENDED
          },
          {
            id: "1:2:2",
            arabic: "لِلَّهِ",
            translation: "(is) for Allah",
            root: "الله",
            occurrences: 2699,
            status: VocabStatus.RECOMMENDED
          },
          {
            id: "1:2:3",
            arabic: "رَبِّ",
            translation: "Lord",
            root: "ر ب ب",
            occurrences: 975,
            status: VocabStatus.RECOMMENDED
          },
          {
            id: "1:2:4",
            arabic: "الْعَالَمِينَ",
            translation: "(of) the worlds",
            root: "ع ل م",
            occurrences: 73,
            status: VocabStatus.RECOMMENDED
          }
        ]
      },
      {
        id: "1:3",
        verseNumber: 3,
        chapterNumber: 1,
        translation: "The Entirely Merciful, the Especially Merciful,",
        words: [
          {
            id: "1:3:1",
            arabic: "الرَّحْمَٰنِ",
            translation: "The Most Gracious",
            root: "ر ح م",
            occurrences: 57,
            status: VocabStatus.RECOMMENDED
          },
          {
            id: "1:3:2",
            arabic: "الرَّحِيمِ",
            translation: "the Most Merciful",
            root: "ر ح م",
            occurrences: 115,
            status: VocabStatus.RECOMMENDED
          }
        ]
      },
      {
        id: "1:4",
        verseNumber: 4,
        chapterNumber: 1,
        translation: "Master of the Day of Judgment.",
        words: [
          {
            id: "1:4:1",
            arabic: "مَالِكِ",
            translation: "Master",
            root: "م ل ك",
            occurrences: 13,
            status: VocabStatus.RECOMMENDED
          },
          {
            id: "1:4:2",
            arabic: "يَوْمِ",
            translation: "(of the) Day",
            root: "ي و م",
            occurrences: 365,
            status: VocabStatus.RECOMMENDED
          },
          {
            id: "1:4:3",
            arabic: "الدِّينِ",
            translation: "(of) Judgment",
            root: "د ي ن",
            occurrences: 94,
            status: VocabStatus.RECOMMENDED
          }
        ]
      },
      {
        id: "1:5",
        verseNumber: 5,
        chapterNumber: 1,
        translation: "It is You we worship and You we ask for help.",
        words: [
          {
            id: "1:5:1",
            arabic: "إِيَّاكَ",
            translation: "You alone",
            root: "أ ي ي",
            occurrences: 9,
            status: VocabStatus.NOT_LEARNING
          },
          {
            id: "1:5:2",
            arabic: "نَعْبُدُ",
            translation: "we worship",
            root: "ع ب د",
            occurrences: 143,
            status: VocabStatus.RECOMMENDED
          },
          {
            id: "1:5:3",
            arabic: "وَإِيَّاكَ",
            translation: "and You alone",
            root: "أ ي ي",
            occurrences: 9,
            status: VocabStatus.NOT_LEARNING
          },
          {
            id: "1:5:4",
            arabic: "نَسْتَعِينُ",
            translation: "we ask for help",
            root: "ع و ن",
            occurrences: 11,
            status: VocabStatus.RECOMMENDED
          }
        ]
      },
      {
        id: "1:6",
        verseNumber: 6,
        chapterNumber: 1,
        translation: "Guide us to the straight path -",
        words: [
          {
            id: "1:6:1",
            arabic: "اهْدِنَا",
            translation: "Guide us",
            root: "هـ د ي",
            occurrences: 316,
            status: VocabStatus.RECOMMENDED
          },
          {
            id: "1:6:2",
            arabic: "الصِّرَاطَ",
            translation: "(to) the path",
            root: "ص ر ط",
            occurrences: 45,
            status: VocabStatus.RECOMMENDED
          },
          {
            id: "1:6:3",
            arabic: "الْمُسْتَقِيمَ",
            translation: "the straight",
            root: "ق وم",
            occurrences: 37,
            status: VocabStatus.RECOMMENDED
          }
        ]
      },
      {
        id: "1:7",
        verseNumber: 7,
        chapterNumber: 1,
        translation: "The path of those upon whom You have bestowed favor, not of those who have earned [Your] anger or of those who are astray.",
        words: [
          {
            id: "1:7:1",
            arabic: "صِرَاطَ",
            translation: "The path",
            root: "ص ر ط",
            occurrences: 45,
            status: VocabStatus.RECOMMENDED
          },
          {
            id: "1:7:2",
            arabic: "الَّذِينَ",
            translation: "(of) those",
            root: "ا ل ذ ي",
            occurrences: 1080,
            status: VocabStatus.RECOMMENDED
          },
          {
            id: "1:7:3",
            arabic: "أَنْعَمْتَ",
            translation: "You have bestowed",
            root: "ن ع م",
            occurrences: 143,
            status: VocabStatus.RECOMMENDED
          },
          {
            id: "1:7:4",
            arabic: "عَلَيْهِمْ",
            translation: "upon them",
            root: "ع ل ي",
            occurrences: 1214,
            status: VocabStatus.RECOMMENDED
          },
          {
            id: "1:7:5",
            arabic: "غَيْرِ",
            translation: "not (of)",
            root: "غ ي ر",
            occurrences: 147,
            status: VocabStatus.RECOMMENDED
          },
          {
            id: "1:7:6",
            arabic: "الْمَغْضُوبِ",
            translation: "those who earned anger",
            root: "غ ض ب",
            occurrences: 24,
            status: VocabStatus.RECOMMENDED
          },
          {
            id: "1:7:7",
            arabic: "عَلَيْهِمْ",
            translation: "upon them",
            root: "ع ل ي",
            occurrences: 1214,
            status: VocabStatus.RECOMMENDED
          },
          {
            id: "1:7:8",
            arabic: "وَلَا",
            translation: "and not",
            root: "ل ا",
            occurrences: 1024,
            status: VocabStatus.RECOMMENDED
          },
          {
            id: "1:7:9",
            arabic: "الضَّالِّينَ",
            translation: "(of) those who are astray",
            root: "ض ل ل",
            occurrences: 191,
            status: VocabStatus.RECOMMENDED
          }
        ]
      }
    ]
  }
];

export const getAllWords = (): QuranWord[] => {
  const allWords: QuranWord[] = [];
  
  mockChapters.forEach(chapter => {
    chapter.verses.forEach(verse => {
      verse.words.forEach(word => {
        allWords.push(word);
      });
    });
  });
  
  return allWords;
};
