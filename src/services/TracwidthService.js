import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// get TrackTable Data
export const GetTrackData = createAsyncThunk(
  "trackwidth/post",
  async (page) => {
    const { data } = await axios.get(`/api/tracktabledata?Page=${page}`);
    return data;
  }
);

// get single data

export const SingleTrackData = createAsyncThunk(
  "trackwidth/getdata",
  async (id) => {
    const { data } = await axios.get(`/api/tracktabledata/${id}`);
    return data;
  }
);

// Add Data
export const TrackWidthAddData = createAsyncThunk(
  "trackwidth/add",
  async (data) => {
    await axios.post("/api/tracktabledata", { data });
  }
);

// Track Table update data

export const TrackWidthUpdate = createAsyncThunk(
  "trackwidth/update",
  async (data) => {
    await axios.put("/api/tracktabledata", { data });
  }
);

// delete TrackWidth

export const TrackWidthDelete = createAsyncThunk(
  "trackwidth/delete",
  async (id) => {
        await axios.put("/api/tracktabledata/delete",{id });
      }
);


//Search TrackTable data

export const getTrackSearch = createAsyncThunk("getsearch", async (search) => {
  const { data } = await axios.get(`/api/isearch?searchQ=${search}`);
       return data;
});

// initial State
const initialState = {
  data: [],
  success: false,
  loading: true,
  error: [],
  singleData: [],
  skipCount: 0,
};

//  create slice for trackwidth

const TrackWidthSlice = createSlice({
  name: "TrackWidthSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(GetTrackData.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(GetTrackData.fulfilled, (state, action) => {
        state.data = [];
        state.loading = false;
        state.data.push(action.payload);
      })
      .addCase(GetTrackData.rejected, (state, action) => {
        state.loading = false;
        state.error.push(action.payload);
      })
      .addCase(TrackWidthUpdate.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(TrackWidthDelete.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(SingleTrackData.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(SingleTrackData.fulfilled, (state, action) => {
        state.loading = false;
        state.singleData = action.payload;
      })
      .addCase(SingleTrackData.rejected, (state, action) => {
        state.loading = false;
        state.error.push(action.payload);
      })
      .addCase(getTrackSearch.pending, (state, action) => {
        state.loading = true;
        state.data = [];
      })
      .addCase(getTrackSearch.fulfilled, (state, action) => {
        state.data.push(action.payload);
        state.loading = false;
      });
  },
});

export const TrackWidthSliceReducer = TrackWidthSlice.reducer;

export const TrackWidthSliceAction = TrackWidthSlice.actions;

