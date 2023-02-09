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
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [page, setPage] = useState(1);

  function handleSubmit() {
    if(selectedOption === null) return alert("Please select an option");

    if (page === surveyQuestions.length) {
      alert("Form submitted!");
    } else {
      setPage(page + 1);
      setActiveQuestion(questions[page]);
      setSelectedOption(null);
      alert(selectedOption);
      console.log(selectedOption);
    }
  }

  function handleReset() {
    setPage(1);
    setActiveQuestion(questions[0]);
  }

  function handleOptionChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSelectedOption(e.target.value);
  }

  return (
    <section className="h-screen w-screen grid place-content-center content-center p-8 shadow-sm">
      <form className="rounded-2xl mb-5 bg-white py-5 px-10">
        <h1 className="mb-4 font-semibold text-2xl text-slate-300">Q{page}</h1>
        <p className="mb-4 font-semibold text-2xl text-purple-700">
          {activeQuestion.question}
        </p>
        {activeQuestion.options.map(({ option, id }, index) => (
          <RadioInput
            selectedOption={selectedOption}
            onChange={handleOptionChange}
            id={id}
            option={`${activeQuestion.id}`}
            label={option}
            key={index}
          />
        ))}
      </form>
      <Button disabled={page === 1} text="Reset" onClick={handleReset} />
      <Button
        text={page === surveyQuestions.length ? "Submit" : "Next"}
        onClick={handleSubmit}
      />
    </section>
  );
}

export default Form;
