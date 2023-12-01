import { createSlice } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: { items: [] },

  reducers: {
    addToFavorites: (state, { payload }) => {
      state.items.push(payload);
    },
    deleteFromFavorites: (state, { payload }) => {
      state.items = state.items.filter((item) => item.id !== payload.id);
    },
  },
});

export const persistedFavoritesSlice = persistReducer(
  { key: "favorites", storage, whitelist: ["items"] },
  favoritesSlice.reducer
);

export const { addToFavorites, deleteFromFavorites } = favoritesSlice.actions;
