import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Timer() {

  const percentage = 66;

  return (
    <div className="Timer">
      <div className="timer__container">
        <CircularProgressbar
          value={percentage}
          text="21:00"
          strokeWidth="5"
        />
      </div>
      <h2>Vmi random cím</h2>
    </div>
  )
}

export default Timer