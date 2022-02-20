import React from 'react'

function SettingsSlidebar({ vis, promodoTime, breakTime }) {
  return (
    <div className={`settingsSlidebar ${vis ? 'settings-shown' : 'settings-not-shown'}`} >
      <h2>Settings</h2>
      <form>
        <div className="settingsItem">
          <label htmlFor='promodo'>promodo</label>
          <input type="number" min="1" max="360" value={promodoTime} name="promodo" id="promodo" />
        </div>
        <div className="settingsItem">
          <label htmlFor='promodo-break'>break</label>
          <input type="number" min="1" max="30" value={breakTime} name="promodoBreak" id="promodo-break" />
        </div>
      </form>
    </div>
  )
}

export default SettingsSlidebar