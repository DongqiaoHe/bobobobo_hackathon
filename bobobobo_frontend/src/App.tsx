import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Login from './component/login';
import Blog from './component/blog/Blog';

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
                  path="/login"
                  element={(
                      <Login />
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
