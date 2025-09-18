import "./AnswerOption.styles.css";
import { AnswerOptionProps } from "./AnswerOption.types";

export const AnswerOption = ({
  answer,
  index,
  isSelected,
  onSelect,
}: AnswerOptionProps) => {
  return (
    <div className="answer-container">
      <div className="radio-container">
        <input
          type="radio"
          name="answer"
          id={`answer-${index}`}
          value={index + 1}
          checked={isSelected}
          onChange={() => onSelect(index + 1)}
        />
      </div>
      <label htmlFor={`answer-${index}`}>{answer}</label>
    </div>
  );
};
