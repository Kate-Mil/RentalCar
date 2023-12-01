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
  favorites: [],
  page: 1,
  pageLimit: 12,
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
    addToFavorites: (state, { payload }) => {
      state.favorites.push(payload);
    },
    deleteFromFavorites: (state, { payload }) => {
      state.favorites = state.favorites.filter(
        (item) => item.id !== payload.id
      );
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
  { key: "adverts", storage, whitelist: ["cards", "favorites"] },
  advertsSlice.reducer
);

export const { incrementPage, addToFavorites, deleteFromFavorites } =
  advertsSlice.actions;
