import "./App.css";
import { useState, useEffect } from "react";
import Intro from "./components/Intro";
import QuestionList from "./components/QuestionList";

function App() {
  const [newGame, setNewGame] = useState(false);
  const [quizQuestions, setQuizQuestions] = useState([]);

  function startGame() {
    setNewGame(!newGame);
  }

  function resetGame() {
    startGame();
    fetchQuizData();
  }

  function fetchQuizData() {
    fetch("https://opentdb.com/api.php?amount=5&type=multiple")
      .then((res) => res.json())
      .then((result) => {
        setQuizQuestions(
          result.results.map((item) => {
            const correctAnswer = item.correct_answer;
            const choices = [...item.incorrect_answers, correctAnswer];
            return {
              id: item.question,
              question: item.question,
              correctAnswer: correctAnswer,
              choices: choices.sort(() => Math.random() - 0.5),
            };
          })
        );
      });
  }

  useEffect(() => {
    fetchQuizData();
  }, []);

  return (
    <main className="container">
      {newGame ? (
        <QuestionList quizQuestions={quizQuestions} resetGame={resetGame} />
      ) : (
        <Intro startGame={startGame} />
      )}
    </main>
  );
}

// const tempData = [
//   {
//     id: 1,
//     question: "What is 2+2?",
//     answer: "4",
//     wrongAnswers: ["2", "6", "3"],
//   },

//   {
//     id: 2,
//     question: "What is hello in french?",
//     answer: "Bonjour",
//     wrongAnswers: ["hola", "nein", "eh?"],
//   },
//   {
//     id: 3,
//     question: "question 3",
//     answer: "bingo",
//     wrongAnswers: ["lol", "never", "dunno pal"],
//   },

//   {
//     id: 4,
//     question: "question 4?",
//     answer: "answer456",
//     wrongAnswers: ["anser123", "answer898?", "answer976"],
//   },
// ];

export default App;
