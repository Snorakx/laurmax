export type Language = 'pl' | 'en';

export interface Translations {
  // Navigation
  backToHome: string;
  backToSelection: string;
  back: string;
  nextStep: string;
  completeEstimate: string;
  
  // Calculator Selector
  estimateProject: string;
  estimateProjectDescription: string;
  currentEstimate: string;
  websiteTitle: string;
  websiteDescription: string;
  ecommerceTitle: string;
  ecommerceDescription: string;
  systemTitle: string;
  systemDescription: string;
  select: string;
  from: string;
  responsiveDesign: string;
  adminPanel: string;
  seoOptimization: string;
  socialMediaIntegration: string;
  productCatalog: string;
  cartAndPayments: string;
  managementPanel: string;
  systemIntegrations: string;
  dedicatedFunctionalities: string;
  externalIntegrations: string;
  advancedReporting: string;
  scalability: string;
  
  // Project Calculator
  calculatorProject: string;
  additionalRequirements: string;
  additionalRequirementsPlaceholder: string;
  estimatedCostNetto: string;
  orMonthly: string;
  hideDetails: string;
  showDetails: string;
  noSelectedOptions: string;
  free: string;
  
  // FAQ
  faqTitle: string;
  faqDescription: string;
  viewFullFaq: string;
  
  // Website Calculator
  websiteClassicTitle: string;
  websiteClassicSubtitle: string;
  websiteClassicDescription: string;
  additionalElementsQuestion: string;
  additionalElementsDescription: string;
  analyticsIntegration: string;
  logoAndBranding: string;
  darkLightMode: string;
  newsletter: string;
  multiLanguage: string;
  mobileApp: string;
  wcagAccessibility: string;
  
  // E-commerce Calculator
  ecommerceFullTitle: string;
  ecommerceFullSubtitle: string;
  ecommerceFullDescription: string;
  productCountQuestion: string;
  productCountDescription: string;
  products1to10: string;
  products10to50: string;
  products50to150: string;
  products150to500: string;
  products500plus: string;
  ecommerceFeaturesQuestion: string;
  ecommerceFeaturesDescription: string;
  paymentIntegration: string;
  inventoryManagement: string;
  crmIntegration: string;
  advancedAnalytics: string;
  mobileShopApp: string;
}

