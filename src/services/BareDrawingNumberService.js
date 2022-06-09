import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const apiAddress = '/api/baredrawingnumberdata'
// post bare drawing number data

export const postBareDrawingNumberData = createAsyncThunk('baredrawingNumber/post',
    async (data) => {
    await axios.post(`${apiAddress}`,{data})
}
)

// get all bare drawing number data

export const getAllBareDrawingNumberData = createAsyncThunk('baredrawingnumber/getAll', async () => {
    const {data} = await axios.get(`${apiAddress}`)
    return data
})

// get Single bare drawing number data

export const GetSingleBareDrawingNumberData = createAsyncThunk('baredrawingnumber/getsingle', async (id) => {
    const { data } = await axios.get(`${apiAddress}/${id}`)
    return data
})

// update bare drawing Number data

export const UpdateBareDrawingNumberData = createAsyncThunk('baredrawingnumber/update', async (data) => {
    await axios.put(`${apiAddress}`,{data})
    
})

// delete bare drawing number data

export const DeleteBareDrawingNumberData = createAsyncThunk('baredrawing/delete', async (id) => {
    await axios.put(`${apiAddress}delete`,{id})
})

const initialState = {
    data: [],
    loading: true,
    error: [],
    success: false,
    singleData:[]
}

const BareDrawingNumberSlice = createSlice({
    name: "BareDrawingNumberSlice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllBareDrawingNumberData.pending, (state, action) => {
            state.loading = true;
            
        })
            .addCase(getAllBareDrawingNumberData.fulfilled, (state, action) => {
                state.loading = false;
                state.data.push(action.payload)
            })
            .addCase(getAllBareDrawingNumberData.rejected, (state, action) => {
                state.loading = false,
                state.error = action.payload
            }).addCase(GetSingleBareDrawingNumberData.pending, (state, action) => {
            state.loading = true
            })
            .addCase(GetSingleBareDrawingNumberData.fulfilled, (state, action) => {
                state.loading = false
                state.singleData = action.payload
            })
            .addCase(GetSingleBareDrawingNumberData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload
        })
    }

})

export const BareDrawingNumberSliceReducer = BareDrawingNumberSlice.reducer

export const BareDrawingNumberSliceAction = BareDrawingNumberSlice.actions
