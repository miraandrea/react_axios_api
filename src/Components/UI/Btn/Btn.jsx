import React from 'react'

export const Btn = ({texto, BtnLogin, funcionClick}) => {
  return (
    <div>
        <button className={BtnLogin} onClick={funcionClick}>{texto}</button>
    </div>
  )
}
