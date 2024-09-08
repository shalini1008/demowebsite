import React, { useState } from "react";
import "../level.css"

const levels = [
  { id: 1, name: "Level 1", status: "unlocked" },
  { id: 2, name: "Level 2", status: "locked" },
  { id: 3, name: "Level 3", status: "locked" },
  { id: 4, name: "Level 4", status: "locked" },
  { id: 5, name: "Level 5", status: "locked" },
];

const Game = () => {
  const [currentLevel, setCurrentLevel] = useState(1);

  const handleLevelClick = (levelId) => {
    if (levelId <= currentLevel) {
      alert(`Starting ${levels[levelId - 1].name}`);
    }
  };

  return (
    <div className="level-map-container">
         <svg
        height="600px"
        width="300px"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
      >
        <path
          d="M 50,100 C 50,150 150,200 150,250 S 250,300 250,350"
          stroke="lightpink"
          strokeWidth="4"
          fill="none"
        />
      </svg>
      <div className="path">
        {levels.map((level) => (
          <div
            key={level.id}
            className={`level ${level.status} ${
              level.id <= currentLevel ? "active" : ""
            }`}
            onClick={() => handleLevelClick(level.id)}
          >
            <span className="animate-bounce hidden sm:block text-4xl">{level.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Game;
