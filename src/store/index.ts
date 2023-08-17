import { configureStore } from "@reduxjs/toolkit";
import images from "./photos";
import nextPage from "./nextPage";
import checkedPhotos from "./checkedPhotos";

const store = configureStore({
  reducer: {
    photos: images,
    nextPage,
    checkedPhotos,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
