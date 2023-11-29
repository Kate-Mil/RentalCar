export const selectAdverts = (state) => state.adverts.cards;
export const selectIsLoading = (state) => state.isLoading;
export const selectError = (state) => state.error;

export const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};

export const handleFulfilled = (state, { payload }) => {
  state.cards = payload;
  state.isLoading = false;
};

export const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};
