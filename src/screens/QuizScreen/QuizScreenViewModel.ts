import { useEffect, useRef, useState } from "react";
import { LanguageOption } from "../../components/LanguageSelector/LanguageSelector.types";
import { TaylorSwiftMatcher } from "../../models/taylor_swift_matcher";
import { LocaleQuestions } from "./questions";

export const QuizScreenViewModel = () => {
  const languageOptions: LanguageOption[] = [
    { value: "en", label: "EN" },
    { value: "es", label: "ES" },
  ];

  const [matcher, setMatcher] = useState<TaylorSwiftMatcher>();
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [results, setResults] = useState<string[]>([]);
  const [relationshipInputs, setRelationshipInputs] = useState<number[]>([]);
  const [feelingInputs, setFeelingInputs] = useState<number[]>([]);
  const [activeQuestionOptionSelected, setActiveQuestionOptionSelected] = useState<number | null>(null);
  const [finished, setFinished] = useState<boolean>(false);
  const scrollAnswers = useRef<HTMLDivElement>(null);

  const questions = LocaleQuestions();

  const processCSV = (str: string, delim = ','): string[][] => {
    return str.split('\n').map(row => row.split(delim));
  };

  const handleOptionSelected = (option: number) => {
    setActiveQuestionOptionSelected(option);
  }

  const handleButtonDisabled = () => {
    if (activeQuestion <= 1 || activeQuestion === 6) {
      return false;
    } else {
      return activeQuestionOptionSelected === null;
    }
  }

  const handleButtonAction = () => {
    if (activeQuestion > 1 && activeQuestion <= 5) {
      if (activeQuestionOptionSelected !== null) {
        setRelationshipInputs([...relationshipInputs, activeQuestionOptionSelected]);
      }
    } else if (activeQuestion === 7) {
      if (activeQuestionOptionSelected !== null) {
        setFeelingInputs([...feelingInputs, activeQuestionOptionSelected]);
      }
    } else if (activeQuestion === 8) {
      if (activeQuestionOptionSelected !== null) {
        setFeelingInputs([...feelingInputs, activeQuestionOptionSelected]);
        setFinished(true);
      }
    }

    if (activeQuestion < questions.length - 1) {
      setActiveQuestionOptionSelected(null);
      setActiveQuestion(activeQuestion + 1);

      if (scrollAnswers.current) {
        scrollAnswers.current.scrollTop = 0;
      }
    }
  }

  const handleReset = () => {
    setActiveQuestion(0);
    setResults([]);
    setRelationshipInputs([]);
    setFeelingInputs([]);
    setActiveQuestionOptionSelected(null);
    setFinished(false);
  }

  useEffect(() => {
    const handleMatch = () => {
      if (matcher) {
        const matchedSongs = matcher.matchSong(relationshipInputs, feelingInputs);
        setResults(matchedSongs);
      } else {
        console.log('No hay datos cargados.');
      }
    };

    if (finished) {
      handleMatch();
    }
  }, [feelingInputs, finished, matcher, relationshipInputs]);

  useEffect(() => {
    const loadAndProcessCSV = async () => {
      const response = await fetch('assets/Grades_Embed.csv');
      const csvText = await response.text();
      const data = processCSV(csvText);
      const newMatcher = new TaylorSwiftMatcher(data);
      setMatcher(newMatcher);
    };

    loadAndProcessCSV();
  }, []);

  return {
    activeQuestion,
    questions,
    handleOptionSelected,
    handleButtonDisabled,
    handleButtonAction,
    activeQuestionOptionSelected,
    scrollAnswers,
    results,
    languageOptions,
    handleReset
  };
}