import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAdverts } from "services/getContacts-api";

export const fetchAdverts = createAsyncThunk("adverts/fetchAllAdverts", () => {
  return getAdverts();
});
