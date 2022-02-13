import "./App.css";
import { useState, useEffect } from "react";
import Intro from "./components/Intro";
import QuestionList from "./components/QuestionList";

function App() {
  const [newGame, setNewGame] = useState(false);
  const [quizQuestions, setQuizQuestions] = useState([]);
  // get categories from api
  const [categories, setCategories] = useState([]);
  // get user picks for api call
  const [userSelections, setUserSelections] = useState({
    category: "",
    difficulty: "",
    amount: 5,
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setUserSelections((prevUserSelections) => {
      return {
        ...prevUserSelections,
        [name]: value,
      };
    });
  };

  useEffect(() => {
    fetch("https://opentdb.com/api_category.php")
      .then((res) => res.json())
      .then((result) => {
        setCategories(result.trivia_categories);
      });
  }, []);

  function startGame(e) {
    e.preventDefault();
    fetch(
      `https://opentdb.com/api.php?amount=${userSelections.amount}&category=${userSelections.category}&difficulty=${userSelections.difficulty}&type=multiple`
    )
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
    setNewGame(!newGame);
  }

  function resetGame() {
    setNewGame(!newGame);
  }

  return (
    <main
      className={`container ${
        quizQuestions.length <= 5 ? "small-container" : ""
      }`}
    >
      {newGame ? (
        <QuestionList quizQuestions={quizQuestions} resetGame={resetGame} />
      ) : (
        <Intro
          startGame={startGame}
          categories={categories}
          userSelections={userSelections}
          handleFormChange={handleFormChange}
        />
      )}
    </main>
  );
}

export default App;
