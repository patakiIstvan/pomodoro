import React, {useState} from 'react';
import './App.scss';
import SettingsButton from './components/SettingsButton/SettingsButton';
import SettingsSlidebar from './components/SettingsSlidebar/SettingsSlidebar';
import Timer from './components/Timer/Timer';

function App() {
const [isSettingsShown, setIsSettingsShown] = useState(false);
const [promodoTime, setPromodoTime] = useState(25);
const [breakTime, setBreakTime] = useState(5);

function toggleSettingsShown(){
  setIsSettingsShown(!isSettingsShown)
  console.log("vis: "+String(isSettingsShown))
}

  return (
    <div className="App">
     <SettingsButton
     toggleSettings={toggleSettingsShown}
     />
     <SettingsSlidebar 
     vis={isSettingsShown} 
     promodoTime={promodoTime}
     breakTime={breakTime}
     />
     <Timer/>
    </div>
  );
}

export default App;
