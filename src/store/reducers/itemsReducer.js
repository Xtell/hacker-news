import { createReducer } from "@reduxjs/toolkit/src";
import { itemActions } from "../constants.js";

const itemsReducer = createReducer([], (builder) => {
  builder
      .addCase("SET_ITEMS", (state, action) => {
        const { items = [] } = action.payload;
        return items;
      })
      .addCase("UPDATE_ITEMS", (state, action) => {
        const { items = [] } = action.payload;
        return [ ...state, ...items ];
      });
});