import axios from 'axios'
import React, {useState} from 'react'

export const UILogin = () => {

    const URL = 'https://backend-edw.herokuapp.com/login'

    const[password, setPassword ] = useState()
    const[userName, setUserName ] = useState()

    const response = (e) => {
        e.preventDefault()
        axios.post(URL,{
            username: userName,
            password: password,
        })
        .then( response => response)
        .then( data => console.log(data) )
    }



  return (
    <div>
        <form action="">
            <h1>Login</h1>
            <input onChange={e=> setUserName(e.target.value)} type="text" name="usuario" id="" placeholder='Usuario' />
            <input onChange={e=> setPassword(e.target.value)} type="password" name="password" id="" placeholder='Contraseña' />
            <button onClick={response}>Inicio</button>
        </form>
    </div>
  )
}
