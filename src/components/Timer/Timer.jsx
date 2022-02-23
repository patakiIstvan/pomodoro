import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Timer({
  start,
  active,
  displayTime,
  percentage,
  timerType,
  promodoTime,
  shortBreakTime,
  longBreakTime,
  focusQuestion,
  setIsCountingDown,
  setSecLeft,
  setTimerType
}) {

  return (
    <div className="Timer">
      <div className="timer__container">
        <CircularProgressbar
          value={percentage}
          text={displayTime}
          strokeWidth="5"
          counterClockwise="true"
          styles={buildStyles({
            pathColor: '#d6d6d6',
            textColor: '#d6d6d6',
            trailColor: '#ccccccBB',
          })}
        />
      </div>
      <span className="focus-question">{focusQuestion}</span>

      <span onClick={start} className="control-button">
        <i className={`button__icon fa ${active ? 'fa-pause' : 'fa-play'}`}></i>
        {active ? 'Stop' : 'Start'}
      </span>

      <div className="mode__container">
        {/* work */}
        <div className={`mode__item ${timerType === "work" && 'chosen-timemode-scale'}`}
          onClick={() => {
            setIsCountingDown(false);
            setSecLeft(promodoTime * 60)
            setTimerType('work')
          }}>
          <span className="mode__length">{`${promodoTime} min`}</span>
          <i className="mode__icon uil uil-laptop"></i>
          <span className="mode__name">Work</span>
        </div>
        {/* short break */}
        <div className={`mode__item ${timerType === "short" && 'chosen-timemode-scale'}`}
          onClick={() => {
            setIsCountingDown(false);
            setSecLeft(shortBreakTime * 60)
            setTimerType('short')
          }}>
          <span className="mode__length">{`${shortBreakTime} min`}</span>
          <i className="mode__icon uil uil-coffee"></i>
          <span className="mode__name">Short break</span>
        </div>
        {/* long break */}
        <div className={`mode__item ${timerType === "long" && 'chosen-timemode-scale'}`}
          onClick={() => {
            setIsCountingDown(false);
            setSecLeft(longBreakTime * 60)
            setTimerType('long')
          }}>
          <span className="mode__length">{`${longBreakTime} min`}</span>
          <i class="mode__icon uil uil-bed"></i>
          <span className="mode__name">Long rest</span>
        </div>
      </div>
    </div >
  )
}

export default Timer