export const selectAdverts = (state) => state.adverts.cards;
export const selectIsLoading = (state) => state.adverts.isLoading;
export const selectError = (state) => state.adverts.error;
export const selectPage = (state) => state.adverts.page;
export const selectPageLimit = (state) => state.adverts.PageLimit;

export const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};

export const handleFulfilled = (state, { payload }) => {
  const existingIds = state.cards.map((item) => item.id);
  const newItems = payload.filter((item) => !existingIds.includes(item.id));
  state.cards = [...state.cards, ...newItems];
  state.isLoading = false;
};

export const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};
