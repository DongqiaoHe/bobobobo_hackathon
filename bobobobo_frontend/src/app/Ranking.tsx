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

            <div style={{
              height: 300,
              overflow: "hidden"
            }}>
              <img alt="podium" width="400" src="/podium.svg" />
            </div>
            <div style={{
              width:400,
              display: "flex",
              justifyContent: "space-around",
              color: theme.palette.grey["800"]
            }}>
              
            </div>
        </Paper>
      </PageContainer>
    </>
  )
}