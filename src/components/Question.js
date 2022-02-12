import { React } from "react";

export default function Question({
  question,
  handleChange,
  userData,
  isDisabled,
  isGameOver,
}) {
  let answers = question.choices.map((choice, index) => {
    return (
      <div className="answer" key={index}>
        <label
          className={`${
            // is the game over?
            // if yes and the input is the correct ansewr set it to green
            // if yes & the user answer is not the corerct answer set it to red
            isGameOver
              ? choice === question.correctAnswer
                ? "label-right"
                : userData[question.id] === choice
                ? "label-wrong"
                : ""
              : userData[question.id] === choice
              ? "selected"
              : ""
          }`}
        >
          {choice}
          <input
            id={`option-${choice}`}
            type="radio"
            className="quiz-answers"
            name={question.id}
            value={choice}
            answer={question.answer}
            checked={userData[question.question] === choice}
            onChange={handleChange}
            disabled={isDisabled}
          />
        </label>
      </div>
    );
  });

  function cleanupQuestion() {
    return { __html: question.question };
  }

  return (
    <div className="question-card">
      <h2 dangerouslySetInnerHTML={cleanupQuestion()}></h2>
      <div className="answers-container">{answers}</div>
    </div>
  );
}

// if the game is over - the correct answer is green
// if the game is over & the user answer is not the correct answer, it is red
