import React, {useState, useEffect} from 'react';
import './App.scss';
import SettingsButton from './components/SettingsButton/SettingsButton';
import SettingsSlidebar from './components/SettingsSlidebar/SettingsSlidebar';
import Timer from './components/Timer/Timer';
import useSound from 'use-sound';
import alert from './assets/music/alert.mp3';

function App() {
// usestates
const [isSettingsShown, setIsSettingsShown] = useState(false);
const [promodoTime, setPromodoTime] = useState(25);
const [shortBreakTime, setShortBreakTime] = useState(5);
const [longBreakTime, setLongBreakTime] = useState(20);
const [themeColor, setThemeColor] = useState('c1');
const [fontStyle, setFontStyle] = useState('f6')
const [secLeft, setSecLeft] = useState(promodoTime*60)
const [isCountingDown, setIsCountingDown] = useState(false)
const [focusQuestion, setFocusQuestion] = useState('Set a focus questuon in the settings before you start');
const [timerType, setTimerType] = useState('work');

const [timesUp] = useSound(alert, {volume: 1});

// functions

function toggleSettingsShown(){
  setIsSettingsShown(!isSettingsShown)
}

function toggleCountdown(){
  if (focusQuestion !== 'Set a focus questuon in the settings before you start'){
  setIsCountingDown(!isCountingDown)
  } else {
    toggleSettingsShown()
  }
}

// Changes the remaining seconds into 00:00 format. Its something you could see on a microwave.
const TimeDecor = (sec) => { 
  return(
    `${(Math.floor(sec / 60)) <= 9 ? '0' + Math.floor(sec / 60) : Math.floor(sec / 60)}
    :
    ${(sec % 60 > 9) ? sec % 60 : '0' + sec % 60}`
  )
}

function getMaxTime(){
  switch(timerType){
    case "work":
      return promodoTime*60;
    case "short":
      return shortBreakTime*60;
    case "long":
      return longBreakTime*60;
     default:
      return longBreakTime;
  }
}

function getPercentage(sec){
  return sec/getMaxTime()*100;
}

// useEffect
useEffect(() => {
  if(isCountingDown) {
    const interval = setInterval(() => {
      setSecLeft(secLeft => secLeft - 1)
    }, 1000)
  
    if(secLeft <= 0) {
      clearInterval(interval)
      setIsCountingDown(false)
      // setButtonText('')
      timesUp()
    }

    return () => clearInterval(interval)
  }
  
}, [isCountingDown, secLeft, timesUp]);

  return (
    <div className="App">
     <SettingsButton
     toggleSettings={toggleSettingsShown}
     vis={isSettingsShown}
     />
     <SettingsSlidebar 
     vis={isSettingsShown} 
     promodoTime={promodoTime}
     setPromodoTime={setPromodoTime}
     shortBreakTime={shortBreakTime}
     longBreakTime={longBreakTime}
     setLongBreakTime={setLongBreakTime}
     setShortBreakTime={setShortBreakTime}
     themeColor={themeColor}
     setThemeColor={setThemeColor}
     fontStyle={fontStyle}
     setFontStyle={setFontStyle}
     focusQuestion={focusQuestion}
     setFocusQuestion={setFocusQuestion}
     toggleSettingsShown={toggleSettingsShown}
     setSecLeft={setSecLeft}
     getMaxTime={getMaxTime}
     />
     <Timer
     percentage = {getPercentage(secLeft)}
     displayTime = {TimeDecor(secLeft)}
     start={toggleCountdown}
     active={isCountingDown}
     timerType={timerType}
     promodoTime={promodoTime}
     shortBreakTime={shortBreakTime}
     longBreakTime={longBreakTime}
     focusQuestion={focusQuestion}
     setIsCountingDown={setIsCountingDown}
     setSecLeft={setSecLeft}
     setTimerType={setTimerType}
     />
    </div>
  );
}

export default App;
