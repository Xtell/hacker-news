import { itemActionTypes } from "../constants.js";
import { createAction } from "@reduxjs/toolkit/src";

const setItems = createAction(itemActionTypes.setItems);
const updateItems = createAction(itemActionTypes.updateItems);