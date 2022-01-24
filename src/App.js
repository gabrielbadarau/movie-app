import React from 'react';
import { Routes, Route} from "react-router-dom";
import HomePage from './pages/Home/HomePage'
import ErrorPage from './pages/Page404/ErrorPage'
import LoginPage from './pages/Login/LoginPage'
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/login" element={<LoginPage/>} />
      </Routes>
    </div>
  );
}

export default App;
