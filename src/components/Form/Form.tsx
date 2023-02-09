// Library
import { Fragment, useCallback, useEffect, useState } from "react";

// Component
import Button from "../Button/Button";
import RadioInput from "./RadioInput";

// Data
import { SurveyQuestion, surveyQuestions } from "../../data";

// Helper
import { removeFromLocalStorage, saveToLocalStorage } from "../../helper";
import Timer from "../Timer/Timer";
import Review from "./Review";

function Form() {
  const [questions, setQuestions] = useState<SurveyQuestion[]>(surveyQuestions);
  const [activeQuestion, setActiveQuestion] = useState<SurveyQuestion>(
    questions[0]
  );
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);
  const [timer, setTimer] = useState<number>(60);
  const [isForm, setIsForm] = useState<boolean>(true);

  const handleSubmit = () => {
    if (selectedOption === null) return alert("Please select an option");

    if (page === surveyQuestions.length) {
      alert("Form submitted!");
      setIsForm(false);
      setPage(1);
    } else {
      saveToLocalStorage(selectedOption, activeQuestion);
      setPage((prevValue) => prevValue + 1);
      setActiveQuestion(questions[page]);
      setSelectedOption(null);
    }
  };

  const handleReset = () => {
    setIsForm(true);
    setPage(1)
    setActiveQuestion(questions[0]);
    removeFromLocalStorage();
  };

  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(e.target.value);
  };

  const handleTimer = useCallback(() => {
    alert("Time is up!");
    setIsForm(false);
  }, []);

  return (
    <section className="w-auto sm:max-w-md py-8">
      {isForm ? <Timer timer={timer} handleTimer={handleTimer} /> : null}
      <form className="rounded-2xl mb-5 bg-white py-5 px-10 shadow-sm">
        {isForm ? (
          <Fragment>
            <h1 className="mb-4 font-semibold text-2xl text-slate-300">
              Q{page}
            </h1>
            <p className="mb-4 font-semibold text-2xl text-purple-700">
              {activeQuestion.question}
            </p>{" "}
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
          </Fragment>
        ) : (
          <Review />
        )}
      </form>
      {!isForm ? <Button text="Reset" onClick={handleReset} /> : null}
      {isForm ? (
        <Button
          text={page === surveyQuestions.length ? "Submit" : "Next"}
          onClick={handleSubmit}
        />
      ) : null}
    </section>
  );
}

export default Form;
