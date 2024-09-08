import React, { useState } from 'react';

const QuestionGenerator = () => {
  const [keyword, setKeyword] = useState('');
  const [data, setData] = useState(null);
  const [difficulty, setDifficulty] = useState('');
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState([]);
  const [answer, setAnswer] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!keyword || !difficulty) {
      setError('Both keyword and difficulty level are required.');
      return;
    }

    const url = `http://localhost:5000/generate-question?keyword=${encodeURIComponent(keyword)}&difficulty=${encodeURIComponent(difficulty)}`;

    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setQuestion(data.question);
      setOptions(data.options);
      setAnswer(data.answer);
      setError('');
    } catch (err) {
      console.error(err);
      setError('Error fetching question.');
      setQuestion('');
      setOptions([]);
      setAnswer('');
    }
  };

  return (
    <div>
      <h1>Question Generator</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="keyword">Keyword:</label>
          <input
            type="text"
            id="keyword"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="difficulty">Difficulty Level:</label>
          <input
            type="text"
            id="difficulty"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            required
          />
        </div>
        <button type="submit">Generate Question</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {question && (
        <div>
          <p><strong>Generated Question:</strong> {question}</p>
          <ul>
            {options.map((option, index) => (
              <li key={index}>{index + 1}. {option}</li>
            ))}
          </ul>
          <p><strong>Correct Answer:</strong> {answer}</p>
        </div>
      )}
    </div>
  );
};

export default QuestionGenerator;
