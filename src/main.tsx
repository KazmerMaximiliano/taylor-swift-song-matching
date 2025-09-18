import React from "react";
import ReactDOM from "react-dom/client";
import "./locale/i18n";
import { QuizScreen } from "./screens/QuizScreen/QuizScreen";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QuizScreen />
  </React.StrictMode>
);
