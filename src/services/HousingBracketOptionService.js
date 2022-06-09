import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axios from "axios";


// get Housing Bracket Option data

export const fetchHousingBracketOption = createAsyncThunk(
  'housingbracketoption',
  async ()=>{
      const {data} = await axios.get('/api/housingbracketoptiondata')
     return data
  }
)

// post Housing Bracket Option Data Create

export const PostHousingBracketOption = createAsyncThunk('posthousingbracketoption/post',
async (data) =>{
    const res = await axios.post('/api/housingbracketoptiondata',data) 
    console.log(data)
}
)

// delete housing bracket option data
export const DeleteHoisingBracketOption = createAsyncThunk('housingbracketoption/delete',

async(id)=>{
    console.log(id)
    const res = await axios.put('/api/housingbracketoptiondatadelete',{id})
    
})

// get single data from housing bracket option data

export const HousingBracketOptionSingleData = createAsyncThunk('housingbracketoption/singledata',
async (id)=>{
  const {data} = await axios.get(`/api/housingbracketoptiondata/${id}`)  
  return data
}
)


// update bracket option data 

export const HousingBracketOptionUpdate = createAsyncThunk('housingbracketoption/update',
async (data)=>{
    const datas = await axios.put('/api/housingbracketoptiondata',{data})
}
)



// initial state 

const initialState = {
    data:[],
    loading:true,
    error:[],
    success:false,
    singleData:[]


}

// create slice for housing bracket option

const HousingBracketOptionSlice = createSlice({
   name:"HousingBracketOptionSlice",
   initialState,
   reducers:{},
   extraReducers: (builder)=>{
       builder.addCase(fetchHousingBracketOption.pending,(state,action)=>{
           state.loading = true
       })
       .addCase(fetchHousingBracketOption.fulfilled,(state,action)=>{
           state.loading = false;
           state.data.push(action.payload);
       })
       .addCase(fetchHousingBracketOption.rejected,(state,action)=>{
           state.loading = false,
           state.error = action.payload
       })
       .addCase(DeleteHoisingBracketOption.fulfilled,(state,action)=>{
           state.loading = false
       })
       .addCase(HousingBracketOptionSingleData.pending,(state,action)=>{
           state.loading = true
          
       })
       .addCase(HousingBracketOptionSingleData.fulfilled,(state,action)=>{
           state.loading = false;
           state.singleData = action.payload
       })
       .addCase(HousingBracketOptionSingleData.rejected,(state,action)=>{
           state.loading = false;
           state.error = action.payload
       })
       .addCase(HousingBracketOptionUpdate.fulfilled,(state,action)=>{
           state.loading = false;
           
       })
       
   }

})

//  export slice and reducer

export const housingbracketoptionSliceReducer = HousingBracketOptionSlice.reducer

export const housingbracketoptionSliceAction = HousingBracketOptionSlice.actions