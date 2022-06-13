import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const apiAddress = '/api/BuildSheetDatadata'
// post bare drawing number data

export const postBuildSheetData = createAsyncThunk('BuildSheetData/post',
    async (data) => {
    await axios.put(`${apiAddress}P`,{data})
}
)

// get all bare drawing number data

export const getAllBuildSheetData = createAsyncThunk('BuildSheetData/getAll', async (page) => {
    const {data} = await axios.get(`${apiAddress}?Page=${page}`)
    return data
})

// get Single bare drawing number data

export const GetSingleBuildSheetData = createAsyncThunk('BuildSheetData/getsingle', async (id) => {
    const { data } = await axios.get(`${apiAddress}/${id}`)
    return data
})

// update bare drawing Number data

export const UpdateBuildSheetData = createAsyncThunk('BuildSheetData/update', async (data) => {
    await axios.put(`${apiAddress}`,{data})
    
})

// delete bare drawing number data

export const DeleteBuildSheetData = createAsyncThunk('BuildSheetData/delete', async (id) => {
    await axios.put(`${apiAddress}delete`,{id})
})

export const geteSearch = createAsyncThunk('geteSearch',
    async (search) => {
   const {data} = await axios.get(`/api/esearch?searchQ=${search}`)
        console.log(data)
        return data
 }
)

const initialState = {
    data: [],
    loading: true,
    error: [],
    success: false,
    singleData:[]
}

const BuildSheetDataSlice = createSlice({
    name: "BuildSheetDataSlice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllBuildSheetData.pending, (state, action) => {
            state.loading = true;
            
            
        })
            .addCase(getAllBuildSheetData.fulfilled, (state, action) => {
                state.data = [];    
                state.loading = false;
                state.data.push(action.payload)
            })
            .addCase(getAllBuildSheetData.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload;
            }).addCase(GetSingleBuildSheetData.pending, (state, action) => {
            state.loading = true
            })
            .addCase(GetSingleBuildSheetData.fulfilled, (state, action) => {
                state.loading = false
                state.singleData = action.payload
            })
            .addCase(GetSingleBuildSheetData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload
            })
            .addCase(geteSearch.pending, (state, action) => {
                state.loading = true
                state.data =[]
                
            })
            .addCase(geteSearch.fulfilled, (state, action) => {
                state.data.push(action.payload)
                state.loading = false;
        })
    }

})

export const BuildSheetSliceReducer = BuildSheetDataSlice.reducer

export const BuildSheetSliceAction = BuildSheetDataSlice.actions
