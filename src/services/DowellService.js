import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'


// get Dowell data
export const GetDowellData = createAsyncThunk('dowelldata/get',
    async () => {
        const { data } = await axios.get('/api/dowelldata')
        console.log(data)
        return data
}
)

// post halfoption data

export const PostDowellData = createAsyncThunk('dowelldata/post',
    async (data) => {
    const res = await axios.post('/api/dowelldata',{data})
    })


    // handle update change

export const UpdateDowellData = createAsyncThunk('halfoption/update',
    async (data) => {
    await axios.put('/api/dowelldata',{data})
}
)    

// get single dowell data

export const SingleDowellData = createAsyncThunk('dowelldata/data',
    async (id) => {
        const { data } = await axios.get(`/api/dowelldata/${id}`)
        
        return data
}
)



// delete data

export const DeleteDowellData = createAsyncThunk('dowelldata/delete',
    async (id) => {
    const data = await axios.put('/api/dowelldatadelete',{id})
}
)


// initialState
const initialState = {
    data: [],
    loading: true,
    error: [],
    success: false,
    singleData:[]
}


const DowellSlice = createSlice({
    name: "DowellSlice",
    initialState,
    reducer: {},
    extraReducers: (builder) => {
        builder.addCase(GetDowellData.pending, (state, action) => {
            state.loading = true;
            
        })
            .addCase(GetDowellData.fulfilled, (state, action) => {
                state.loading = false;
                state.data.push(action.payload)
            })
            .addCase(GetDowellData.rejected, (state, action) => {
                state.loading = false,
                state.error = action.payload
            }).addCase(SingleDowellData.pending, (state, action) => {
            state.loading = true
            })
            .addCase(SingleDowellData.fulfilled, (state, action) => {
                state.loading = false
                state.singleData = action.payload
            })
            .addCase(SingleDowellData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload
        })
    }
        
})


export const DowellSliceReducer = DowellSlice.reducer

export const DowellSliceAction = DowellSlice.actions