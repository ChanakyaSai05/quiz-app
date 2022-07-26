import React from "react";
import "./HomePage.css";
import TextField from "@mui/material/TextField";
import { InputLabel, MenuItem, Select } from "@mui/material";

function HomePage({
  setAmount,
  setDifficulty,
  setCategory,
  amount,
  difficulty,
  category,
  startButton,
}) {
  return (
    <div className="container">
      <div className="container-block">
        <h2>Setup Quiz</h2>
        <TextField
          id="outlined-name"
          label="Number of Questions"
          value={amount}
          className="my-1"
          onChange={(e) => setAmount(e.target.value)}
        />
        <InputLabel id="demo-simple-select-label" className="my-1 fw-bold">
          Category
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          label="Category"
          onChange={(e) => setCategory(e.target.value)}
        >
          <MenuItem value="sports">sports</MenuItem>
          <MenuItem value="history">history</MenuItem>
          <MenuItem value="politics">politics</MenuItem>
        </Select>
        <InputLabel id="demo-simple-select-label1 " className="my-2 fw-bold">
          Difficulty
        </InputLabel>
        <Select
          labelId="demo-simple-select-label1"
          id="demo-simple-select1"
          value={difficulty}
          label="Difficulty"
          onChange={(e) => setDifficulty(e.target.value)}
        >
          <MenuItem value="easy">easy</MenuItem>
          <MenuItem value="medium">medium</MenuItem>
          <MenuItem value="hard">hard</MenuItem>
        </Select>

        <button className="btn btn-lg btn-warning my-3" onClick={startButton}>
          Start
        </button>
      </div>
    </div>
  );
}

export default HomePage;
