import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'


// get half option data
export const GetHalfOption = createAsyncThunk('HalfOption/get',
    async () => {
        const { data } = await axios.get('/api/hafoptiondata')
        console.log(data)
        return data
}
)

// post halfoption data

export const PostHalfOptionData = createAsyncThunk('HalfOption/post',
    async (data) => {
    await axios.post('/api/hafoptiondata',{data})
    })


    // handle update change

export const UpdateHalfOptionData = createAsyncThunk('halfoption/update',
    async (data) => {
    await axios.put('/api/hafoptiondata',{data})
}
)    

// get single halfoption data

export const SingleHalfOptionData = createAsyncThunk('halfoptionsingle/data',
    async (id) => {
        const { data } = await axios.get(`/api/hafoptiondata/${id}`)
        
        return data
}
)



// delete data

export const HalfOptionDeletedata = createAsyncThunk('halfoption/delete',
    async (id) => {
     await axios.put('/api/hafoptiondatadelete',{id})
}
)

export const getSearch = createAsyncThunk('getsearch',
    async (search) => {
   const {data} = await axios.get(`/api/fsearch?searchQ=${search}`)
        return data
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


const HalfOptionSlice = createSlice({
    name: "HalfOptionSlice",
    initialState,
    reducer: {},
    extraReducers: (builder) => {
        builder.addCase(GetHalfOption.pending, (state, action) => {
            state.loading = true;
            
        })
            .addCase(GetHalfOption.fulfilled, (state, action) => {
                state.loading = false;
                state.data.push(action.payload)
            })
            .addCase(GetHalfOption.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            }).addCase(SingleHalfOptionData.pending, (state, action) => {
            state.loading = true
            })
            .addCase(SingleHalfOptionData.fulfilled, (state, action) => {
                state.loading = false
                state.singleData = action.payload
            })
            .addCase(SingleHalfOptionData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload
            })
            .addCase(getSearch.pending, (state, action) => {
                state.loading = true
                state.data =[]
                
            })
            .addCase(getSearch.fulfilled, (state, action) => {
                state.data.push(action.payload)
                state.loading = false;
        })
    }
        
})


export const HalfOptionSliceReducer = HalfOptionSlice.reducer

export const HalfOptionSliceAction = HalfOptionSlice.actions