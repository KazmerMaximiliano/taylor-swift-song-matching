import { RefObject } from "react";

export type Question = {
  question: string;
  answers: string[];
  button: string;
}

export type QuestionContentProps = {
  question: Question;
  activeQuestionOptionSelected: number | null;
  handleOptionSelected: (index: number) => void;
  handleButtonDisabled: () => boolean;
  handleButtonAction: () => void;
  scrollAnswers: RefObject<HTMLDivElement>;
}