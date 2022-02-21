import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import { Btn } from '../../UI/Btn/Btn'
import { UILogin } from '../../UI/UILogin/UILogin'
import axios from 'axios'

export const LoginMain = () => {

    const [UsuarioName, setUsuarioName] = useState('')
    const [Password, setPassword] = useState('')

    const response = (e) =>{
        e.preventDefaul()
        axios.get('https://backend-edw.herokuapp.com/usuarios')
          .then(res => {
            const persons = res.data;
            this.setState({  });
          })
    }
    
        
    
  return (
    <div>
        <UILogin />
        <NavLink to='/inicio'><Btn classNamebtn="btn1" texto="Inicio"/></NavLink>
        <h3>¿No tienes cuenta?</h3>
        <NavLink to='/register'><Btn classNamebtn="btn1" texto="Registrarse "/></NavLink>
    </div>
  )
}
