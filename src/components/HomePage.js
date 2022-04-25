import React, { useEffect, useState } from "react";
import axios from "axios";
const API_ENDPOINT = "https://opentdb.com/api.php?";
function HomePage() {
  const [questions, setQuestions] = useState([]);
  const [amount, setAmount] = useState(0);
  const [difficulty, setDifficulty] = useState("easy");
  const [category, setCategory] = useState("sports");
  const table = {
    sports: 21,
    history: 23,
    politics: 24,
  };
  const fetchData = async () => {
    const data = await axios.get(
      `${API_ENDPOINT}amount=${amount}&difficulty=${difficulty}&category=${table[category]}&type=multiple`
    );
    console.log(data);
    setQuestions(data);
  };
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(questions);
  const startButton = () => {
    fetchData();
  };
  return (
    <div>
      <h2>Setup Quiz</h2>
      <label for="questions">Number of Questions</label>
      <input
        type="text"
        id="questions"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <label for="category">Category</label>
      <select
        id="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="sports">sports</option>
        <option value="history">history</option>
        <option value="politics">politics</option>
      </select>
      <label for="difficulty">Select Difficulty</label>
      <select
        id="difficulty"
        value={difficulty}
        onChange={(e) => setDifficulty(e.target.value)}
      >
        <option value="easy">easy</option>
        <option value="medium">medium</option>
        <option value="hard">hard</option>
      </select>
      <button onClick={startButton}>Start</button>
    </div>
  );
}

export default HomePage;
