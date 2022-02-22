import React from 'react'

function SettingsButton({ toggleSettings, vis }) {
  return (
    <i onClick={toggleSettings}
      className={`uil uil-bars settings-button ${vis && 'settings-shown'}`}></i>
  )
}

export default SettingsButton