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
  const { quiz, current, getQuiz } = useQuiz();
  return (
    <div>
      <h1>Quiz</h1>
    </div>
  )
}