import React from 'react';
import '../Instruction/Instruction.css';

function Instruction() {
  return (
    <div className="instructions">
      <h2>Type any city in search box and press Enter</h2>
      <p>Click on Home Tab to see Current Weather</p>
      <p>Click on Hourly Tab to see Hourly Weather</p>
      <p>Click on Daily Tab to see Daily Weather</p>
    </div>
  );
}

export default Instruction;
