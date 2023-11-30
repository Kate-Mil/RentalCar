import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAdverts } from "../../API/advertsApi";

export const fetchAdverts = createAsyncThunk("adverts/fetchAllAdverts", () => {
  return getAdverts(page);
});
