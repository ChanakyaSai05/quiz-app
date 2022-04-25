import React, { createContext, useContext } from "react";
const Quiz = createContext();
const QuizContext = ({ children }) => {
  return <Quiz.Provider>{children}</Quiz.Provider>;
};
export default QuizContext;
export const QuizState = () => {
  return useContext(Quiz);
};
