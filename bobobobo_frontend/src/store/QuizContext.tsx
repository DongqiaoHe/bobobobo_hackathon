import { createContext } from "react";

export type AnswerType = {
  id: number,
  answer: string,
  correct: boolean,
}

export type QuestionType = {
  id: number,
  question: string,
  answers: AnswerType[],
}

export type QuizContextType = {
  quiz: QuestionType[] | null,
  getQuiz: () => Promise<void>,
}

export const QuizContext = createContext<QuizContextType>({
  quiz: null,
  getQuiz: () => Promise.resolve(),
});

export const useQuiz = () => {
  return createContext(QuizContext);
}

export const QuizProvider = (
  { children }: { children: React.ReactNode }
) => {
  return (
    <QuizContext.Provider value={{
      quiz: null,
      getQuiz: () => Promise.resolve(),
    }}>
      {children}
    </QuizContext.Provider>
  )
}