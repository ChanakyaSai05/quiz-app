import React, { createContext, useContext, useState } from "react";
const Quiz = createContext();
const QuizContext = ({ children }) => {
    const [amount,setAmount]=useState(10);
    const [category,setCategory]=useState("sports");
    const [difficulty,setDifficulty]=useState("easy")
    useEffect(() => {
    
      return () => {
        second
      }
    }, [amount,category,difficulty])
    
  return (
  <Quiz.Provider>
      {children}
      </Quiz.Provider>
      )
};
export default QuizContext;
export const QuizState = () => {
  return useContext(Quiz);
};
