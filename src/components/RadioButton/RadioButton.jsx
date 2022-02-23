import React from 'react'

function RadioButton({ selector, type, style, bgColor, textFont }) {

  return (
    <div className='RadioButton'>
      <input type="radio" id={selector} name={type} value={selector} defaultChecked={style === selector} />
      <label htmlFor={selector}
        style={{ backgroundColor: bgColor, fontFamily: textFont }}>
        {type === 'font' && 'Aa'}
      </label>
    </div>
  )
}

export default RadioButton