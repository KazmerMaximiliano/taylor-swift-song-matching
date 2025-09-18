import { AnswerOption } from "../AnswerOption/AnswerOption";
import { Button } from "../Button/Button";
import "./QuestionContent.styles.css";
import { QuestionContentProps } from "./QuestionContent.types";

export const QuestionContent = ({
  question,
  activeQuestionOptionSelected,
  handleOptionSelected,
  handleButtonDisabled,
  handleButtonAction,
  scrollAnswers,
}: QuestionContentProps) => {
  return (
    <>
      <p className="content-text">{question.question}</p>
      {question.answers.length > 0 && (
        <div className="answers" ref={scrollAnswers}>
          {question.answers.map((answer, index) => (
            <AnswerOption
              key={index}
              answer={answer}
              index={index}
              isSelected={
                activeQuestionOptionSelected !== null &&
                activeQuestionOptionSelected === index + 1
              }
              onSelect={handleOptionSelected}
            />
          ))}
        </div>
      )}
      <Button onClick={handleButtonAction} disabled={handleButtonDisabled()}>
        {question.button}
      </Button>
    </>
  );
};
