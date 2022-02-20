import React from 'react'

function SettingsButton({ toggleSettings }) {
  return (
    <div className="settingsButton" onClick={toggleSettings}>Menü</div>
  )
}

export default SettingsButton