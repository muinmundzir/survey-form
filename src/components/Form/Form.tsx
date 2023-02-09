// Library
import { useCallback, useEffect, useState } from "react";

// Component
import Button from "../Button/Button";
import RadioInput from "./RadioInput";

// Data
import { SurveyQuestion, surveyQuestions } from "../../data";

// Helper
import { removeFromLocalStorage, saveToLocalStorage } from "../../helper";
import Timer from "../Timer/Timer";

function Form() {
  const [questions, setQuestions] = useState<SurveyQuestion[]>(surveyQuestions);
  const [activeQuestion, setActiveQuestion] = useState<SurveyQuestion>(
    questions[0]
  );
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);
  const [timer, setTimer] = useState<number>(180);

  function handleSubmit() {
    if (selectedOption === null) return alert("Please select an option");

    if (page === surveyQuestions.length) {
      alert("Form submitted!");
      removeFromLocalStorage();
      setPage(1);
    } else {
      saveToLocalStorage(selectedOption, activeQuestion);
      setPage((prevValue) => prevValue + 1);
      setActiveQuestion(questions[page]);
      setSelectedOption(null);
    }
    console.log("submit");
  }

  function handleReset() {
    setPage(1);
    setActiveQuestion(questions[0]);
    setSelectedOption(null);
    setTimer(180);
    console.log("reset");
  }

  function handleOptionChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSelectedOption(e.target.value);
    console.log("change");
  }

 const handleTimer = useCallback(() => {
    alert("Time is up!");
    setPage(questions.length);
    setActiveQuestion(questions[questions.length - 1]);
    setSelectedOption(null);
    setTimer(5)
    console.log("timer");
  }, [timer]);

  return (
    <section className="h-screen w-auto sm:max-w-md grid mx-auto content-center p-8 md:p-0 shadow-sm">
      <Timer timer={timer} handleTimer={handleTimer} />
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
