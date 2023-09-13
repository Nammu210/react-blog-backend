import React, { useState, useEffect } from 'react'
import './loginButton.style.css'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import { LogoutApi, localhostLogout } from '../../constants/ApiList'



function LoginButton() {
  const Navi=useNavigate()
const [loginBut,setLoginBut]=useState(false)



const handleLogout=()=>{
  const API = LogoutApi

  axios.post(API)
  .then(res=>{
  
    Navi('/')
    setLoginBut(false)
    localStorage.clear()

   
  })
  .catch(err=>console.log(err))

}

useEffect(()=>{
  if( localStorage.getItem("token")){
    
    setLoginBut(true)
  }
 
},[loginBut])



const handleLogin=()=>{
    Navi('/login')
}


const handleSignup=()=>{
    Navi('/signup')
}



  return (
    <>
    <div className='btnContainer'>
      
  {(!loginBut) && <button className="LoginButn btnClr" onClick={handleLogin} ><span>Log In</span></button>   }   
{(!loginBut) && <button className="SignupButn btnClr" onClick={handleSignup} ><span>Sign Up</span></button>}



{(loginBut) &&<p className='userName'><FontAwesomeIcon icon={faUser} /><span>&nbsp; {localStorage.getItem("name")}</span></p>}
{(loginBut) && <button className="LogoutBtn" onClick={handleLogout} ><span>Log out</span></button>   }   


    </div>
    </>
  )
}

export default LoginButton