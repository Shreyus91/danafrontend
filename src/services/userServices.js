import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import jwt from 'jsonwebtoken'
import { Navigate } from "react-router-dom";
import React from 'react'

// post login request

export const PostLoginRequest = createAsyncThunk( 'Login/post',async (username,password) => {
    const { data } = await axios.post('api/login', { username, password })
 
      
    return data
   
})

// initialState

const initialState = {
    loading: true,
    token: [],
    success: false,
    user:[]
    
}

const LoginSLice = createSlice({
    name: 'LoginSLice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(PostLoginRequest.pending, (state, action) => {
            state.loading = true
                
        })
            .addCase(PostLoginRequest.fulfilled, (state, action) => {
                localStorage.setItem('token', action.payload.token);
                state.user = jwt.decode(action.payload.token);
                state.token = action.payload;
                state.loading = false;
                state.success = true;
                
            })
        
            .addCase(PostLoginRequest.rejected, (state, action) => {
                state.loading = false
                state.success = false
        })

    }
})

export const LoginSliceReducer = LoginSLice.reducer

export const LoginSliceAction = LoginSLice.actions

