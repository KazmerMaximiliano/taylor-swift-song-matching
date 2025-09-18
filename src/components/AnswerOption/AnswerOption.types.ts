export type AnswerOptionProps = {
  answer: string;
  index: number;
  isSelected: boolean;
  onSelect: (index: number) => void;
}