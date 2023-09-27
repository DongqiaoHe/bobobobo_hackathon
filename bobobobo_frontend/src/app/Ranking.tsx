import Paper from "@mui/material/Paper";
import Header from "../component/Header";
import { PageContainer } from "../component/PageContainer";

export function RankingPage() {
  return (
    <>
      <Header title="Quiz Ranking" />
      <PageContainer>
        <Paper sx={{
            p:2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}>
            <h1>Ranking</h1>
        </Paper>
      </PageContainer>
    </>
  )
}