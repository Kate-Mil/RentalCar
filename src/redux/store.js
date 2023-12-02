import { configureStore } from "@reduxjs/toolkit";
import { persistedAdvertsSlice } from "./index";

import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { filterSlice } from "./filter/filterSlice";

export const store = configureStore({
  reducer: {
    adverts: persistedAdvertsSlice,
    filter: filterSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
