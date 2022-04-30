import React, { useRef, useState } from "react";

function QuestionsPage({ questions }) {
  console.log(questions);
  const [index, setIndex] = useState(0);
  const [correct, setCorrect] = useState(0);
  const ref = useRef();
  const nextquestion = () => {
    if (index === 9) {
      alert(`You have got ${correct} marks`);
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
    console.log(correctAnswer);
    answers = [...questions[index].incorrect_answers];
    tempIndex = Math.floor(Math.random() * 4);
    if (tempIndex === 3) {
      answers.push(correctAnswer);
    } else {
      answers.push(answers[tempIndex]);
      answers[tempIndex] = correctAnswer;
    }
    console.log(answers);
  }

  //answerbutton
  const answerButton = (index) => {
    if (answers[index] === correctAnswer) {
      console.log(true);
      // setCorrect(true);
      setCorrect(correct + 1);
      nextquestion();
    } else {
      console.log(false);
      nextquestion();
    }
  };
  //
  console.log(correct);
  return (
    <>
      {!questions ? (
        "loading..."
      ) : (
        <div>
          {questions[index].question}
          <div>
            {answers.map((item, index) => (
              <div key={index}>
                <button onClick={() => answerButton(index)} ref={ref}>
                  {item}
                </button>
              </div>
            ))}
          </div>
          <div>
            <button onClick={nextquestion}>Next question</button>
          </div>
        </div>
      )}
    </>
  );
}

export default QuestionsPage;
