import React from 'react'



function SettingsSlidebar({
  vis,
  promodoTime,
  setPromodoTime,
  breakTime,
  setBreakTime,
  timerColor,
  setTimerColor,
  fontStyle,
  setFontStyle
}) {

  const colors = {
    red: '#FF0000',
    blue: '#0000FF',
    purple: '#02FF00'
  }

  const saveSettings = e => {
    e.preventDefault();
    setPromodoTime(e.target.promodo.value)
    setBreakTime(e.target.promodoBreak.value)
    setTimerColor(e.target.color.value)
    setFontStyle(e.target.style.value)
    document.documentElement.style.setProperty("--timerColor", colors[e.target.color.value]);
  }

  return (
    <div className={`settings-slidebar ${vis ? 'settings-shown' : 'settings-not-shown'}`} >
      <h2>Settings</h2>
      <form onSubmit={saveSettings}>
        <div className="settings__item">
          <label htmlFor='promodo'>promodo</label>
          <input type="number" min="1" max="360" defaultValue={promodoTime} name="promodo" id="promodo" />
        </div>
        <div className="settings__item">
          <label htmlFor='promodo-break'>break</label>
          <input type="number" min="1" max="30" defaultValue={breakTime} name="promodoBreak" id="promodo-break" />
        </div>
        <div className="settings__item settings__color">
          <h3>Colors</h3>
          <input type="radio" id="color1" name="color" value="red" defaultChecked={timerColor === 'red'} />
          <label htmlFor="color1" className="clr1"></label>

          <input type="radio" id="color2" name="color" value="blue" defaultChecked={timerColor === 'blue'} />
          <label htmlFor="color2" className="clr2"></label>

          <input type="radio" id="color3" name="color" value="purple" defaultChecked={timerColor === 'purple'} />
          <label htmlFor="color3" className="clr3"></label>
        </div>
        <div className="settings__item settings__font">
          <h3>Font styles</h3>
          <input type="radio" id="font1" name="font" value="serif" defaultChecked={fontStyle === 'sans-serif'} />
          <label htmlFor="font1" className="font-preference__kumbh">Aa</label>
          <input type="radio" id="font2" name="font" value="serif" defaultChecked={fontStyle === 'monospace'} />
          <label htmlFor="font2" className="font-preference__roboto">Aa</label>
          <input type="radio" id="font3" name="font" value="serif" defaultChecked={fontStyle === 'serif'} />
          <label htmlFor="font3" className="font-preference__space">Aa</label>
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default SettingsSlidebar