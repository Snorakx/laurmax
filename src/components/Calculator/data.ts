import type { CalculatorTemplate } from './types';
import { type Language, getTranslation } from './i18n';

export const websiteCalculatorTemplate: CalculatorTemplate = {
  id: 'website',
  title: 'Strona wizytówkowa typu klasycznego',
  subtitle: 'Jest to najbardziej popularny typ strony internetowej.',
  description: 'Składa się z wielu niezależnych podstron oraz wielopoziomowego menu.',
  basePrice: 2500,
  steps: [
    {
      id: 'additional-features',
      title: 'Jakie dodatkowe elementy mamy przygotować?',
      description: 'Wybierz wszystkie funkcjonalności które potrzebujesz.',
      multipleSelection: true,
      options: [
        {
          id: 'analytics',
          title: 'Integracja Analityki i Audyt Ruchu',
          price: 490,
          selected: false
        },
        {
          id: 'logo-branding',
          title: 'Projekt Logo oraz Branding',
          price: 1490,
          selected: false
        },
        {
          id: 'dark-light-mode',
          title: 'Wersja Ciemna / Jasna Strony',
          price: 690,
          selected: false
        },
        {
          id: 'newsletter',
          title: 'Zapis na Newsletter',
          price: 390,
          selected: false
        },
        {
          id: 'multilingual',
          title: 'Wersje Językowe Strony',
          price: 990,
          selected: false
        },
        {
          id: 'mobile-app',
          title: 'Aplikacja Mobilna (PWA)',
          price: 1490,
          selected: false
        },
        {
          id: 'accessibility',
          title: 'WCAG 2.0 / 2.1 - Strona Dostosowana',
          price: 790,
          selected: false
        }
      ]
    }
  ]
};

export const ecommerceCalculatorTemplate: CalculatorTemplate = {
  id: 'ecommerce',
  title: 'Sklep internetowy / E-commerce',
  subtitle: 'Kompleksowe rozwiązanie dla sprzedaży online.',
  description: 'Zaawansowana platforma e-commerce z panelem administracyjnym.',
  basePrice: 5990,
  steps: [
    {
      id: 'product-count',
      title: 'Ile produktów będzie w sklepie?',
      description: 'Wybierz przewidywaną liczbę produktów w katalogu.',
      multipleSelection: false,
      required: true,
      options: [
        {
          id: 'products-1-10',
          title: '1-10 produktów',
          price: 0,
          selected: false
        },
        {
          id: 'products-10-50',
          title: '10-50 produktów',
          price: 990,
          selected: false
        },
        {
          id: 'products-50-150',
          title: '50-150 produktów',
          price: 1990,
          selected: false
        },
        {
          id: 'products-150-500',
          title: '150-500 produktów',
          price: 3490,
          selected: false
        },
        {
          id: 'products-500+',
          title: '500+ produktów',
          price: 5990,
          selected: false
        }
      ]
    },
    {
      id: 'ecommerce-features',
      title: 'Jakie dodatkowe funkcjonalności?',
      description: 'Wybierz dodatkowe funkcje dla swojego sklepu.',
      multipleSelection: true,
      options: [
        {
          id: 'payment-integration',
          title: 'Integracja z systemami płatności',
          price: 1290,
          selected: false
        },
        {
          id: 'inventory-management',
          title: 'System zarządzania magazynem',
          price: 2490,
          selected: false
        },
        {
          id: 'crm-integration',
          title: 'Integracja z systemem CRM',
          price: 1990,
          selected: false
        },
        {
          id: 'analytics-advanced',
          title: 'Zaawansowana analityka sprzedaży',
          price: 990,
          selected: false
        },
        {
          id: 'mobile-app-shop',
          title: 'Aplikacja mobilna sklepu',
          price: 3990,
          selected: false
        }
      ]
    }
  ]
};

export const getWebsiteCalculatorTemplate = (lang: Language): CalculatorTemplate => {
  const t = getTranslation(lang);
  
  return {
    id: 'website',
    title: t.websiteClassicTitle,
    subtitle: t.websiteClassicSubtitle,
    description: t.websiteClassicDescription,
    basePrice: 2500,
    steps: [
      {
        id: 'additional-features',
        title: t.additionalElementsQuestion,
        description: t.additionalElementsDescription,
        multipleSelection: true,
        options: [
          {
            id: 'analytics',
            title: t.analyticsIntegration,
            price: 490,
            selected: false
          },
          {
            id: 'logo-branding',
            title: t.logoAndBranding,
            price: 1490,
            selected: false
          },
          {
            id: 'dark-light-mode',
            title: t.darkLightMode,
            price: 690,
            selected: false
          },
          {
            id: 'newsletter',
            title: t.newsletter,
            price: 390,
            selected: false
          },
          {
            id: 'multilingual',
            title: t.multiLanguage,
            price: 990,
            selected: false
          },
          {
            id: 'mobile-app',
            title: t.mobileApp,
            price: 1490,
            selected: false
          },
          {
            id: 'accessibility',
            title: t.wcagAccessibility,
            price: 790,
            selected: false
          }
        ]
      }
    ]
  };
};

export const getEcommerceCalculatorTemplate = (lang: Language): CalculatorTemplate => {
  const t = getTranslation(lang);
  
  return {
    id: 'ecommerce',
    title: t.ecommerceFullTitle,
    subtitle: t.ecommerceFullSubtitle,
    description: t.ecommerceFullDescription,
    basePrice: 5990,
    steps: [
      {
        id: 'product-count',
        title: t.productCountQuestion,
        description: t.productCountDescription,
        multipleSelection: false,
        required: true,
        options: [
          {
            id: 'products-1-10',
            title: t.products1to10,
            price: 0,
            selected: false
          },
          {
            id: 'products-10-50',
            title: t.products10to50,
            price: 990,
            selected: false
          },
          {
            id: 'products-50-150',
            title: t.products50to150,
            price: 1990,
            selected: false
          },
          {
            id: 'products-150-500',
            title: t.products150to500,
            price: 3490,
            selected: false
          },
          {
            id: 'products-500+',
            title: t.products500plus,
            price: 5990,
            selected: false
          }
        ]
      },
      {
        id: 'ecommerce-features',
        title: t.ecommerceFeaturesQuestion,
        description: t.ecommerceFeaturesDescription,
        multipleSelection: true,
        options: [
          {
            id: 'payment-integration',
            title: t.paymentIntegration,
            price: 1290,
            selected: false
          },
          {
            id: 'inventory-management',
            title: t.inventoryManagement,
            price: 2490,
            selected: false
          },
          {
            id: 'crm-integration',
            title: t.crmIntegration,
            price: 1990,
            selected: false
          },
          {
            id: 'analytics-advanced',
            title: t.advancedAnalytics,
            price: 990,
            selected: false
          },
          {
            id: 'mobile-app-shop',
            title: t.mobileShopApp,
            price: 3990,
            selected: false
          }
        ]
      }
    ]
  };
};

export const calculatorTemplates = {
  website: websiteCalculatorTemplate,
  ecommerce: ecommerceCalculatorTemplate
};

export const getCalculatorTemplate = (type: string, lang: Language): CalculatorTemplate => {
  switch (type) {
    case 'website':
      return getWebsiteCalculatorTemplate(lang);
    case 'ecommerce':
      return getEcommerceCalculatorTemplate(lang);
    default:
      return getWebsiteCalculatorTemplate(lang);
  }
}; 