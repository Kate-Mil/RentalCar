import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAdverts } from "../../API/advertsApi";

export const fetchAdverts = createAsyncThunk(
  "adverts/fetchAllAdverts",
  async (page) => {
    return getAdverts(page);
  }
);
