import React from 'react'
import RadioButton from '../RadioButton/RadioButton'


function SettingsSlidebar({
  vis,
  promodoTime,
  setPromodoTime,
  shortBreakTime,
  setShortBreakTime,
  longBreakTime,
  setLongBreakTime,
  themeColor,
  setThemeColor,
  fontStyle,
  setFontStyle,
  focusQuestion,
  setFocusQuestion,
  toggleSettingsShown
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
    setShortBreakTime(e.target.promodoShortBreak.value)
    setThemeColor(e.target.color.value)
    setFontStyle(e.target.font.value)
    setFocusQuestion(e.target.focusquestion.value)
    document.documentElement.style.setProperty("--themeColor", colors[e.target.color.value]);
    document.documentElement.style.setProperty("--fontStyle", fonts[e.target.font.value]);
    toggleSettingsShown()
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
        <label className="qtitle" for="focusquestion">Focus question</label>
        <textarea id="focusquestion" name="focusquestion" rows="8">
          {focusQuestion}
        </textarea>
        <h3>Length of periods (min)</h3>
        <div className="settings__times">
          <div className="settings__item">
            <label htmlFor='promodo'><i className="mode__icon uil uil-laptop"></i></label>
            <div className="input__container">
              <button onClick={(e) => { e.preventDefault(); if (promodoTime > 10) { setPromodoTime(promodoTime - 1) } }} className="btn">-</button>
              <input type="number" min="10" max="150" value={promodoTime} defaultValue={promodoTime} name="promodo" id="promodo" />
              <button onClick={(e) => { e.preventDefault(); if (promodoTime < 150) { setPromodoTime(promodoTime + 1) } }} className="btn">+</button>
            </div>

          </div>
          <div className="settings__item">
            <label htmlFor='promodo-short-break'><i className="mode__icon uil uil-coffee"></i></label>
            <div className="input__container">
              <button onClick={(e) => { e.preventDefault(); if (shortBreakTime > 3) { setShortBreakTime(shortBreakTime - 1) } }} className="btn">-</button>
              <input type="number" min="3" max="15" value={shortBreakTime} defaultValue={shortBreakTime} name="promodoShortBreak" id="promodo-short-break" />
              <button onClick={(e) => { e.preventDefault(); if (shortBreakTime < 15) { setShortBreakTime(shortBreakTime + 1) } }} className="btn">+</button>
            </div>

          </div>
          <div className="settings__item">
            <label htmlFor='promodo-long-break'> <i className="mode__icon uil uil-bed"></i></label>
            <div className="input__container">
              <button onClick={(e) => { e.preventDefault(); if (longBreakTime > 15) { setLongBreakTime(longBreakTime - 1) } }} className="btn">-</button>
              <input type="number" min="15" max="60" value={longBreakTime} defaultValue={longBreakTime} name="promodoLongBreak" id="promodo-long-break" />
              <button onClick={(e) => { e.preventDefault(); if (longBreakTime < 60) { setLongBreakTime(longBreakTime + 1) } }} className="btn">+</button>
            </div>
          </div>

        </div>

        <h3>Colors</h3>
        <div className="settings__radio">
          {radiobuttons4colors}
        </div>
        <h3>Font styles</h3>
        <div className="settings__radio">
          {radiobuttons4fonts}
        </div>
        <input type="submit" value="Apply settings" />
      </form>
    </div>
  )
}

export default SettingsSlidebar