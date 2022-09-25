import { combineReducers } from "@reduxjs/toolkit";
import carPageSlice from "./slices/carPageSlice";
const reducer = combineReducers({ car: carPageSlice });

export { reducer };
