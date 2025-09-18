import { useTranslation } from "react-i18next";

export const LocaleQuestions = () => {
  const { t } = useTranslation();

  const questions = [
    {
      question: t("introduction"),
      answers: [],
      button: t("start"),
    },
    {
      question: t("relationship.introduction"),
      answers: [],
      button: t("next"),
    },
    {
      question: t("relationship.question_1.question"),
      answers: [
        t("relationship.question_1.answers.1"),
        t("relationship.question_1.answers.2"),
        t("relationship.question_1.answers.3"),
        t("relationship.question_1.answers.4"),
        t("relationship.question_1.answers.5"),
        t("relationship.question_1.answers.6"),
        t("relationship.question_1.answers.7"),
      ],
      button: t("next"),
    },
    {
      question: t("relationship.question_2.question"),
      answers: [
        t("relationship.question_2.answers.1"),
        t("relationship.question_2.answers.2"),
        t("relationship.question_2.answers.3"),
        t("relationship.question_2.answers.4"),
        t("relationship.question_2.answers.5"),
        t("relationship.question_2.answers.6"),
        t("relationship.question_2.answers.7"),
      ],
      button: t("next"),
    },
    {
      question: t("relationship.question_3.question"),
      answers: [
        t("relationship.question_3.answers.1"),
        t("relationship.question_3.answers.2"),
        t("relationship.question_3.answers.3"),
        t("relationship.question_3.answers.4"),
        t("relationship.question_3.answers.5"),
        t("relationship.question_3.answers.6"),
        t("relationship.question_3.answers.7"),
      ],
      button: t("next"),
    },
    {
      question: t("relationship.question_4.question"),
      answers: [
        t("relationship.question_4.answers.1"),
        t("relationship.question_4.answers.2"),
        t("relationship.question_4.answers.3"),
        t("relationship.question_4.answers.4"),
        t("relationship.question_4.answers.5"),
        t("relationship.question_4.answers.6"),
        t("relationship.question_4.answers.7"),
      ],
      button: t("next"),
    },
    {
      question: t("feeling.introduction"),
      answers: [],
      button: t("next"),
    },
    {
      question: t("feeling.question_1.question"),
      answers: [
        t("feeling.question_1.answers.1"),
        t("feeling.question_1.answers.2"),
        t("feeling.question_1.answers.3"),
        t("feeling.question_1.answers.4"),
        t("feeling.question_1.answers.5"),
        t("feeling.question_1.answers.6"),
        t("feeling.question_1.answers.7"),
      ],
      button: t("next"),
    },
    {
      question: t("feeling.question_2.question"),
      answers: [
        t("feeling.question_2.answers.1"),
        t("feeling.question_2.answers.2"),
        t("feeling.question_2.answers.3"),
        t("feeling.question_2.answers.4"),
        t("feeling.question_2.answers.5"),
        t("feeling.question_2.answers.6"),
        t("feeling.question_2.answers.7"),
      ],
      button: t("results"),
    },
  ];

  return questions;
}