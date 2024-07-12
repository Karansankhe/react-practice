import React from 'react'
import { useState } from 'react'

const UserInput = () => {
    const[input,setInput]=useState('')
  return (
    <div>

        <input type ="text" onChange={(e)=>setInput(e.target.value)} />
      <p>User input{input}</p>
    </div>
  )
}

export default UserInput