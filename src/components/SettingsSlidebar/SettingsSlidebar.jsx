import React from 'react'
import RadioButton from '../RadioButton/RadioButton'


function SettingsSlidebar({
  vis,
  promodoTime,
  setPromodoTime,
  breakTime,
  setBreakTime,
  themeColor,
  setThemeColor,
  fontStyle,
  setFontStyle
}) {
  console.log(fontStyle)
  const fonts = {
    f1: `'Gloria Hallelujah', cursive`,
    f2: `'Inconsolata', monospace`,
    f3: `'Kaushan Script', cursive`,
    f4: `'Pacifico', cursive`,
    f5: `'Quattrocento Sans', sans-serif`,
    f6: `'Special Elite', cursive`
  }

  const colors = {
    c1: '#F23E30',
    c2: '#4B8689',
    c3: '#4F52AF'
  }

  const saveSettings = e => {
    e.preventDefault();
    setPromodoTime(e.target.promodo.value)
    setBreakTime(e.target.promodoBreak.value)
    setThemeColor(e.target.color.value)
    setFontStyle(e.target.font.value)
    document.documentElement.style.setProperty("--themeColor", colors[e.target.color.value]);
    document.documentElement.style.setProperty("--fontStyle", fonts[e.target.font.value]);
  }

  const radiobuttons4fonts = []
  for (let i = 1; i <= 6; i++) {
    radiobuttons4fonts.push(
      <RadioButton
        key={'f' + i}
        selector={'f' + i}
        type="font"
        stlye={fontStyle}
        bgColor={'white'}
        textFont={fonts['f' + i]} />
    );
  }
  const radiobuttons4colors = []
  for (let i = 1; i <= 3; i++) {
    radiobuttons4colors.push(
      <RadioButton
        key={'c' + i}
        selector={'c' + i}
        type="color"
        stlye={themeColor}
        bgColor={colors['c' + i]}
        textFont='sans-serif' />
    )
  }

  return (
    <div className={`settings-slidebar ${vis && 'settings-shown'}`} >
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
        <h3>Colors</h3>
        <div className="settings__radio">
          {radiobuttons4colors}
        </div>
        <h3>Font styles</h3>
        <div className="settings__radio">
          {radiobuttons4fonts}
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default SettingsSlidebar