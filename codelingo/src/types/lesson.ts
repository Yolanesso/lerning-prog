export interface QuestionOption {
  id: number;
  text: string;
}

export interface ChoiceQuestion {
  type: 'choice';
  title: string;
  correctOption: number;
  options: QuestionOption[];
}

export interface InputQuestion {
  type: 'input';
  title: string;
  codePrefix: string;
  correctAnswer: string;
  placeholder: string;
}

export type Question = ChoiceQuestion | InputQuestion;
