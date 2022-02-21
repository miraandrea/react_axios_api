import axios from 'axios'
import React, {useState} from 'react'


export const UIRegister = () => {

    const URL = 'https://backend-edw.herokuapp.com/usuario'

    const[name, setName ] = useState()
    const[password, setPassword ] = useState()
    const[userName, setUserName ] = useState()

    const response = (e) => {
        e.preventDefault()
        axios.post(URL,{
            username: userName,
            password: password,
            name: name
        })
        .then( response => response)
        .then( data => console.log(data) )
    }

  return (
    <div>
        <form action="">
            <input onChange={e=> setName(e.target.value)} type="text" name='' placeholder='Nombre Completo' />
            <input onChange={e=> setPassword(e.target.value)} type="text" name='' placeholder='Contraseña' />
            <input onChange={e=> setUserName(e.target.value)} type="text" name='' placeholder='User Name' />
            <button onClick={response}>Registrar</button>
        </form>
    </div>
  )
}
