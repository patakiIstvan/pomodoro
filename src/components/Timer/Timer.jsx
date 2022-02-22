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
            pathColor: '#d6d6d6',
            textColor: '#f88',
            trailColor: '#ccccccBB',
          })}
        />
      </div>
      <span className="focus-question">Focus question</span>
      <span className="control-button"><i className="button__icon fa fa-play"></i>Start</span>
      <div className="mode__container">
        {/* work */}
        <div className="mode__item">
          <span className="mode__length">0 min</span>
          <i className="mode__icon uil uil-laptop"></i>
          <span className="mode__name">Work</span>
        </div>
        {/* short break */}
        <div className="mode__item">
          <span className="mode__length">0 min</span>
          <i className="mode__icon uil uil-coffee"></i>
          <span className="mode__name">Short break</span>
        </div>
        {/* long break */}
        <div className="mode__item">
          <span className="mode__length">0 min</span>
          <i class="mode__icon uil uil-bed"></i>
          <span className="mode__name">Long rest</span>
        </div>
      </div>
    </div>
  )
}

export default Timer