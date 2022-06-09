import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const apiAddress = '/api/absdata'
// post bare drawing number data

export const postabs = createAsyncThunk('abs/post',
    async (data) => {
    await axios.post(`${apiAddress}`,{data})
}
)

// get all bare drawing number data

export const getAllabs = createAsyncThunk('abs/getAll', async () => {
    const {data} = await axios.get(`${apiAddress}`)
    return data
})

// get Single bare drawing number data

export const GetSingleabs = createAsyncThunk('abs/getsingle', async (id) => {
    const { data } = await axios.get(`${apiAddress}/${id}`)
    return data
})

// update bare drawing Number data

export const Updateabs = createAsyncThunk('abs/update', async (data) => {
    await axios.put(`${apiAddress}`,{data})
    
})

// delete bare drawing number data

export const Deleteabs = createAsyncThunk('abs/delete', async (id) => {
    await axios.put(`${apiAddress}delete`,{id})
})

const initialState = {
    data: [],
    loading: true,
    error: [],
    success: false,
    singleData:[]
}

const absSlice = createSlice({
    name: "absSlice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllabs.pending, (state, action) => {
            state.loading = true;
            
        })
            .addCase(getAllabs.fulfilled, (state, action) => {
                state.loading = false;
                state.data.push(action.payload)
            })
            .addCase(getAllabs.rejected, (state, action) => {
                state.loading = false,
                state.error = action.payload
            }).addCase(GetSingleabs.pending, (state, action) => {
            state.loading = true
            })
            .addCase(GetSingleabs.fulfilled, (state, action) => {
                state.loading = false
                state.singleData = action.payload
            })
            .addCase(GetSingleabs.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload
        })
    }

})

export const absSliceReducer = absSlice.reducer

export const absSliceAction = absSlice.actions
