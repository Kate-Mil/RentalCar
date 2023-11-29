import { createSlice } from "@reduxjs/toolkit";
import { handlePending, handleFulfilled, handleRejected } from "../index";

const initialState = {
  cards: [],
  favotire: false,
  isLoading: false,
  error: null,
};

export const adverstSlice = createSlice({
  name: "adverts",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(incrementBy, (state, action) => {
        // action is inferred correctly here if using TS
      })
      // You can chain calls, or have separate `builder.addCase()` lines each time
      .addCase(decrement, (state, action) => {})
      // You can match a range of action types
      .addMatcher(
        isRejectedAction,
        // `action` will be inferred as a RejectedAction due to isRejectedAction being defined as a type guard
        (state, action) => {}
      )
      // and provide a default case if no other handlers matched
      .addDefaultCase((state, action) => {});
  },
});
