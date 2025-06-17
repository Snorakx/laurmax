import { ContentRepository, type SiteContent, type Service, type Project, type ContactInfo } from '../repositories/contentRepository';

export class ContentService {
  private repository: ContentRepository;

  constructor() {
    this.repository = new ContentRepository();
  }

  // Get all content for a specific language
  getContent(lang: string = 'en'): SiteContent {
    return this.repository.getContent(lang);
  }

  // Get hero section data
  getHeroContent(lang: string = 'en') {
    return this.repository.getContent(lang).hero;
  }

  // Get about section data
  getAboutContent(lang: string = 'en') {
    return this.repository.getContent(lang).about;
  }

  // Get services with enhanced data processing
  getServices(lang: string = 'en'): Service[] {
    const services = this.repository.getServices(lang);
    
    // Add any business logic processing here
    return services.map(service => ({
      ...service,
      // Add processed fields if needed
      slug: service.title.toLowerCase().replace(/\s+/g, '-')
    }));
  }

  // Get portfolio data with filtering options
  getPortfolio(lang: string = 'en', featured: boolean = false) {
    const portfolio = this.repository.getContent(lang).portfolio;
    let projects = this.repository.getProjects(lang);

    // Filter featured projects if requested
    if (featured) {
      projects = projects.slice(0, 3); // Show first 3 as featured
    }

    return {
      ...portfolio,
      projects
    };
  }

  // Get contact information
  getContactContent(lang: string = 'en') {
    return this.repository.getContent(lang).contact;
  }

  // Utility method to check if language is supported
  isSupportedLanguage(lang: string): boolean {
    return ['en', 'pl'].includes(lang);
  }

  // Get available languages
  getAvailableLanguages() {
    return [
      { code: 'en', name: 'English' },
      { code: 'pl', name: 'Polski' }
    ];
  }

  // Format contact emails for display
  formatContactEmails(lang: string = 'en'): string[] {
    const contactInfo = this.repository.getContactInfo(lang);
    return contactInfo.email;
  }

  // Get social media links
  getSocialLinks(lang: string = 'en') {
    const contactInfo = this.repository.getContactInfo(lang);
    return contactInfo.social;
  }
} 