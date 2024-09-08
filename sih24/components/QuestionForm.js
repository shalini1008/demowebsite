import React, { useState } from 'react';

const QuestionForm = ({ questionData, onSubmit }) => {
  const [selectedOption, setSelectedOption] = useState('');
  const [error, setError] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!selectedOption) {
      setError('Please select an answer.');
      return;
    }
    onSubmit(selectedOption);
    setError('');
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <p><strong>Generated Question:</strong> {questionData.question}</p>
        <fieldset>
          <legend>Options:</legend>
          {questionData.options.map((option, index) => (
            <div key={index}>
              <input
                type="radio"
                id={`option-${index}`}
                name="answer"
                value={index + 1}
                checked={selectedOption === `${index + 1}`}
                onChange={handleOptionChange}
              />
              <label htmlFor={`option-${index}`}>{index + 1}. {option}</label>
            </div>
          ))}
        </fieldset>
        <button type="submit">Submit Answer</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
    </form>
  );
};

export default QuestionForm;
