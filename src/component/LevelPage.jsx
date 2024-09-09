import React from 'react';
import './LevelPage.css';

const LevelPage = ({ levels, onLevelClick }) => {
  return (
    <div className="level-container">
      <div className="level-path">
        {levels.map((level) => (
          <div
            key={level.id}
            className="level-wrapper"
            style={{ left: `${level.x}%`, top: `${level.y}%` }}
            onClick={() => onLevelClick(level.id)} // Trigger the function when clicked
          >
            <div className={`level-circle ${level.completed ? 'completed' : ''}`}>
              <span className="star">★</span>
            </div>
            <div className="level-number">Level {level.id}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LevelPage;
