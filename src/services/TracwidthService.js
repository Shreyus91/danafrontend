import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";


// get All Data
export const fetchTrackWidthPost = createAsyncThunk(
  "trackwidth/post",
  async () => {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const { data } = await axios.get("/api/tracktabledata", config);
    return data;
  }
);

// get single data

export const getSingleTrackWidthData = createAsyncThunk('trackwidth/getdata',
  async (id) => {
    const res = await axios.get(`/api/tracktabledata/${id}`)
    return res.data
}
)

// Add Data
export const TrackWidthAddData = createAsyncThunk('trackwidth/add',
    async (data) => {
      const res = await axios.post('/api/tracktabledata', { data })
      console.log(res)
}
)




// update data

export const TrackWidthUpdate = createAsyncThunk(
  "trackwidth/update",
  async (data) => {
    const res = await axios.put("/api/tracktabledata", { data });
    return res.data;
  }
);

// delete TrackWidth

export const TrackWidthDelete = createAsyncThunk(
  "trackwidth/delete",
  async (id) => {
    console.log(id);
   
    const res = await axios.put("/api/tracktabledata/delete", { data: id });
    console.log(res);
    return res.data;
  }
);

// initial State
const initialState = {
  data: [],
  success: false,
  loading: true,
  error: [],
  singleData:[]
};

//  create slice for trackwidth 

const TrackWidthSlice = createSlice({
  name: "TrackWidthSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTrackWidthPost.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchTrackWidthPost.fulfilled, (state, action) => {
        state.loading = false;
        state.data.push(action.payload);
      })
      .addCase(fetchTrackWidthPost.rejected, (state, action) => {
        state.loading = false;
        state.error.push(action.payload);
      })
      .addCase(TrackWidthUpdate.fulfilled, (state, action) => {
        state.loading = false;
        
      })
      .addCase(TrackWidthDelete.fulfilled, (state, action) => {
        state.loading = false;
      })
        .addCase(getSingleTrackWidthData.pending, (state, action) => {
          state.loading = true;
        })
        .addCase(getSingleTrackWidthData.fulfilled, (state, action) => {
          state.loading = false;
          state.singleData = action.payload
        })
        .addCase(getSingleTrackWidthData.rejected, (state, action) => {
          state.loading = false;
          state.error.push(action.payload);
        })
  },
});

export const TrackWidthSliceReducer = TrackWidthSlice.reducer;

export const TrackWidthSliceAction = TrackWidthSlice.actions;

// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

// const initialState = {
//     data: [],
//     isSuccess: false,
//     loading: false,
//     message:""
// }
// export const getLorem = createAsyncThunk('lorem/getData', async() => {
//     try {
//         const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts')
//         return data
//     } catch (error) {
//         console.log(error)
//     }
// })

// export const postLorem = createAsyncThunk('lorem/postData', async () => {
//     try {
//         const body ={title:"xyz",body:"xxx",id:101}
//         const data = await axios.post("https://jsonplaceholder.typicode.com/posts", body)
//         return data.data

//     } catch (error) {
//         console.log(error)
//     }
// })

// const loremSlice = createSlice({
//     name: 'loremSlice',
//     initialState,
//     reducers: {},
//     extraReducers:{
//         [getLorem.pending]: (state, {payload}) => {
//             state.loading = true
//         },
//             [getLorem.fulfilled]: (state, { payload }) => {
//                 state.loading = false,
//                     state.data = payload,
//                     state.isSuccess = true

//         },
//         [getLorem.rejected]: (state, { payload }) => {
//                 state.loading= false
//         },
//         [postLorem.fulfilled]: (state, { payload }) => {
//                 state.data.push(payload)
//         }

//     }
// })

// export const loremSliceReducer = loremSlice.reducer

// export const loremAction = loremSlice.actions
