import React from 'react';
import LevelPage from './components/LevelPage';
import './App.css';
import  QuestionGenerator from './components/QuestionGenerator';
import QuestionForm from './components/QuestionForm';



const levels = [
  { x: 10, y: 20, completed: true },
  { x: 30, y: 50, completed: true },
  { x: 50, y: 70, completed: false },
  { x: 70, y: 50, completed: false},
  { x: 90, y: 20, completed: false }
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Generate Question</h1>
      </header>       
      <main>
        {/* <LevelPage levels={levels} /> */}
        <QuestionGenerator></QuestionGenerator>
       
      </main>
      
      <footer className="App-footer">
        <p>© 2024 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
