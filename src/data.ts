export interface SurveyOption {
    id: number;
    option: string;
}
export interface SurveyQuestion {
    id: number;
    question: string;
    options: SurveyOption[];
}

export const surveyQuestions = [
  {
    id: 1,
    question: "How often do you visit the gym in a week?",
    options: [
      { id: 1, option: "Never" },
      { id: 2, option: "1-2 times" },
      { id: 3, option: "3 or more times" },
    ],
  },
  {
    id: 2,
    question: "What type of exercise do you prefer at the gym?",
    options: [
      { id: 1, option: "Cardiovascular" },
      { id: 2, option: "Strength training" },
      { id: 3, option: "Yoga or Pilates" },
    ],
  },
  {
    id: 3,
    question: "What time of day do you usually visit the gym?",
    options: [
      { id: 1, option: "Morning" },
      { id: 2, option: "Afternoon" },
      { id: 3, option: "Evening" },
    ],
  },
  {
    id: 4,
    question: "How important is the gym's location to you?",
    options: [
      { id: 1, option: "Very important" },
      { id: 2, option: "Somewhat important" },
      { id: 3, option: "Not important" },
    ],
  },
  {
    id: 5,
    question: "Do you prefer working out alone or with a partner or group?",
    options: [
      { id: 1, option: "Alone" },
      { id: 2, option: "With a partner" },
      { id: 3, option: "In a group" },
    ],
  },
  {
    id: 6,
    question: "How satisfied are you with the gym's equipment and facilities?",
    options: [
      { id: 1, option: "Very satisfied" },
      { id: 2, option: "Somewhat satisfied" },
      { id: 3, option: "Not satisfied" },
    ],
  },
  {
    id: 7,
    question: "Have you taken any gym classes or personal training sessions?",
    options: [
      { id: 1, option: "Yes" },
      { id: 2, option: "No" },
      { id: 3, option: "I'm interested but haven't yet" },
    ],
  },
  {
    id: 8,
    question: "How would you rate the customer service at the gym?",
    options: [{ id: 1, option: "Excellent" }, { id: 2, option: "Good" }, { id: 3, option: "Poor" }],
  },
  {
    id: 9,
    question:
      "Do you think the gym should offer more variety in its exercise classes?",
    options: [
      { id: 1, option: "Yes, definitely" },
      { id: 2, option: "Maybe, I'm not sure" },
      { id: 3, option: "No, I'm happy with the current offerings" },
    ],
  },
  {
    id: 10,
    question:
      "How likely are you to recommend the gym to a friend or family member?",
    options: [
      { id: 1, option: "Highly likely" },
      { id: 2, option: "Somewhat likely" },
      { id: 3, option: "Not likely" },
    ],
  },
];
