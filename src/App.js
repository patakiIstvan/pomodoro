import React, {useState} from 'react';
import './App.scss';
import SettingsButton from './components/SettingsButton/SettingsButton';
import SettingsSlidebar from './components/SettingsSlidebar/SettingsSlidebar';
import Timer from './components/Timer/Timer';

function App() {
const [isSettingsShown, setIsSettingsShown] = useState(false);
const [promodoTime, setPromodoTime] = useState(25);
const [breakTime, setBreakTime] = useState(5);
const [timerColor, setTimerColor] = useState("red");
const [fontStyle, setFontStyle] = useState('serif')

function toggleSettingsShown(){
  setIsSettingsShown(!isSettingsShown)
}

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
     timerColor={timerColor}
     setTimerColor={setTimerColor}
     fonstStyle={fontStyle}
     setFontStyle={setFontStyle}
     />
     <Timer/>
    </div>
  );
}

export default App;
