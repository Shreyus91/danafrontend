import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import jwt from 'jsonwebtoken'
import { useSelector } from "react-redux";
import Login from "./components/User/Login";
const App = () => {
 const {success,loading} = useSelector(state=>state.userReducer)
 let navigate = useNavigate()
  const Logout = () => {
    localStorage.removeItem('token')
    navigate('/')
}
  

   
  if (localStorage.getItem('token')) {
    return (
      <div>
        <div>
          <Link to="/newbuildsheet">New BuildSheet</Link>
        </div>
        <div>
          <Link to="/buildsheettable">Build Sheet Table</Link>
        </div>
        <div>
          <Link to="/app">Detail Housing Table</Link>
        </div>
        <div>
          <Link to="/edittable">Edit Tables</Link>
        </div>
        <div>
          <Link to="/app">SetUp</Link>
        </div>
        <div style={{cursor:"pointer"}} onClick={()=>Logout()} >LogOut</div>
        
      </div>
    );
  }
  if (!localStorage.getItem('token')) {
    return <Login/>
  }
  
}  
 

   




export default App;
