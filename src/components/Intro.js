import React from "react";

export default function Intro({
  startGame,
  categories,
  handleFormChange,
  userSelections,
}) {
  let category = categories.map((category) => {
    return (
      <option id={category.id} key={category.id} value={category.id}>
        {category.name}
      </option>
    );
  });

  return (
    <div className="intro">
      <h1>Quizzical</h1>
      <p className="subtitle">Prep for your next pub quiz with Quizzical!</p>
      <form className="form-intro">
        <div className="form-group">
          <label htmlFor="category" className="label-intro">
            Category:
          </label>
          <select
            name="category"
            className="input-intro"
            id="category"
            placeholder="Category"
            onChange={handleFormChange}
          >
            <option value="0">Choose a Category</option>
            {category}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="difficulty" className="label-intro"></label>
          Difficulty:
          <select
            name="difficulty"
            className="input-intro"
            value={userSelections.difficulty}
            id="difficulity"
            onChange={handleFormChange}
          >
            <option value="">Choose difficulty</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="question-number" className="label-intro"></label>
          Length:
          <input
            type="number"
            id="question-number"
            className="input-intro-number"
            name="amount"
            onChange={handleFormChange}
            value={userSelections.amount}
          ></input>
          <p className="smallprint">Max 50 questions!</p>
        </div>
        <div className="button-container">
          <button type="button" className="btn btn-start" onClick={startGame}>
            Start Quiz
          </button>
        </div>
      </form>
    </div>
  );
}
