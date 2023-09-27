import React, { useState } from "react";
import Box from "@mui/material/Box";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import Chart from "../component/Profile/Chart";
import BarChart from "../component/Profile/BarChart";
import Orders from "../component/Profile/Orders";
import Header from "../component/Header";
import { Button } from "@mui/material";
import { PageContainer } from "../component/PageContainer";



interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

export default function Profile() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      <Header
        title="Earth Protector"
        left={
          <Button href="/landing" variant="text">
            Dashboard
          </Button>
        }
        right={
          <Button href="/" variant="outlined">
            Log Out
          </Button>
        }
      />
      <PageContainer>
        <Grid container spacing={3}>
          {/* My Info */}
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
              <Orders />
            </Paper>
          </Grid>
          {/* Chart */}
          <Grid item xs={12} md={7} lg={9}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                height: 240,
              }}
            >
              <Chart />
            </Paper>
          </Grid>
          {/* Bar Chart */}
          <Grid item xs={12} md={5} lg={3}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                height: 240,
              }}
            >
              <BarChart />
            </Paper>
          </Grid>
        </Grid>
      </PageContainer>
    </>
  );
}
