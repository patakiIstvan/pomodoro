import React, {useState, useEffect} from 'react';
import './App.scss';
import SettingsButton from './components/SettingsButton/SettingsButton';
import SettingsSlidebar from './components/SettingsSlidebar/SettingsSlidebar';
import Timer from './components/Timer/Timer';

function App() {
const [isSettingsShown, setIsSettingsShown] = useState(false);
const [promodoTime, setPromodoTime] = useState(25);
const [breakTime, setBreakTime] = useState(5);
const [themeColor, setThemeColor] = useState('c1');
const [fontStyle, setFontStyle] = useState('f1')
const [secLeft, setSecLeft] = useState(60*promodoTime)
const [countingDown, isCountingDown] = useState(false)

function toggleSettingsShown(){
  setIsSettingsShown(!isSettingsShown)
}

// Changes the remaining seconds into 00:00 format. Its something you could see on a microwave.
const TimeDecor = (sec) => { 
  return(
    `${(Math.floor(sec / 60)) > 9 ? '0' + Math.floor(sec / 60) : Math.floor(sec / 60)}
    :
    ${(sec % 60 > 9) ? sec % 60 : '0' + sec % 60}`
  )
}

useEffect(() => {
  TimeDecor(promodoTime)
},[])

  return (
    <div className="App">
     <SettingsButton
     toggleSettings={toggleSettingsShown}
     />
     <SettingsSlidebar 
     vis={isSettingsShown} 
     promodoTime={promodoTime}
     setPromodoTime={setPromodoTime}
     breakTime={breakTime}
     setBreakTime={setBreakTime}
     themeColor={themeColor}
     setThemeColor={setThemeColor}
     fonstStyle={fontStyle}
     setFontStyle={setFontStyle}
     />
     <Timer
     promodoTime={promodoTime}
     displayTime = {TimeDecor(secLeft)}
     />
    </div>
  );
}

export default App;
