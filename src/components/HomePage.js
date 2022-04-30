import React from "react";
// const API_ENDPOINT = "https://opentdb.com/api.php?";
function HomePage({
  // setQuestions,
  setAmount,
  setDifficulty,
  setCategory,
  //   setStart,
  amount,
  difficulty,
  //   table,
  category,
  startButton,
}) {
  //   const fetchData = async () => {
  //     const { data } = await axios.get(
  //       `${API_ENDPOINT}amount=${amount}&difficulty=${difficulty}&category=${table[category]}&type=multiple`
  //     );
  //     console.log(data);
  //     setQuestions(data);
  //   };
  //   const startButton = () => {
  //     setStart(true);
  //     fetchData();
  //   };
  return (
    <div>
      <h2>Setup Quiz</h2>
      <label htmlFor="questions">Number of Questions</label>
      <input
        type="text"
        id="questions"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <label htmlFor="category">Category</label>
      <select
        id="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="sports">sports</option>
        <option value="history">history</option>
        <option value="politics">politics</option>
      </select>
      <label htmlFor="difficulty">Select Difficulty</label>
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
