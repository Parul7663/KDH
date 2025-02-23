import React, { useEffect, useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import {login,clearErrors} from '../actions/userActions'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function UserForm({history}) {
  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const formData = {
        email : email,
        password : password
    }

    const { isAuthenticated, error } = useSelector(state => state.auth);
  useEffect(() => {

    if(isAuthenticated){
      history.push('/')
    }
    if(error){
      dispatch(clearErrors())
    }
    // dispatch(login());
  }, [dispatch,isAuthenticated,error,history])

    // const formSubmit = async(req,res) => {
    //   // const response1 = await axios.post('/api/v1/login',formData)
    //   // const response1 =axios.post('/api/v1/login',formData)
    //   dispatch(login(email,password))
    //   // localStorage.setItem('authenticationError', JSON.stringify(response1));
    // }

    const forgot =()=>{
      axios.post('api/v1/password/forgot',formData)
      alert("Reset Password Mail Successfully Generated")
      navigate('/')
    }
    
    const formSubmit = (e)=> {
     e.preventDefault();
      dispatch(login(email,password))
      // localStorage.setItem('authenticationError');
      let data = JSON.parse(localStorage.getItem('user'))
      // console.log('dataatatata'+JSON.stringify(data));
      // if(data == null){
      //   alert("please enter the details ")
      // }
      if(data.email === email && data.password === password){
      // if( data.password === password){
        alert("logged in successfully");
        navigate('/')
      }
      else {
        alert("Invalid Password")
        localStorage.removeItem('user');
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
            <h3>LOGIN</h3>
            <p>Please enter your credentials to login.</p>
          </div>
        </div>
        <form class="login-form" onSubmit={formSubmit}>
          <input type="text" placeholder="email" onChange={(e) => setEmail(e.target.value)}/>
          <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)}/>
          <input type="submit" className='subbtn' value="submit" onSubmit={formSubmit}/>
          <p class="message">Not registered? <Link to="/register">Create an account</Link></p>
          {/* <p class="message"><Link to="password/forgot">Forgot Password?</Link></p> */}
          <input type="button" className='subbtn' value="Forgot?" onClick={forgot}/>

        </form>
      </div>
    </div>
    <Footer/>
</body>
        </>
    )
}
