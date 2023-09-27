import { Card, CardActionArea, CardContent, Paper, Typography, useTheme } from "@mui/material";
import { QuestionType } from "../../store/QuizContext";
import { useState } from "react";

export function Question({
  question,
  onAnswer
}: {
  question: QuestionType,
  onAnswer: (answer: number) => void,
}) {
  const [currentAnswer, setCurrentAnswer] = useState<number | null>(null);
  const [isError, setIsError] = useState<boolean>(true);
  const theme = useTheme();
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      width: "100%",
      alignItems: "center",
      textAlign: "center",
      gap: 16,
    }}>
      <h1 style={{
        color: theme.palette.text.primary,
        marginBottom: 0
      }}>{question.question}</h1>
      <p style={{
        color: isError?theme.palette.error.main:theme.palette.text.secondary,
        fontSize: 22,
        fontWeight: 'bold'
      }}>
        Please select one
      </p>
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 8,
        marginBottom: 24
      }}>
        {question.answers.map((answer, index) => (
            <Card
              key={answer.id}
              variant={answer.id === currentAnswer  ? "elevation" : "outlined"}
              sx={{
                marginTop: "1rem",
                width: 500,
                display: "flex",
                flexDirection: "column",
                border:
                  answer.id === currentAnswer
                    ? `4px solid ${theme.palette.success.light}`
                    : `3px solid ${theme.palette.grey["600"]}`,
              }}
            >
              <CardActionArea
                onClick={() => {
                  setCurrentAnswer(answer.id);
                  onAnswer(answer.id);
                  setIsError(false)
                }}
              >
                <CardContent
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    style={{
                      color: answer.id === currentAnswer? theme.palette.success.main:undefined,
                      fontWeight: answer.id === currentAnswer? 'bold':'normal'
                    }}
                    gutterBottom
                    variant="h6"
                    component="div"
                    sx={{ marginBottom: 0, marginLeft: "5px", textAlign: 'start' }}
                  >
                    {answer.answer}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
        ))}
      </div>
    </div>
  )
}