import { useEffect, useState } from "react";
import "./App.css";
import HomePage from "./components/HomePage";
import axios from "axios";
import QuestionsPage from "./components/QuestionsPage";
const tempUrl =
  "https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple";

function App() {
  return (
    <div>
      <HomePage />
    </div>
  );
}

export default App;
