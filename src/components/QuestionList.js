import { React, useState } from "react";
// import { nanoid } from "nanoid";
import Question from "./Question";
import { BallTriangle } from "react-loader-spinner";

export default function QuestionList({ quizQuestions, resetGame }) {
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
        isGameOver={isGameOver}
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
      const userAnswer = userData[question.id];
      if (userAnswer === question.correctAnswer) {
        setScore((prevScore) => prevScore + 1);
      }
    });

    setIsGameOver(!isGameOver);
    setIsDisabled(!isDisabled);
  }

  return (
    <div className="content">
      {/* if quizdata has returned show the questions, otherwise show a loading spinnner */}
      {quizQuestions.length > 0 ? (
        question
      ) : (
        <BallTriangle
          heigth="100"
          width="100"
          color="grey"
          ariaLabel="loading-indicator"
          className="loader"
        />
      )}
      {isGameOver === false ? (
        <div className="button-container">
          {quizQuestions.length > 0 ? (
            <button className="btn btn-validate" onClick={validateAnswers}>
              Check answers
            </button>
          ) : (
            ""
          )}
        </div>
      ) : (
        <div className="score-message">
          <h3>{`You have scored ${score}/${quizQuestions.length}`}</h3>
          <button className="btn btn-play" onClick={resetGame}>
            Play again
          </button>
        </div>
      )}
    </div>
  );
}
