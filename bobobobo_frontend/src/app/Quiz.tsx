import { useState } from "react";
import { QuestionType, useQuiz } from "../store/QuizContext";

const tempQuiz:QuestionType[] = [
  {
    id: 1,
    question: "What is the capital of Indonesia?",
    answers: [
      {
        id: 1,
        answer: "Jakarta",
        correct: true,
      },
      {
        id: 2,
        answer: "Bandung",
        correct: false,
      },
      {
        id: 3,
        answer: "Bali",
        correct: false,
      },
      {
        id: 4,
        answer: "Surabaya",
        correct: false,
      },
    ]
  }, {
    id: 2,
    question: "What is the capital of Malaysia?",
    answers: [
      {
        id: 1,
        answer: "Jakarta",
        correct: false,
      },
      {
        id: 2,
        answer: "Bandung",
        correct: false,
      },
      {
        id: 3,
        answer: "Bali",
        correct: false,
      },
      {
        id: 4,
        answer: "Kuala Lumpur",
        correct: true,
      },
    ]
  }
]

export function QuizScreen() {
  const [quiz, setQuiz] = useState<QuestionType[]>(tempQuiz);
  const [current, setCurrent] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [finished, setFinished] = useState<boolean>(false);

  if (finished) {
    return (
      <div>
        <h1>Finished!</h1>
        <p>Your score is {score}</p>
      </div>
    )
  } else {
    return (
      <div>
        <h1>Quiz</h1>
      </div>
    )
  }
}