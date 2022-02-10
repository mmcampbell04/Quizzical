import { React, useState } from "react";
// import { nanoid } from "nanoid";
import Question from "./Question";

export default function QuestionList({ quizQuestions }) {
  const [userData, setUserData] = useState([]);

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

  function handleChange(event) {
    // console.log(event);
    const { name, value } = event.target;

    setUserData((prevUserData) => {
      return {
        ...prevUserData,
        [name]: value,
      };
    });
  }

  console.log(userData);

  return (
    <main className="container">
      <form className="quiz-form">{question}</form>
    </main>
  );
}
