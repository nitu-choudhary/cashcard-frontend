import React from 'react';
import logo from './logo.svg';
import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CashCardList from './components/CashCardList/CashCardList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/cashcards" element={<CashCardList />} />
      </Routes>
    </Router>
  );
}

export default App;
