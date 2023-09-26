import { createContext, useContext } from "react";

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
  current: number | null,
  quiz: QuestionType[] | null,
  getQuiz: () => Promise<void>,
  hasNext: () => boolean,
  hasPrev: () => boolean,
  next: () => void,
  prev: () => void,
}

export const QuizContext = createContext<QuizContextType>({
  current: null,
  quiz: null,
  getQuiz: () => Promise.resolve(),
  hasNext: () => false,
  hasPrev: () => false,
  next: () => {},
  prev: () => {},
});

export const useQuiz = () => {
  return useContext(QuizContext);
}

export const QuizProvider = (
  { children }: { children: React.ReactNode }
) => {
  return (
    <QuizContext.Provider value={{
      current: null,
      quiz: [],
      getQuiz: () => Promise.resolve(),
      hasNext: () => false,
      hasPrev: () => false,
      next: () => {},
      prev: () => {},
    }}>
      {children}
    </QuizContext.Provider>
  )
}