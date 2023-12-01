import { createSlice } from "@reduxjs/toolkit";
import {
  handlePending,
  handleFulfilled,
  handleRejected,
  fetchAdverts,
} from "../index";

const initialState = {
  cards: [],
  page: 1,
  PageLimit: 12,
  isLoading: false,
  error: null,
};

export const advertsSlice = createSlice({
  name: "adverts",
  initialState: initialState,
  reducers: {
    incrementPage: (state) => {
      state.page += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdverts.fulfilled, handleFulfilled)
      .addMatcher((action) => {
        action.type.endsWith("/pending");
      }, handlePending)
      .addMatcher((action) => {
        action.type.endsWith("/rejected");
      }, handleRejected);
  },
});

export const { incrementPage } = advertsSlice.actions;
