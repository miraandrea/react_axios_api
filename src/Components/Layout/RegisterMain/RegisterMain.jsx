import React from 'react'
import { NavLink } from 'react-router-dom'
import { Btn } from '../../UI/Btn/Btn'
import { UIRegister } from '../../UI/UIRegister/UIRegister'

export const RegisterMain = () => {
  return (



    <div>
        <UIRegister />
        <NavLink to='/'><Btn classNamebtn="btn1" texto="Guardar"/></NavLink>
        <NavLink to='/'><Btn classNamebtn="btn1" texto="Cancelar"/></NavLink>
    </div>
  )
}
