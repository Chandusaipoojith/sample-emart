import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const Signup = () => {
    const navigate=useNavigate()
    const [data,setData]=useState({
        username:"",
        email:"",
        password:"",
        confirmPassword:""
    })
   
    const {username,email,password,confirmPassword}=data
    const changeHandler=e=>{
        setData({...data,[e.target.name]:e.target.value})
        }
        const submitHandler=e=>{
            e.preventDefault()
            if(!username || !password || !confirmPassword || !email){
                alert("Please fill all the fields")
                
            }

            else if(password!==confirmPassword){
                alert("passwords do not match")
                }
            else{
                axios.post("https://myproject-e86ed-default-rtdb.firebaseio.com/signupdata.json",data).then(alert("success"))
                navigate('/signin')
            }
        }
        
  return (
    <div className='signup-form'>
        <Navbar/>
        <center>
            <h1>Signup</h1>
            <form onSubmit={submitHandler}>
                <input type='text' placeholder='username' name='username' value={username} onChange={changeHandler}/>
                <br/>
                <input type='email' placeholder='email' name='email'value={email} onChange={changeHandler}/>
                <br/>
                <input type='password' placeholder='password' name='password' value={password} onChange={changeHandler}/>
                <br/>
                <input type="password" placeholder='confirmPassword' name='confirmPassword' value={confirmPassword} onChange={changeHandler}/>
                <br/>
                <button>Sign Up</button>

            </form>
        </center>
    </div>
  )
}

export default Signup