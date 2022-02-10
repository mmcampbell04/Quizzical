import { React } from "react";

export default function Question({ question, handleChange, userData }) {
  let answers = question.choices.map((choice, index) => {
    return (
      <div className="answer" key={index}>
        <input
          id={`option-${choice}`}
          type="radio"
          className="quiz-answers"
          name={question.question}
          value={choice}
          checked={userData[question.question] === choice}
          onChange={handleChange}
        />
        <label htmlFor={`option-${choice}`}>{choice}</label>
      </div>
    );
  });

  return (
    <div className="question-card">
      <h2>{question.question}</h2>
      <div className="answers-container">{answers}</div>
    </div>
  );
}
