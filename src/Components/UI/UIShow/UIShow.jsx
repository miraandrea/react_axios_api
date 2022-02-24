import axios from 'axios'
import React, { useState, useEffect } from 'react'

export const UIShow = () => {

    const URL = 'https://backend-edw.herokuapp.com/usuarios'

    const[name, setName ] = useState([])
    const[password, setPassword ] = useState(null)
    const[userName, setUserName ] = useState(null)

   
    useEffect(() =>{
      axios.get(URL)
      .then( response => response)
      .then((data) => {
        setName(data.name),
        setPassword(data.password),
        setUserName(data.username)
        console.log(data.name);
      })
    }, [])

  return (
    <div>
        <h1>{name}</h1>
        <p>{userName}</p>
        <p>{password}</p>
    </div>
  )
}
