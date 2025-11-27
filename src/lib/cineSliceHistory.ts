import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type ItemHistory = {
  Poster: string,
  Title: string,
  imdbID: string
}

const cineSlice = createSlice({
  name: "myHistory",
  initialState: {
    myHistory: [] as ItemHistory[],
  },
  reducers: {

    addToMyHistory: (state, { payload }: PayloadAction<ItemHistory>) => {
      // Cleanings items with the same data of payload
      const filtered = state.myHistory.filter(i => (i.imdbID !== payload.imdbID) );
      // Setting to the state
      state.myHistory = [payload, ...filtered];
    },

  }
});

export const { addToMyHistory } = cineSlice.actions;

export default cineSlice.reducer;