import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Login from "./app/Login";
import Blog from "./component/blog/Blog";
import SignUp from "./app/SignUp";
import Profile from "./component/Profile/Profile";
import { AuthProvider } from "./store/AuthContext";
import { QuizProvider } from "./store/QuizContext";
import { QuizScreen } from "./app/Quiz";

function App() {
  return (
    <AuthProvider>
      <QuizProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<SignUp />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/quiz" element={<QuizScreen />} />
            <Route path="*">"404 Not Found"</Route>
          </Routes>
        </BrowserRouter>
      </QuizProvider>
    </AuthProvider>
  );
}

export default App;
