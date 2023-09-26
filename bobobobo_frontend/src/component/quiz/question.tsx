import { QuestionType } from "../../store/QuizContext";

export function Question({
  question,
  onAnswer
}: {
  question: QuestionType,
  onAnswer: (answer: number) => void,
}) {
  return (
    <div>
      <h2>{question.question}</h2>
      <ul>
        {question.answers.map((answer) => (
          <li key={answer.id}>
            <button onClick={() => onAnswer(answer.id)}>
              {answer.answer}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}