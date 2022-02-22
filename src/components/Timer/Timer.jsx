import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
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
          styles={buildStyles({
            pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
            textColor: '#f88',
            trailColor: '#d6d6d6',
            backgroundColor: '#3e98c7'
          })}
        />
      </div>
      <span className="focus-question">Vmi random cím</span>
    </div>
  )
}

export default Timer