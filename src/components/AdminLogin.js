import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import axios from 'axios'
import Header from './Header'
import Footer from './Footer'
import { Link } from 'react-router-dom';

export default function AdminForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const formData = {
        email : email,
        password : password
    }
    const formSubmit = async(req,res) => {
       
        const response1 = await axios.post('/api/v1/adminlogin',formData)
        // if(response1!=null){
        //     <Link to = '/home'/>
        // }
        if(response1!=null){
            <Link to = '/home'/>
        }
        else if(response1 == null){
            <Link to = '/home'/>
        }
    }
    return (
        <>
            <body>
                <Header/>
    <div class="login-page">
      <div class="form" >
        <div class="login">
          <div class="login-header">
            <h3>ADMIN LOGIN</h3>
            <p>Please enter your credentials to login.</p>
          </div>
        </div>
        <form class="login-form" onSubmit={formSubmit}>
          <input type="text" placeholder="email" onChange={(e) => setEmail(e.target.value)}/>
          <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)}/>
          <input type="submit" className='subbtn' value="submit"/>
          <p class="message">Not registered? <Link to="/adminlogin">Create an account</Link></p>
        </form>
      </div>
    </div>
    <Footer/>
</body>
        </>
    )
}
