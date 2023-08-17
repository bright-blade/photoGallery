import { createSlice } from "@reduxjs/toolkit";

const initialState: number[] = [];

export const checkedPhotosSlice = createSlice({
  name: "checkedPhotos",
  initialState,
  reducers: {
    updatePhotoForChecked(state, action) {
      return (state = action.payload);
    },
    reset(state) {
      return (state = initialState);
    },
  },
});

export const checkedPhotosActions = checkedPhotosSlice.actions;

export default checkedPhotosSlice.reducer;
