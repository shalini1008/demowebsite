// import React from 'react';
// import './LevelPage.css';

// const LevelPage = ({ levels }) => {
//   return (
//     <div className="level-container">
//       <div className="level-path">
//         {levels.map((level, index) => (
//           <div
//             key={index}
//             className={`level-circle ${level.completed ? 'completed' : ''}`}
//             style={{
//               left: `${level.x}%`, // Position based on percentage or calculate dynamically
//               top: `${level.y}%`   // Position based on percentage or calculate dynamically
//             }}
//           >
//             {index + 1}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default LevelPage;

import React from 'react';
import './LevelPage.css';

const LevelPage = ({ levels }) => {
  return (
    <div className="level-container">
      <div className="level-path">
        {levels.map((level, index) => (
          <div
            key={index}
            className="level-wrapper"
            style={{
              left: `${level.x}%`, // Position based on percentage or calculate dynamically
              top: `${level.y}%`   // Position based on percentage or calculate dynamically
            }}
          >
            <div className={`level-circle ${level.completed ? 'completed' : ''}`}>
              <span className="star">★</span>
            </div>
            <div className="level-number">Level {index + 1}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LevelPage;
