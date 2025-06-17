export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  url: string;
  image: string;
}

export interface ContactInfo {
  email: string[];
  social: {
    facebook: string;
    instagram: string;
    youtube: string;
  };
}

export interface SiteContent {
  hero: {
    title: string;
    subtitle: string;
    description: string;
    cta: string;
  };
  about: {
    title: string;
    description: string;
    experience: string;
    projects: string;
    expertise: string[];
  };
  services: Service[];
  portfolio: {
    title: string;
    description: string;
    projects: Project[];
  };
  contact: {
    title: string;
    description: string;
    info: ContactInfo;
  };
}

export const contentData: Record<string, SiteContent> = {
  en: {
    hero: {
      title: "Smart Websites.",
      subtitle: "Real Results.",
      description: "Do you want to grow your business online but don't know where to start?",
      cta: "Start Your Project"
    },
    about: {
      title: "Who We Are.",
      description: "At Laurmax, we craft smart, high-performing websites that help businesses grow online with confidence. With over a decade of hands-on experience, our expertise spans custom WordPress development, Shopify solutions, SEO optimization, and seamless Google integrations.",
      experience: "Over 10 years of professional experience",
      projects: "100+ successful projects delivered",
      expertise: ["Custom WordPress Development", "Shopify Solutions", "SEO Optimization", "Google Integrations", "Website Performance", "Technical Support"]
    },
    services: [
      {
        title: "Website Development",
        description: "Custom WordPress websites tailored to your brand and goals – from structure and layout to responsive design and functionality.",
        icon: "development"
      },
      {
        title: "Website Optimization",
        description: "Boost your site's speed, SEO, and security. We fine-tune performance for fast loading, improve visibility with on-page SEO best practices.",
        icon: "optimization"
      },
      {
        title: "Maintenance & Support",
        description: "Ongoing care to keep your site running smoothly. Includes regular updates, backups, troubleshooting, and technical support.",
        icon: "support"
      }
    ],
    portfolio: {
      title: "Our Portfolio.",
      description: "With over 10 years of professional experience, Laurmax builds on a foundation of expertise gained while collaborating with leading marketing agencies.",
      projects: [
        {
          id: "1",
          title: "E-commerce Platform",
          description: "Modern Shopify store with custom functionality",
          url: "#",
          image: "/projects/project1.jpg"
        },
        {
          id: "2", 
          title: "Corporate Website",
          description: "Professional WordPress site with advanced SEO",
          url: "#",
          image: "/projects/project2.jpg"
        },
        {
          id: "3",
          title: "Portfolio Site",
          description: "Creative portfolio with smooth animations",
          url: "#",
          image: "/projects/project3.jpg"
        }
      ]
    },
    contact: {
      title: "Start Your Project.",
      description: "Tell us what you need — we'll take care of the rest. Looking to launch, redesign, or grow your online presence?",
      info: {
        email: ["laurmax.mk@gmail.com", "laurmax.ik@gmail.com"],
        social: {
          facebook: "#",
          instagram: "#", 
          youtube: "#"
        }
      }
    }
  },
  pl: {
    hero: {
      title: "Inteligentne Strony.",
      subtitle: "Realne Rezultaty.",
      description: "Chcesz rozwijać swój biznes online, ale nie wiesz od czego zacząć?",
      cta: "Rozpocznij Projekt"
    },
    about: {
      title: "Kim Jesteśmy.",
      description: "W Laurmax tworzymy inteligentne, wydajne strony internetowe, które pomagają firmom rozwijać się online z pewnością siebie. Dzięki ponad dekadzie praktycznego doświadczenia, nasza wiedza obejmuje niestandardowe tworzenie WordPress, rozwiązania Shopify, optymalizację SEO i płynne integracje Google.",
      experience: "Ponad 10 lat profesjonalnego doświadczenia",
      projects: "100+ zrealizowanych projektów",
      expertise: ["Niestandardowe Tworzenie WordPress", "Rozwiązania Shopify", "Optymalizacja SEO", "Integracje Google", "Wydajność Stron", "Wsparcie Techniczne"]
    },
    services: [
      {
        title: "Tworzenie Stron",
        description: "Niestandardowe strony WordPress dostosowane do Twojej marki i celów – od struktury i układu po responsywny design i funkcjonalność.",
        icon: "development"
      },
      {
        title: "Optymalizacja Stron",
        description: "Zwiększ szybkość, SEO i bezpieczeństwo swojej strony. Dostrajamy wydajność dla szybkiego ładowania, poprawiamy widoczność dzięki najlepszym praktykom SEO.",
        icon: "optimization"
      },
      {
        title: "Obsługa i Wsparcie",
        description: "Ciągła opieka, aby Twoja strona działała płynnie. Obejmuje regularne aktualizacje, kopie zapasowe, rozwiązywanie problemów i wsparcie techniczne.",
        icon: "support"
      }
    ],
    portfolio: {
      title: "Nasze Portfolio.",
      description: "Dzięki ponad 10-letniemu profesjonalnemu doświadczeniu, Laurmax buduje na fundamencie wiedzy zdobytej podczas współpracy z wiodącymi agencjami marketingowymi.",
      projects: [
        {
          id: "1",
          title: "Platforma E-commerce",
          description: "Nowoczesny sklep Shopify z niestandardową funkcjonalnością",
          url: "#",
          image: "/projects/project1.jpg"
        },
        {
          id: "2",
          title: "Strona Korporacyjna", 
          description: "Profesjonalna strona WordPress z zaawansowanym SEO",
          url: "#",
          image: "/projects/project2.jpg"
        },
        {
          id: "3",
          title: "Strona Portfolio",
          description: "Kreatywne portfolio z płynnymi animacjami",
          url: "#",
          image: "/projects/project3.jpg"
        }
      ]
    },
    contact: {
      title: "Rozpocznij Swój Projekt.",
      description: "Powiedz nam czego potrzebujesz — my zajmiemy się resztą. Chcesz uruchomić, przeprojektować lub rozwijać swoją obecność online?",
      info: {
        email: ["laurmax.mk@gmail.com", "laurmax.ik@gmail.com"],
        social: {
          facebook: "#",
          instagram: "#",
          youtube: "#"
        }
      }
    }
  }
};

export class ContentRepository {
  getContent(lang: string = 'en'): SiteContent {
    return contentData[lang] || contentData.en;
  }

  getServices(lang: string = 'en'): Service[] {
    return this.getContent(lang).services;
  }

  getProjects(lang: string = 'en'): Project[] {
    return this.getContent(lang).portfolio.projects;
  }

  getContactInfo(lang: string = 'en'): ContactInfo {
    return this.getContent(lang).contact.info;
  }
} 