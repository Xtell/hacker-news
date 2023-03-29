import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    set: (state, action) => {
      const { items = [] } = action.payload;
      console.debug(action)
      return [...items];
    },
    add: (state, action) => {
      const { items = [] } = action.payload;
      return [...state, ...items];
    }
  }
});

export const { set, add } = itemsSlice.actions;
export default itemsSlice.reducer;