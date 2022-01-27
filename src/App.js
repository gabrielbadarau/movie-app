import React from 'react';
import { Routes, Route} from "react-router-dom";
import HomePage from './pages/Home/HomePage'
import ErrorPage from './pages/Page404/ErrorPage'
import LoginPage from './pages/Login/LoginPage'
import MovieDetails from './pages/MovieDetails/MovieDetails'
import SearchPage from './pages/SearchPage/SearchPage';
import './App.css';
import Layout from './components/Layout';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />}/>
          <Route path="search/:text" element={<SearchPage/>} >
            <Route path=":name" element={<MovieDetails/>} />
          </Route>
          <Route path="login" element={<LoginPage/>} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
