import React, { useState } from 'react';
import './quiz.css';  // Import the CSS file for styling
import { useParams } from 'react-router-dom';
const Quiz = () => {
  const { levelId } = useParams();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showScore, setShowScore] = useState(false);

  const questions = [
    {
      question: 'What is the capital of France?',
      type: 'radio',
      options: ['Paris', 'Berlin', 'London', 'Rome'],
      answer: 'Paris',
    },
    {
      question: 'Which planets are considered gas giants? (Select all that apply)',
      type: 'checkbox',
      options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
      answer: ['Jupiter', 'Saturn'],
    },
    {
      question: 'Who is the CEO of Tesla?',
      type: 'input',
      answer: 'Elon Musk',
    },
    {
      question: 'Share your feedback about this quiz:',
      type: 'textarea',
      answer: '',
    },
  ];

  const handleAnswerSelection = (questionIndex, selectedAnswer) => {
    const updatedAnswers = [...answers];
    updatedAnswers[questionIndex] = selectedAnswer;
    setAnswers(updatedAnswers);
  };

  const handleNextQuestion = () => {
    const currentQuestionData = questions[currentQuestion];
    const currentAnswer = answers[currentQuestion];

    if (
      currentQuestionData.type === 'checkbox' &&
      JSON.stringify(currentAnswer) === JSON.stringify(currentQuestionData.answer)
    ) {
      setScore(score + 1);
    } else if (currentAnswer === currentQuestionData.answer) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowScore(true);
    }
  };

  return (
    <>
    <h2 className="text-center text-2xl sm:text-5xl py-10 font-medium bg-black text-white">Quiz for Level {levelId}</h2>
    <div className="quiz-container">
      {showScore ? (
        <div className="quiz-complete">
          <h2>Quiz Complete!</h2>
          <h3>Your Score: {score} / {questions.length}</h3>
        </div>
      ) : (
        <div className="quiz-box">
          <h2>Question {currentQuestion + 1}</h2>
          <h3>{questions[currentQuestion].question}</h3>

          {questions[currentQuestion].type === 'radio' && (
            <ul>
              {questions[currentQuestion].options.map((option, index) => (
                <li key={index}>
                  <input
                    type="radio"
                    name={`question${currentQuestion}`}
                    value={option}
                    onChange={() => handleAnswerSelection(currentQuestion, option)}
                  />
                  {option}
                </li>
              ))}
            </ul>
          )}

          {questions[currentQuestion].type === 'checkbox' && (
            <ul>
              {questions[currentQuestion].options.map((option, index) => (
                <li key={index}>
                  <input
                    type="checkbox"
                    name={`question${currentQuestion}`}
                    value={option}
                    onChange={() => {
                      const newAnswer = answers[currentQuestion] || [];
                      if (newAnswer.includes(option)) {
                        handleAnswerSelection(
                          currentQuestion,
                          newAnswer.filter((item) => item !== option)
                        );
                      } else {
                        handleAnswerSelection(currentQuestion, [...newAnswer, option]);
                      }
                    }}
                  />
                  {option}
                </li>
              ))}
            </ul>
          )}

          {questions[currentQuestion].type === 'input' && (
            <input
              type="text"
              onChange={(e) => handleAnswerSelection(currentQuestion, e.target.value)}
            />
          )}

          {questions[currentQuestion].type === 'textarea' && (
            <textarea
              rows="4"
              cols="50"
              onChange={(e) => handleAnswerSelection(currentQuestion, e.target.value)}
            />
          )}

          <button onClick={handleNextQuestion}>Next Question</button>
        </div>
      )}
    </div>
    </>
  );
};

export default Quiz;
