import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { LanguageSelector } from "../../components/LanguageSelector/LanguageSelector";
import { QuestionContent } from "../../components/QuestionContent/QuestionContent";
import { Results } from "../../components/Results/Results";
import "./QuizScreen.styles.css";
import { QuizScreenViewModel } from "./QuizScreenViewModel";

export const QuizScreen = () => {
  const {
    activeQuestion,
    questions,
    handleOptionSelected,
    handleButtonDisabled,
    handleButtonAction,
    activeQuestionOptionSelected,
    scrollAnswers,
    results,
    languageOptions,
    handleReset,
  } = QuizScreenViewModel();

  return (
    <div className="container">
      <div className="language-selector-container">
        <LanguageSelector options={languageOptions} />
      </div>

      <div className="card">
        <Header />
        <div className="divider">
          <div className="shadow"></div>
        </div>
        <div className="content-container">
          {results.length === 0 ? (
            <QuestionContent
              question={questions[activeQuestion]}
              activeQuestionOptionSelected={activeQuestionOptionSelected}
              handleOptionSelected={handleOptionSelected}
              handleButtonDisabled={handleButtonDisabled}
              handleButtonAction={handleButtonAction}
              scrollAnswers={scrollAnswers}
            />
          ) : (
            <Results results={results} onReset={handleReset} />
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};
