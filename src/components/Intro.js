import React from "react";

export default function Intro({ startGame }) {
  return (
    <div className="intro">
      <h1>Quizzical</h1>
      <p>Prep for your next pub quiz with Quizzical!</p>
      <button className="btn btn-start" onClick={startGame}>
        Start Quiz
      </button>
    </div>
  );
}