const polishTranslations: Translations = {
  // Navigation
  backToHome: 'Powrót do strony głównej',
  backToSelection: 'Wróć do wyboru',
  back: 'Wróć',
  nextStep: 'Następny krok',
  completeEstimate: 'Zakończ wycenę',
  
  // Calculator Selector
  estimateProject: 'Wyceń projekt',
  estimateProjectDescription: 'Wyceń projekt w 4 krokach. Kreator wyliczy szacunkowy koszt, który wspólnie zweryfikujemy podczas bezpłatnej konsultacji.',
  currentEstimate: 'Szacunkowy koszt netto:',
  websiteTitle: 'Strona internetowa',
  websiteDescription: 'Strona wizytówkowa typu klasycznego',
  ecommerceTitle: 'Sklep internetowy / ecommerce / marketplace',
  ecommerceDescription: 'Kompleksowe rozwiązanie dla sprzedaży online',
  systemTitle: 'Systemy ERP, CRM, logistyczne, produkcyjne itp.',
  systemDescription: 'Dedykowane systemy biznesowe',
  select: 'Wybierz',
  from: 'Od',
  responsiveDesign: 'Responsywny design',
  adminPanel: 'Panel administracyjny',
  seoOptimization: 'Optymalizacja SEO',
  socialMediaIntegration: 'Integracja z mediami społecznościowymi',
  productCatalog: 'Katalog produktów',
  cartAndPayments: 'Koszyk i płatności',
  managementPanel: 'Panel zarządzania',
  systemIntegrations: 'Integracje z systemami',
  dedicatedFunctionalities: 'Dedykowane funkcjonalności',
  externalIntegrations: 'Integracje zewnętrzne',
  advancedReporting: 'Zaawansowane raportowanie',
  scalability: 'Skalowalność',
  
  // Project Calculator
  calculatorProject: 'KALKULATOR PROJEKTU',
  additionalRequirements: 'Wszystkie dodatkowe wymagania lub istotne informacje, wpisz koniecznie w tym miejscu:',
  additionalRequirementsPlaceholder: 'Opisz swoje dodatkowe wymagania, preferencje technologiczne, terminy realizacji lub inne istotne informacje...',
  estimatedCostNetto: 'Szacunkowy koszt netto:',
  orMonthly: 'lub przy płatności miesięcznej',
  hideDetails: 'Ukryj szczegóły',
  showDetails: 'Wyświetl szczegóły',
  noSelectedOptions: 'Brak wybranych opcji dodatkowych',
  free: 'Bezpłatne',
  
  // FAQ
  faqTitle: 'FAQ - Najczęściej zadawane pytania',
  faqDescription: 'Przed rozpoczęciem jakiegokolwiek przedsięwzięcia w świecie IT, kluczowym krokiem jest dokładna wycena projektu. Odpowiednie oszacowanie kosztów i zasobów nie tylko pozwala na realistyczną ocenę inwestycji.',
  viewFullFaq: 'Zobacz pełne FAQ',
  
  // Website Calculator
  websiteClassicTitle: 'Strona wizytówkowa typu klasycznego',
  websiteClassicSubtitle: 'Jest to najbardziej popularny typ strony internetowej.',
  websiteClassicDescription: 'Składa się z wielu niezależnych podstron oraz wielopoziomowego menu.',
  additionalElementsQuestion: 'Jakie dodatkowe elementy mamy przygotować?',
  additionalElementsDescription: 'Wybierz wszystkie funkcjonalności które potrzebujesz.',
  analyticsIntegration: 'Integracja Analityki i Audyt Ruchu',
  logoAndBranding: 'Projekt Logo oraz Branding',
  darkLightMode: 'Wersja Ciemna / Jasna Strony',
  newsletter: 'Zapis na Newsletter',
  multiLanguage: 'Wersje Językowe Strony',
  mobileApp: 'Aplikacja Mobilna (PWA)',
  wcagAccessibility: 'WCAG 2.0 / 2.1 - Strona Dostosowana',
  
  // E-commerce Calculator
  ecommerceFullTitle: 'Sklep internetowy / E-commerce',
  ecommerceFullSubtitle: 'Kompleksowe rozwiązanie dla sprzedaży online.',
  ecommerceFullDescription: 'Zaawansowana platforma e-commerce z panelem administracyjnym.',
  productCountQuestion: 'Ile produktów będzie w sklepie?',
  productCountDescription: 'Wybierz przewidywaną liczbę produktów w katalogu.',
  products1to10: '1-10 produktów',
  products10to50: '10-50 produktów',
  products50to150: '50-150 produktów',
  products150to500: '150-500 produktów',
  products500plus: '500+ produktów',
  ecommerceFeaturesQuestion: 'Jakie dodatkowe funkcjonalności?',
  ecommerceFeaturesDescription: 'Wybierz dodatkowe funkcje dla swojego sklepu.',
  paymentIntegration: 'Integracja z systemami płatności',
  inventoryManagement: 'System zarządzania magazynem',
  crmIntegration: 'Integracja z systemem CRM',
  advancedAnalytics: 'Zaawansowana analityka sprzedaży',
  mobileShopApp: 'Aplikacja mobilna sklepu'
};

