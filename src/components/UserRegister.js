import React, { useState } from 'react'

import axios from 'axios'
import Header from './Header'
import Footer from './Footer'

//USERFORM HAMARA REGISTRATION HAI YE ADD USER KRTA H  ,YE NODE_API AT DEKSTOP WALE SERVER SE CONNECTED HAI
export default function UserForm() {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const formData = {
        name : name ,
        email : email,
        password : password
    }
    const formSubmit = async() => {
        // const response = await axios.post('api/v1/register',formData)
        const response = await axios.post('api/v1/register',formData)
    }
    return (
        <>
           <body>
  <body>
    <Header/>
    <div class="login-page">
      <div class="form">
        <div class="login">
          <div class="login-header">
            <h3>REGISTER</h3>
            <p>Please enter your credentials to Register.</p>
          </div>
        </div>
        <form class="login-form" onSubmit={formSubmit}>
          <input type="text" placeholder="name"  onChange={(e) => setName(e.target.value)}/>
          <input type="text" placeholder="email" onChange={(e) => setEmail(e.target.value)}/>
          <input type="password" placeholder="set password"  onChange={(e) => setPassword(e.target.value)}/>
          <input type="password" placeholder="confirm password"/>
          <input type="submit" className='subbtn' value="submit"/>
          <p class="message">Already registered? <a href="/login">Login Here</a></p>
        </form>
      </div>
    </div>
    <Footer/>
</body>
</body>
        </>
    )
}
