type Question = {
  type: number;
  order: number;
  text: string;
  label?: string;
  details?: string;
  required?: boolean;
  choices?: Choice[];
};

type Choice = {
  text: string;
  order: number;
};
