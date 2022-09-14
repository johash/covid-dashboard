import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

const initialState = {
  loading: false,
  data: null,
  totalCases: null,
};

export const getAllData = createAsyncThunk("dashboard/getAll", () => {
  return axios
    .get("all")
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
});

export const getHistorical = createAsyncThunk("dashboard/getHistorical", () => {
  return axios
    .get("historical/all", {
      params: {
        lastdays: 7,
      },
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
});

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllData.pending, (state, { meta, payload }) => {
      state.loading = true;
    });
    builder.addCase(getAllData.fulfilled, (state, { meta, payload }) => {
      state.loading = false;
      state.data = payload;
    });
    builder.addCase(getHistorical.fulfilled, (state, { meta, payload }) => {
      state.totalCases = payload;
    });
  },
});

export const {} = dashboardSlice.actions;
export default dashboardSlice.reducer;