const englishTranslations: Translations = {
  // Navigation
  backToHome: 'Back to Home',
  backToSelection: 'Back to Selection',
  back: 'Back',
  nextStep: 'Next Step',
  completeEstimate: 'Complete Estimate',
  
  // Calculator Selector
  estimateProject: 'Estimate Project',
  estimateProjectDescription: 'Estimate your project in 4 steps. The calculator will provide an estimated cost that we will verify together during a free consultation.',
  currentEstimate: 'Estimated cost (net):',
  websiteTitle: 'Website',
  websiteDescription: 'Classic business website',
  ecommerceTitle: 'E-commerce / Online Store / Marketplace',
  ecommerceDescription: 'Comprehensive solution for online sales',
  systemTitle: 'ERP, CRM, Logistics, Production Systems',
  systemDescription: 'Dedicated business systems',
  select: 'Select',
  from: 'From',
  responsiveDesign: 'Responsive design',
  adminPanel: 'Admin panel',
  seoOptimization: 'SEO optimization',
  socialMediaIntegration: 'Social media integration',
  productCatalog: 'Product catalog',
  cartAndPayments: 'Cart and payments',
  managementPanel: 'Management panel',
  systemIntegrations: 'System integrations',
  dedicatedFunctionalities: 'Dedicated functionalities',
  externalIntegrations: 'External integrations',
  advancedReporting: 'Advanced reporting',
  scalability: 'Scalability',
  
  // Project Calculator
  calculatorProject: 'PROJECT CALCULATOR',
  additionalRequirements: 'Please write all additional requirements or important information here:',
  additionalRequirementsPlaceholder: 'Describe your additional requirements, technology preferences, deadlines, or other important information...',
  estimatedCostNetto: 'Estimated cost (net):',
  orMonthly: 'or with monthly payments',
  hideDetails: 'Hide Details',
  showDetails: 'Show Details',
  noSelectedOptions: 'No additional options selected',
  free: 'Free',
  
  // FAQ
  faqTitle: 'FAQ - Frequently Asked Questions',
  faqDescription: 'Before starting any IT project, a key step is accurate project estimation. Proper cost and resource estimation not only allows for realistic investment assessment.',
  viewFullFaq: 'View Full FAQ',
  
  // Website Calculator
  websiteClassicTitle: 'Classic Business Website',
  websiteClassicSubtitle: 'This is the most popular type of website.',
  websiteClassicDescription: 'Consists of multiple independent pages with a multi-level menu.',
  additionalElementsQuestion: 'What additional elements should we prepare?',
  additionalElementsDescription: 'Select all the functionalities you need.',
  analyticsIntegration: 'Analytics Integration and Traffic Audit',
  logoAndBranding: 'Logo Design and Branding',
  darkLightMode: 'Dark / Light Mode',
  newsletter: 'Newsletter Signup',
  multiLanguage: 'Multi-language Versions',
  mobileApp: 'Mobile App (PWA)',
  wcagAccessibility: 'WCAG 2.0 / 2.1 - Accessible Website',
  
  // E-commerce Calculator
  ecommerceFullTitle: 'E-commerce / Online Store',
  ecommerceFullSubtitle: 'Comprehensive solution for online sales.',
  ecommerceFullDescription: 'Advanced e-commerce platform with administration panel.',
  productCountQuestion: 'How many products will be in the store?',
  productCountDescription: 'Select the expected number of products in the catalog.',
  products1to10: '1-10 products',
  products10to50: '10-50 products',
  products50to150: '50-150 products',
  products150to500: '150-500 products',
  products500plus: '500+ products',
  ecommerceFeaturesQuestion: 'What additional features?',
  ecommerceFeaturesDescription: 'Select additional features for your store.',
  paymentIntegration: 'Payment Systems Integration',
  inventoryManagement: 'Inventory Management System',
  crmIntegration: 'CRM System Integration',
  advancedAnalytics: 'Advanced Sales Analytics',
  mobileShopApp: 'Mobile Store App'
};

export const translations = {
  pl: polishTranslations,
  en: englishTranslations
};

export const getTranslation = (lang: Language): Translations => {
  return translations[lang] || translations.pl;
};

// Helper function to format prices based on language
export const formatPrice = (price: number, lang: Language): string => {
  if (lang === 'pl') {
    return `${price.toLocaleString('pl-PL')} zł`;
  } else {
    // Convert PLN to EUR (approximate rate: 1 EUR = 4.3 PLN)
    const euroPrice = Math.round(price / 4.3);
    return `€${euroPrice.toLocaleString('en-US')}`;
  }
}; 