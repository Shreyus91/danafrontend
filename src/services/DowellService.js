import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// get Dowel data
export const GetDowellData = createAsyncThunk(
  "dowelldata/get",
  async (page) => {
    const { data } = await axios.get(`/api/dowelldata?Page=${page}`);
    return data;
  }
);

// Add Dowel data

export const PostDowellData = createAsyncThunk(
  "dowelldata/post",
  async (data) => {
    await axios.post("/api/dowelldata", { data });
  }
);

// Dowel update change

export const UpdateDowellData = createAsyncThunk(
  "halfoption/update",
  async (data) => {
    await axios.put("/api/dowelldata", { data });
  }
);

// get single dowell data

export const SingleDowellData = createAsyncThunk(
  "dowelldata/data",
  async (id) => {
    const { data } = await axios.get(`/api/dowelldata/${id}`);
    return data;
  }
);

// delete data

export const DeleteDowellData = createAsyncThunk(
  "dowelldata/delete",
  async (id) => {
    await axios.put("/api/dowelldatadelete", { id });
  }
);

// search call

export const getSearch = createAsyncThunk("getsearch", async (search) => {
  const { data } = await axios.get(`/api/mearch?searchQ=${search}`);
  return data;
});
// initialState
const initialState = {
  data: [],
  loading: true,
  error: [],
  success: false,
  singleData: [],
  skipCount: 0,
};

// Create slice for Dowel

const DowellSlice = createSlice({
  name: "DowellSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(GetDowellData.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(GetDowellData.fulfilled, (state, action) => {
        state.data = [];
        state.loading = false;
        state.data.push(action.payload);
      })
      .addCase(GetDowellData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(SingleDowellData.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(SingleDowellData.fulfilled, (state, action) => {
        state.loading = false;
        state.singleData = action.payload;
      })
      .addCase(SingleDowellData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getSearch.pending, (state, action) => {
        state.loading = true;
        state.data = [];
      })
      .addCase(getSearch.fulfilled, (state, action) => {
        state.data.push(action.payload);
        state.loading = false;
      });
  },
});

export const DowellSliceReducer = DowellSlice.reducer;

export const DowellSliceAction = DowellSlice.actions;

export const { increment } = DowellSlice.actions;
const { actions, reducer } = DowellSlice;

export default reducer;
