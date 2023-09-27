import Paper from "@mui/material/Paper";
import Header from "../component/Header";
import { PageContainer } from "../component/PageContainer";
import { useTheme } from "@mui/material";



export function RankingPage() {
  const theme = useTheme()
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

            
        </Paper>
      </PageContainer>
    </>
  )
}