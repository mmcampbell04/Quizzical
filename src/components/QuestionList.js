import { React, useState } from "react";
// import { nanoid } from "nanoid";
import Question from "./Question";

export default function QuestionList({ quizQuestions }) {
  const [userData, setuserData] = useState({});
  const [score, setScore] = useState(0);
  const [formEdits, setFormEdits] = useState(true);
  const [gameOver, setGameOver] = useState(false);

  let question = quizQuestions.map((question) => {
    return (
      <Question
        id={question.id}
        key={question.id}
        question={question}
        handleChange={handleChange}
        userData={userData}
      />
    );
  });

  // handles changes of radio buttons
  function handleChange(event) {
    const { name, value } = event.target;

    setuserData((prevuserData) => {
      return {
        ...prevuserData,
        [name]: value,
      };
    });
  }

  console.log(userData);

  function onFormSubmit(e) {
    e.preventDefault();
    setFormEdits((formEdits) => !formEdits);
  }

  console.log(formEdits);

  // validate the users inputs compared to correct answers and increase score
  function validateAnswers() {
    // for each quiz question, check if the selected answer is actually the correct answer & if yes, increase score
    quizQuestions.forEach((question) => {
      const userAnswer = userData[question.question];
      if (userAnswer === question.answer) {
        setScore((prevScore) => prevScore + 1);
      }
    });

    setGameOver((prevGameOver) => !prevGameOver);
  }
  console.log(gameOver);

  return (
    <main className="container">
      <form className="quiz-form" onSubmit={onFormSubmit}>
        {question}
        <div className="buttons-container">
          <button className="btn btn-validate" onClick={validateAnswers}>
            Check answers
          </button>
        </div>
      </form>
      <div className="score-message">
        <h3>{score}</h3>
        <button>Play again</button>
      </div>
    </main>
  );
}
