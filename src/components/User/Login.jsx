import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import {  PostLoginRequest } from '../../services/userServices'
const Login = () => {
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [user, setUser] = useState(true)
    let navigate = useNavigate();
    // login function
const dispatch = useDispatch()
    const LoginFunction = (e) => {
        e.preventDefault()
        dispatch(PostLoginRequest({ username, password }))
        navigate('/app')
    }
    if (!localStorage.getItem('token')) {
        return (
            <div>
                <form onSubmit={(e)=>LoginFunction(e)}>
                <h1>Qsolve {user?'User':"Admin"}  </h1>
                <div>username  </div>
                <br />
                <input type='text' value={username} onChange={(e)=>setUsername(e.target.value)}></input>
                <div>Password</div>
                <br />
                <input type='password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
                <br />
                <button type='submit' >Login</button>
                </form>
                
                <div onClick={()=>setUser(!user)}>{user?"Admin":"User"} Login</div>
          </div>
        )
    }
    if (localStorage.getItem('token')) {
        return <Navigate to='/app'/>
   }
}

export default Login