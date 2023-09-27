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
  const theme = useTheme();
  return (
    <div style={{
      maxWidth: 600,
      display: "flex",
      flexDirection: "column",
      gap: 16,
    }}>
      <h1>{question.question}</h1>
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
                    ? `5px solid ${theme.palette.success.light}`
                    : `3px solid ${theme.palette.grey["600"]}`,
              }}
            >
              <CardActionArea
                onClick={() => {
                  setCurrentAnswer(answer.id);
                  onAnswer(answer.id);
                }}
              >
                <CardContent
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    sx={{ marginBottom: 0, marginLeft: "5px" }}
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