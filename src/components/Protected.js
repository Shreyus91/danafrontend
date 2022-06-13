import React from "react";
import jwt from 'jsonwebtoken'
import Login from "./User/Login";

function Protected(props) {
  const { Component } = props;
    const user = jwt.decode(localStorage.getItem('token'), 'secretdanaqsolvekey')
    console.log(user)
        if (user) {
            return <Component />;
        }
        if (!user) {
            return <Login></Login>
        }
}

export default Protected;
