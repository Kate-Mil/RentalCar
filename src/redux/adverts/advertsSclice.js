import { createSlice } from "@reduxjs/toolkit";
import {
  handlePending,
  handleFulfilled,
  handleRejected,
  fetchAdverts,
} from "../index";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";

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

export const persistedAdvertsSlice = persistReducer(
  { key: "adverts", storage, whitelist: ["cards"] },
  advertsSlice.reducer
);

export const { incrementPage } = advertsSlice.actions;
