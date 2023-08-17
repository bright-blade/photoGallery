import { createSlice } from "@reduxjs/toolkit";
import { Photo } from "../models/models";

const initialState: Photo[] = [];

export const photoSlice = createSlice({
  name: "images",
  initialState,
  reducers: {
    updatePhotoList(state, action) {
      return (state = action.payload);
    },
  },
});

export const photoActions = photoSlice.actions;

export default photoSlice.reducer;
