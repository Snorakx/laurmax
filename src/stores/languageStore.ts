import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface LanguageState {
  currentLanguage: string;
  setLanguage: (lang: string) => void;
  toggleLanguage: () => void;
}

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set, get) => ({
      currentLanguage: 'en',
      setLanguage: (lang: string) => {
        if (['en', 'pl'].includes(lang)) {
          set({ currentLanguage: lang });
        }
      },
      toggleLanguage: () => {
        const current = get().currentLanguage;
        set({ currentLanguage: current === 'en' ? 'pl' : 'en' });
      }
    }),
    {
      name: 'laurmax-language-storage'
    }
  )
); 