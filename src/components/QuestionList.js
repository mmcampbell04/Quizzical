import { React, useState } from "react";
// import { nanoid } from "nanoid";
import Question from "./Question";

export default function QuestionList({ quizQuestions, startGame }) {
  const [userData, setuserData] = useState({});
  const [score, setScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  let question = quizQuestions.map((question) => {
    return (
      <Question
        id={question.id}
        key={question.id}
        question={question}
        handleChange={handleChange}
        userData={userData}
        isDisabled={isDisabled}
        startGame={startGame}
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

  // validate the users inputs compared to correct answers and increase score
  function validateAnswers() {
    // for each quiz question, check if the selected answer is actually the correct answer & if yes, increase score
    quizQuestions.forEach((question) => {
      const userAnswer = userData[question.question];
      if (userAnswer === question.answer) {
        setScore((prevScore) => prevScore + 1);
      }
    });

    setIsGameOver(!isGameOver);
    setIsDisabled(!isDisabled);
  }

  return (
    <div>
      <div className="quiz-form">{question}</div>
      {isGameOver === false ? (
        <button className="btn btn-validate" onClick={validateAnswers}>
          Check answers
        </button>
      ) : (
        <div className="score-message">
          <h3>{`You have scored ${score}/5`}</h3>
          <button className="btn btn-play" onClick={startGame}>
            Play again
          </button>
        </div>
      )}
    </div>
  );
}
