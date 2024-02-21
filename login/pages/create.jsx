import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
function create() {

  const handleRegister = (e) =>{
    e.preventDefault()
    axios.post('http://localhost:5000/newUser' , {email , password})
        .then(result => console.log(result))
        .catch(err => console.log(err))
  }

  const[email, setEmail] = useState('')
  const[password , setPassword] = useState('')

  return (
    <div className="formUI">
      <div className="page">
        <form action="" className='Form' onSubmit={handleRegister}>
          <h1 style={{fontFamily:'sans-serif'}}>New Here ? Sign up </h1>
          <div className="inputWrapper">
            <div className="inputFields">
              <label htmlFor="email"><strong className='lableText'>Email</strong></label>
              <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)} placeholder='Enter your Email' />
            </div>
            <div className="label">
              <label htmlFor="password"><strong className='lableText'>Password</strong></label>
              <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)} placeholder='Enter your password' />
            </div>
          </div>
          <button className='btn'>Register</button>
          <Link to="/" className="btn">Sign in</Link>
        </form>
      </div>
    </div>
  )
}

export default create