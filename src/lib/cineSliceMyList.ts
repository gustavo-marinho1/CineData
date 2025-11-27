import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type ItemMyList = {
  Poster: string,
  Title: string,
  imdbID: string
}

const cineSlice = createSlice({
  name: "myList",
  initialState: {
    myList: [] as ItemMyList[],
  },
  reducers: {

    addToMyList: (state, { payload }: PayloadAction<ItemMyList>) => {
      // Cleanings items with the same data of payload
      const filtered = state.myList.filter(i => (i.imdbID !== payload.imdbID) );
      // Adding the new item at the beginning
      state.myList = [payload, ...filtered];
    },

    removeFromMyList: (state, { payload }: PayloadAction<string>) => {
      // Filtering the item to remove by imdbID
      const filtered = state.myList.filter(i => (i.imdbID !== payload) );
      // Setting to the state
      state.myList = [...filtered];
    },

  }
});

export const { addToMyList, removeFromMyList } = cineSlice.actions;

export default cineSlice.reducer;