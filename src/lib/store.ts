import { configureStore } from "@reduxjs/toolkit";
import myListReducer from "./cineSliceMyList";
import historyReducer from "./cineSliceHistory";

const store = configureStore({
  reducer: {
    myList: myListReducer,
    myHistory: historyReducer
  }
});

export default store;