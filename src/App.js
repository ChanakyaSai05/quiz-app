import { useState } from "react";
import axios from "axios";
import "./App.css";
import HomePage from "./components/HomePage";
import QuestionsPage from "./components/QuestionsPage";
// const tempUrl =
// "https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple";
const API_ENDPOINT = "https://opentdb.com/api.php?";
function App() {
  const [questions, setQuestions] = useState();
  const [amount, setAmount] = useState(0);
  const [difficulty, setDifficulty] = useState("easy");
  const [category, setCategory] = useState("sports");
  const [start, setStart] = useState(false);
  const table = {
    sports: 21,
    history: 23,
    politics: 24,
  };
  console.log(questions);
  const fetchData = async () => {
    const { data } = await axios.get(
      `${API_ENDPOINT}amount=${amount}&difficulty=${difficulty}&category=${table[category]}&type=multiple`
    );
    console.log(data);
    setQuestions([...data.results]);
  };
  const startButton = () => {
    setStart(true);
    fetchData();
  };
  console.log(start);
  console.log(questions);

  return (
    <>
      {!start ? (
        <div>
          <HomePage
            startButton={startButton}
            amount={amount}
            difficulty={difficulty}
            category={category}
            setAmount={setAmount}
            setCategory={setCategory}
            setDifficulty={setDifficulty}
          />
        </div>
      ) : (
        <div>
          <QuestionsPage questions={questions} />
        </div>
      )}
    </>
  );
}

export default App;
