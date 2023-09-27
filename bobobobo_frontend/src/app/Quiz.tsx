import { useCallback, useMemo, useState } from "react";
import { Question } from "../component/quiz/question";
import { Button, Paper, useTheme } from "@mui/material";
import Header from "../component/Header";
import { PageContainer } from "../component/PageContainer";
import questions from "../data/questions.json"
import axios from "axios";
import Avatar from "@mui/material/Avatar";
import * as React from "react";
import {useNavigate} from "react-router-dom";

const shuffleArray = (array:any[]) => {
  let tempArray = [...array]; // Create a copy so we don't modify the original
  for (let i = tempArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [tempArray[i], tempArray[j]] = [tempArray[j], tempArray[i]]; // Swap elements
  }
  return tempArray;
};

const getRandomFiveElements = (array:any[]) => {
  if (array.length < 5) {
    throw new Error("Array must have at least 5 elements");
  }
  
  const shuffled = shuffleArray(array);
  return shuffled.slice(0, 5);
};

let tempQuiz = getRandomFiveElements(questions);

const BASE_SCORE = 10;

const getScoreMessage = (score: number) => {
  if (score <= Math.floor(BASE_SCORE * 5 * 0.6)) {
    return "You Can Do Better Next Time!"
  } else if (score !== BASE_SCORE * 5) {
    return "Congratulations!"
  } else {
    return "Incredibly Well Done!"
  }
}

export type QuizAnswersType = {
  [questionId: number]: number;
};

export function QuizScreen() {
  const navigate = useNavigate();
  const onClickAvatar = () => {
    navigate('/profile');
  }
  const [quizAnswers, setQuizAnswers] = useState<QuizAnswersType>({});
  const [current, setCurrent] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [finished, setFinished] = useState<boolean>(false);
  const hasNext = useMemo(() => current < tempQuiz.length - 1, [current]);
  const hasPrev = useMemo(() => current > 0, [current]);
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  const theme = useTheme();

  const postQuizResult = (correct:number, incorrectNum:number) => {
    axios.patch(
      "/quiz",
      {
        "quiz_correct": correct,
        "quiz_wrong": incorrectNum
      }
    ).catch(e => {
      console.log(e.response)
    })
  }

  return (
    <>
      <Header
          title="Quiz"
          left={
            <Button href="/landing" variant="text">
              Dashboard
            </Button>
          }
          right={
            <Avatar alt="Profile" src="/static/images/avatar/1.jpg" onClick={onClickAvatar} />}
      />
      <PageContainer>
        <Paper
          sx={{
            p: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {
            finished?(
              <>
                <h1 style={{
                  color: theme.palette.success.main
                }}>{getScoreMessage(score)}</h1>
                <h3>Your Score is {score} Points!</h3>
                <Button variant="contained" onClick={() => {
                  setCurrent(0);
                  setFinished(false);
                  tempQuiz = getRandomFiveElements(questions);
                }}>
                  Redo
                </Button>
              </>
            ):(
              <>
                {tempQuiz && (
                <Question
                  key={tempQuiz[current].id}
                  question={tempQuiz[current]}
                  onAnswer={(answer:any) => {
                    setQuizAnswers({
                      ...quizAnswers,
                      [tempQuiz[current].id]: answer,
                    });
                  }}
                />
              )}
              <div style={{
                display: "flex",
                flexDirection: "row",
                gap: 24,
                marginTop: 16,
              }}>
                {hasPrev && (
                <Button style={{
                  width: 120,
                  alignSelf: "flex-end"
                }} variant="outlined" onClick={prev} color="success">
                  Prev
                </Button>
              )}
              {hasNext && (
                <Button style={{
                  width: 120,
                  alignSelf: "flex-end"
    
                }} variant="contained" onClick={next} color="success">
                  Next
                </Button>
              )}
              {
                !hasNext && (
                  <Button style={{
                    width: 120,
                    alignSelf: "flex-end"
                  }} variant="contained" onClick={() => {
                    setFinished(true);
                    let tempScore = 0;
                    let correctNum = 0;
                    Object.entries(quizAnswers).map(([questionId, answerId]) => {
                      const question = tempQuiz.find(
                        (question) => question.id === parseInt(questionId)
                      );
                      if (!question) {
                        throw new Error("Question not found");
                      }
                      const correctAnswerId = question.answers.find(
                        (answer:any) => answer.correct
                      )?.id;
                      if (!correctAnswerId) {
                        throw new Error("Correct answer not found");
                      }
                      if (answerId === correctAnswerId) {
                        correctNum += 1;
                      }
                      return answerId === correctAnswerId ? BASE_SCORE : 0;
                    })
                    .forEach((score) => {
                      tempScore += score;
                    });
                    setScore(
                      tempScore
                    );
                    postQuizResult(correctNum, 5 - correctNum);
                    setQuizAnswers({})
                  }} color="success">
                    Finish
                  </Button>
                )
              }
              </div>
              </>
            )
          }
        </Paper>
      </PageContainer>
    </>
  );
}
