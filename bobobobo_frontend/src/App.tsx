import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import './App.css'
import Login from './app/Login'
import Blog from './component/blog/Blog'
import SignUp from './app/SignUp'
import Profile from './app/Profile'
import { AuthProvider } from './store/AuthContext'
import { QuizProvider } from './store/QuizContext'
import { QuizScreen } from './app/Quiz'
import { ThemeProvider } from '@emotion/react'
import { CssBaseline, createTheme } from '@mui/material'
import LandingPage from './app/Landing'
import Store from './component/Store/Store'
import CarbonCalculator from './component/carbonCalculator/CarbonCalculator'

function App() {
  const theme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#2e7d32',
      },
      secondary: {
        main: '#f50057',
      },
    },
  })
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
              <Route path="/store" element={<Store />} />
              <Route path="/carbon" element={<CarbonCalculator />} />
              <Route path="*">"404 Not Found"</Route>
            </Routes>
          </BrowserRouter>
        </QuizProvider>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App
