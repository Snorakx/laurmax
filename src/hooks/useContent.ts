import { useMemo } from 'react';
import { ContentService } from '../services/contentService';
import { useLanguageStore } from '../stores/languageStore';

// Singleton instance of ContentService
const contentService = new ContentService();

export const useContent = () => {
  const { currentLanguage } = useLanguageStore();

  const content = useMemo(() => {
    return contentService.getContent(currentLanguage);
  }, [currentLanguage]);

  const hero = useMemo(() => {
    return contentService.getHeroContent(currentLanguage);
  }, [currentLanguage]);

  const about = useMemo(() => {
    return contentService.getAboutContent(currentLanguage);
  }, [currentLanguage]);

  const services = useMemo(() => {
    return contentService.getServices(currentLanguage);
  }, [currentLanguage]);

  const portfolio = useMemo(() => {
    return contentService.getPortfolio(currentLanguage, true); // Get featured projects
  }, [currentLanguage]);

  const contact = useMemo(() => {
    return contentService.getContactContent(currentLanguage);
  }, [currentLanguage]);

  return {
    content,
    hero,
    about,
    services,
    portfolio,
    contact,
    language: currentLanguage
  };
};

export const useLanguage = () => {
  const { currentLanguage, setLanguage, toggleLanguage } = useLanguageStore();
  
  const availableLanguages = useMemo(() => {
    return contentService.getAvailableLanguages();
  }, []);

  return {
    currentLanguage,
    setLanguage,
    toggleLanguage,
    availableLanguages,
    isSupported: (lang: string) => contentService.isSupportedLanguage(lang)
  };
};

export const useContactInfo = () => {
  const { currentLanguage } = useLanguageStore();

  const emails = useMemo(() => {
    return contentService.formatContactEmails(currentLanguage);
  }, [currentLanguage]);

  const socialLinks = useMemo(() => {
    return contentService.getSocialLinks(currentLanguage);
  }, [currentLanguage]);

  return {
    emails,
    socialLinks
  };
}; 