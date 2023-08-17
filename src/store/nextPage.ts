import { createSlice } from "@reduxjs/toolkit";

const initialState: string = "";

export const nextPageSlice = createSlice({
  name: "nextPage",
  initialState,
  reducers: {
    saveNextPageUrl(state, action) {
      return (state = action.payload);
    },
  },
});

export const nextPageActions = nextPageSlice.actions;

export default nextPageSlice.reducer;
