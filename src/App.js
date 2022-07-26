import { useState } from "react";
import axios from "axios";
import "./App.css";
import HomePage from "./Pages/HomePage";
import QuestionsPage from "./Pages/QuestionsPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

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
  // console.log(questions);
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
  // console.log(start);
  // console.log(questions);

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
          <QuestionsPage questions={questions} setStart={setStart} />
        </div>
      )}
    </>
  );
}

export default App;
