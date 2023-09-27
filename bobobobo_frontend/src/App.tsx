import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Login from "./app/Login";
import Blog from "./component/blog/Blog";
import SignUp from "./app/SignUp";
import Profile from "./app/Profile";
import { AuthProvider } from "./store/AuthContext";
import { QuizProvider } from "./store/QuizContext";
import { QuizScreen } from "./app/Quiz";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline, createTheme } from "@mui/material";
import LandingPage from "./app/Landing";

function App() {
  const theme = createTheme();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthProvider>
        <QuizProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/landing" element={<LandingPage />} />
              <Route path="/register" element={<SignUp />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/quiz" element={<QuizScreen />} />
              <Route path="*">"404 Not Found"</Route>
            </Routes>
          </BrowserRouter>
        </QuizProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
