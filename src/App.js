import "./App.css";
import { useState } from "react";
import Intro from "./components/Intro";
import QuestionList from "./components/QuestionList";

function App() {
  const [newGame, setNewGame] = useState(false);
  const [quizQuestions, setQuizQuestions] = useState();

  function startGame() {
    setNewGame(!newGame);
    setQuizQuestions(
      tempData.map((item) => {
        const correctAnswer = item.answer;
        const choices = [...item.wrongAnswers, correctAnswer];

        return {
          id: item.id,
          question: item.question,
          answer: correctAnswer,
          choices: choices.sort(() => Math.random() - 0.5),
        };
      })
    );
  }

  return (
    <main className="container">
      {newGame ? (
        <QuestionList quizQuestions={quizQuestions} startGame={startGame} />
      ) : (
        <Intro startGame={startGame} />
      )}
    </main>
  );
}

const tempData = [
  {
    id: 1,
    question: "What is 2+2?",
    answer: "4",
    wrongAnswers: ["2", "6", "3"],
  },

  {
    id: 2,
    question: "What is hello in french?",
    answer: "Bonjour",
    wrongAnswers: ["hola", "nein", "eh?"],
  },
  {
    id: 3,
    question: "question 3",
    answer: "bingo",
    wrongAnswers: ["lol", "never", "dunno pal"],
  },

  {
    id: 4,
    question: "question 4?",
    answer: "answer456",
    wrongAnswers: ["anser123", "answer898?", "answer976"],
  },
];

export default App;
