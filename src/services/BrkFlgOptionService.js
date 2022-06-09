import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


// get Brake Flange option data

export const GetBrkFlgOptionData = createAsyncThunk('/getflangeoption/data', async () => {
    const { data } = await axios.get('/api/brkflgoptiondata')
    return data
})

// post Brake flange option data

export const PostBrkFlangeOption = createAsyncThunk('brkflgoption/post', async (data) => {
     await axios.post('/api/brkflgoptiondata',{data})
    
})

// update brk flg option data

export const UpdateBrkFlgOption = createAsyncThunk('brkflgoption/update', async (data) => {
    await axios.put('/api/brkflgoptiondata',{data})
})

// get single data

export const SingleBrkFlgOption = createAsyncThunk('brkoption/single', async (id) => {
    const { data } = await axios.get(`/api/brkflgoptiondata/${id}`)
    return data
})

//  delete data

export const DeleteBrkFlgOption = createAsyncThunk('brkoption/delete', async (id) => {
    await axios.put('/api/brkflgoptiondatadelete',{id})
})

// initialState
const initialState = {
    data: [],
    loading: true,
    error: [],
    success: false,
    singleData:[]
}

const BrkFlgOptionSlice = createSlice({
    name: 'BrkFlgOptionSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(GetBrkFlgOptionData.pending, (state, action) => {
            state.loading = true;
            
        })
            .addCase(GetBrkFlgOptionData.fulfilled, (state, action) => {
                state.loading = false;
                state.data.push(action.payload)
            })
            .addCase(GetBrkFlgOptionData.rejected, (state, action) => {
                state.loading = false,
                state.error = action.payload
            }).addCase(SingleBrkFlgOption.pending, (state, action) => {
            state.loading = true
            })
            .addCase(SingleBrkFlgOption.fulfilled, (state, action) => {
                state.loading = false
                state.singleData = action.payload
            })
            .addCase(SingleBrkFlgOption.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload
        })
    }
})

export const BrkFlgOptionReducer = BrkFlgOptionSlice.reducer

export const BrkFlgOptionAction = BrkFlgOptionSlice.actions
