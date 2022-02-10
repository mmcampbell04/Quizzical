import "./App.css";
import { useState } from "react";
import QuestionList from "./components/QuestionList";

function App() {
  // eslint-disable-next-line
  const [quizQuestions, setQuizQuestions] = useState(tempData);

  return <QuestionList quizQuestions={quizQuestions} />;
}

const tempData = [
  {
    id: 1,
    question: "What is 2+2?",
    answer: "4",
    choices: ["2", "6", "4", "3"],
    selected: "",
  },

  {
    id: 2,
    question: "What is hello in french?",
    answer: "Bonjour",
    choices: ["hola", "nein", "eh?", "Bonjour"],
  },
  {
    id: 3,
    question: "question 3",
    answer: "bingo",
    choices: ["bingo", "lol", "never", "dunno pal"],
  },

  {
    id: 4,
    question: "question 4?",
    answer: "answer456",
    choices: ["anser123", "answer456", "answer898?", "answer976"],
  },
];

export default App;
