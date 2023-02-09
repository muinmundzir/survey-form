// Data
import { SurveyQuestion } from "./data";

export function saveToLocalStorage(
  selectedOption: string | null,
  activeQuestion: SurveyQuestion
) {
  if (selectedOption === null) return;
  const localStorageData = JSON.parse(localStorage.getItem("surveyData") || "[]");

  const data = localStorageData.filter((item: any) => item.id !== activeQuestion.id) || []; 

  data.push({
    id: activeQuestion.id,
    question: activeQuestion.question,
    answer: selectedOption,
  });
  localStorage.setItem("surveyData", JSON.stringify(data));
}

export function removeFromLocalStorage() {
  localStorage.removeItem("surveyData");
}
