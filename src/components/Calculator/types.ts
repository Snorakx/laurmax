export interface CalculatorOption {
  id: string;
  title: string;
  description?: string;
  price: number;
  selected: boolean;
  category?: string;
}

export interface CalculatorStep {
  id: string;
  title: string;
  description: string;
  options: CalculatorOption[];
  multipleSelection?: boolean;
  required?: boolean;
}

export interface CalculatorTemplate {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  basePrice: number;
  steps: CalculatorStep[];
}

export interface CalculatorState {
  currentStep: number;
  selectedOptions: Record<string, CalculatorOption[]>;
  totalPrice: number;
  showDetails: boolean;
} 