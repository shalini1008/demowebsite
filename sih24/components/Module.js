import React from 'react';
import ProgressBar from './ProgressBar';
import './Module.css';

const Module = ({ name, progress }) => {
  return (
    <div className="module">
      <div className={`module-icon ${progress === 100 ? 'completed' : ''}`}>
        {name.charAt(0)}
      </div>
      <h3>{name}</h3>
      <ProgressBar progress={progress} />
    </div>
  );
};

export default Module;
