import React, { useRef, useState } from "react";
import "./QuestionsPage.css";
function QuestionsPage({ questions, setStart }) {
  console.log(questions);
  const [index, setIndex] = useState(0);
  const [correct, setCorrect] = useState(0);
  const ref = useRef();
  const nextquestion = () => {
    if (index === 9) {
      setIndex(10);
      alert(`You have got ${correct} marks`);
      setStart(false);
      return;
    }
    const index1 = index + 1;
    setIndex(index1);
  };

  console.log(questions);
  //answers
  let correctAnswer, answers, tempIndex;
  if (questions) {
    correctAnswer = questions[index].correct_answer;
    // console.log(correctAnswer);
    answers = [...questions[index].incorrect_answers];
    tempIndex = Math.floor(Math.random() * 4);
    if (tempIndex === 3) {
      answers.push(correctAnswer);
    } else {
      answers.push(answers[tempIndex]);
      answers[tempIndex] = correctAnswer;
    }
    // console.log(answers);
  }

  const answerButton = (index) => {
    if (answers[index] === correctAnswer) {
      // console.log(true);
      setCorrect(correct + 1);
      nextquestion();
    } else {
      // console.log(false);
      nextquestion();
    }
  };

  return (
    <>
      {!questions ? (
        "loading..."
      ) : (
        <div className="main">
          <div className="quiz-section">
            <p className="correct-answers">
              correct answers : {correct}/{index}
            </p>
            <div className="question-container">
              <h2>{questions[index].question}</h2>
              <div className="btn-container">
                {answers.map((item, index) => (
                  <div key={index}>
                    <button
                      className="answer-btn "
                      onClick={() => answerButton(index)}
                      ref={ref}
                    >
                      {item}
                    </button>
                  </div>
                ))}
              </div>
              <button className="next-question " onClick={nextquestion}>
                Next question
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default QuestionsPage;
