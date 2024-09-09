import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import './Game.css';
import LevelPage from './LevelPage';
import Quiz from './Quiz';

const levels = [
  { id: 1, x: 10, y: 20, completed: true },
  { id: 2, x: 30, y: 50, completed: true },
  { id: 3, x: 50, y: 70, completed: false },
  { id: 4, x: 70, y: 50, completed: false },
  { id: 5, x: 90, y: 20, completed: false }
];

function Game() {
  const navigate = useNavigate(); // Hook from react-router-dom

  const handleLevelClick = (levelId) => {
    // Redirect to the Quiz page with the selected levelId
    navigate(`/quiz/${levelId}`);
  };

  return (
    <div className="App">
      <h1 className="animate-bounce hidden sm:block text-4xl">Let's Start the Game</h1>
      <main>
        <LevelPage levels={levels} onLevelClick={handleLevelClick} />
      </main>
    </div>
  );
}

export default Game;

