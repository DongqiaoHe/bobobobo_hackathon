import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Login from './component/login/Login';
import Blog from './component/blog/Blog';
import SignUp from './component/signup/SignUp';

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route
                  path="/"
                  element={(
                      <Login />
                  )}
              />
              <Route
                  path="/register"
                  element={(
                      <SignUp />
                  )}
              />
              <Route
                  path="/blog"
                  element={(
                      <Blog />
                  )}
              />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
