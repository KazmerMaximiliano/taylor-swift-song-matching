import { useTranslation } from "react-i18next";
import "./quiz_screen_styles.css";
import { QuizViewModel } from "./quiz_view_model";

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
  } = QuizViewModel();

  const { t } = useTranslation();

  return (
    <div className="container">
      <div className="card">
        <div className="title-container">
          <h1 className="title">Taylor Swift</h1>
          <h2 className="subtitle">Song Matching</h2>
        </div>
        <div className="divider">
          <div className="shadow"></div>
        </div>
        <div className="content-container">
          {results.length === 0 ? (
            <>
              <p className="content-text">
                {questions[activeQuestion].question}
              </p>
              {questions[activeQuestion].answers.length > 0 && (
                <div className="answers" ref={scrollAnswers}>
                  {questions[activeQuestion].answers.map((answer, index) => (
                    <div key={index} className="answer-container">
                      <div className="radio-container">
                        <input
                          type="radio"
                          name="answer"
                          id={`answer-${index}`}
                          value={index + 1}
                          checked={
                            activeQuestionOptionSelected !== null &&
                            activeQuestionOptionSelected === index + 1
                          }
                          onChange={() => handleOptionSelected(index + 1)}
                        />
                      </div>
                      <label htmlFor={`answer-${index}`}>{answer}</label>
                    </div>
                  ))}
                </div>
              )}
              <div className="btn-container">
                <button
                  className="btn btn-pink"
                  onClick={() => {
                    handleButtonAction();
                  }}
                  disabled={handleButtonDisabled()}
                >
                  {questions[activeQuestion].button}
                </button>
              </div>
            </>
          ) : (
            <div className="results">
              {results.map((song, index) => (
                <iframe
                  key={index}
                  style={{ borderRadius: "12px" }}
                  src={song}
                  width="100%"
                  height="100"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                ></iframe>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="footer">
        <p>
          {t("created_by")}{" "}
          <b>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/maximiliano-kazmer/"
            >
              Kazmer Maximiliano
            </a>
          </b>
        </p>
        <p>
          {t("thanks")}{" "}
          <b>
            <a target="_blank" href="https://github.com/meganmansfield">
              Megan Mansfield
            </a>{" "}
            -{" "}
            <a
              target="_blank"
              href="https://github.com/meganmansfield/taylorswift"
            >
              {t("reference")}
            </a>
          </b>
        </p>
      </div>
    </div>
  );
};
