import React from 'react'



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
    setFontStyle(e.target.style.value)
    console.log(themeColor)
    document.documentElement.style.setProperty("--themeColor", colors[e.target.color.value]);
    document.documentElement.style.setProperty("--fontStyle", fonts[e.target.style.value]);
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
          <input type="radio" id="color1" name="color" value="c1" defaultChecked={themeColor === 'c1'} />
          <label htmlFor="color1" className="clr1"></label>

          <input type="radio" id="color2" name="color" value="c2" defaultChecked={themeColor === 'c2'} />
          <label htmlFor="color2" className="clr2"></label>

          <input type="radio" id="color3" name="color" value="c3" defaultChecked={themeColor === 'c3'} />
          <label htmlFor="color3" className="clr3"></label>
        </div>
        <div className="settings__item settings__font">
          <h3>Font styles</h3>
          <input type="radio" id="font1" name="font" value="f1" defaultChecked={fontStyle === 'f1'} />
          <label htmlFor="font1" className="fnt1">Aa</label>
          <input type="radio" id="font2" name="font" value="f2" defaultChecked={fontStyle === 'f2'} />
          <label htmlFor="font2" className="fnt2">Aa</label>
          <input type="radio" id="font3" name="font" value="f3" defaultChecked={fontStyle === 'f3'} />
          <label htmlFor="font3" className="fnt3">Aa</label>
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default SettingsSlidebar