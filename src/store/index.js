import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "./modules/main"
import homeReducer from "./modules/home";
import entireReducer from "./modules/entire";
import detailSlice from "./modules/detail"

const store = configureStore({
  reducer: {
    mainModule: mainReducer,
    homeModule: homeReducer,
    entireModule: entireReducer,
    detailModule: detailSlice
  },
});

export default store;
