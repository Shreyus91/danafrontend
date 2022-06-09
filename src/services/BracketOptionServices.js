import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// post bracket option data

export const PostBracketOptionData = createAsyncThunk('/bracketoption/post', async (data) => {
    await axios.post('/api/bracketoptiondata',{data})
})


// get bracket option data

export const GetBracketOptionData = createAsyncThunk('bracketoption/get', async () => {
    const {data} = await axios.get('/api/bracketoptiondata')

    return data

})


// get single bracket option data

export const GetSingleBracketOptionData = createAsyncThunk('bracketoption/getSingle', async (id) => {
    const { data } = await axios.get(`/api/bracketoptiondata/${id}`)
    return data
})

// update bracket data option data

export const UpdateBracketOptionData = createAsyncThunk('bracketoption/update', async (data) => {
    await axios.put('/api/bracketoptiondata',{data})
})


// delete bracket option data

export const DeleteBracketOptionData = createAsyncThunk('bracketoption/delete', async (id) => {
    await axios.put('/api/bracketoptiondatadelete',{id})
})

// initialState

const initialState = {
    data: [],
    loading: true,
    error: [],
    success: false,
    singleData:[]
}

const BracketOptionSlice = createSlice({
    name: "BracketOptionSlice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(GetBracketOptionData.pending, (state, action) => {
            state.loading = true;
            
        })
            .addCase(GetBracketOptionData.fulfilled, (state, action) => {
                state.loading = false;
                state.data.push(action.payload)
            })
            .addCase(GetBracketOptionData.rejected, (state, action) => {
                state.loading = false,
                state.error = action.payload
            }).addCase(GetSingleBracketOptionData.pending, (state, action) => {
            state.loading = true
            })
            .addCase(GetSingleBracketOptionData.fulfilled, (state, action) => {
                state.loading = false
                state.singleData = action.payload
            })
            .addCase(GetSingleBracketOptionData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload
        })
    }

})

export const BracketOptionSliceReducer = BracketOptionSlice.reducer

export const BracketOptionSliceAction = BracketOptionSlice.actions
