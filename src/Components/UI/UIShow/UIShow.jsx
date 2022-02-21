import axios from 'axios'
import React, { useState } from 'react'

export const UIShow = () => {

    const URL = 'https://backend-edw.herokuapp.com/usuarios'

    const[name, setName ] = useState()
    const[password, setPassword ] = useState()
    const[userName, setUserName ] = useState()

   
    axios.get(URL)
    .then( response => response)
    .then( data => console.log(data) )

  return (
    <div>
        <p></p>
    </div>
  )
}
