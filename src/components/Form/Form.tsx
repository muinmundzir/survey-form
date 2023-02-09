// Library
import { useState } from "react";

// Component
import Button from "../Button/Button";
import RadioInput from "./RadioInput";

// Data
import { surveyQuestions } from "../../data";

function Form() {
  const [questions, setQuestions] = useState(surveyQuestions);
  const [activeQuestion, setActiveQuestion] = useState(questions[0]);
  const [page, setPage] = useState(1);

  function handleSubmit() {
    if (page === surveyQuestions.length) {
        alert("Form submitted!")
    } else {
        setPage((prevValue) => prevValue + 1);
        setActiveQuestion(questions[page - 1]);
    }
  }

  function handleReset() {
    setPage(1);
    setActiveQuestion(questions[0]);
  }

  return (
    <section className="h-screen w-screen grid place-content-center content-center p-8 shadow-sm">
      <form className="rounded-2xl mb-5 bg-white py-5 px-10">
        <h1 className="mb-4 font-semibold text-2xl text-slate-300">Q{page}</h1>
        <p className="mb-4 font-semibold text-2xl text-purple-700">
          {activeQuestion.question}
        </p>
        {activeQuestion.options.map(({ option }, index) => (
          <RadioInput option={`${activeQuestion.id}`} label={option} key={index} />
        ))}
      </form>
      <Button text="Reset" onClick={handleReset} />
      <Button
        text={page === surveyQuestions.length ? "Submit" : "Next"}
        onClick={handleSubmit}
      />
    </section>
  );
}

export default Form;
