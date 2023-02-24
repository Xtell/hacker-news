import { createReducer } from "@reduxjs/toolkit/src";

const rootReducer = createReducer({}, (builder) => {
  builder.addCase("ADD_ITEMS")
})
