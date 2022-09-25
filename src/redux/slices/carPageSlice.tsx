import { createSlice } from "@reduxjs/toolkit";

const carPageSlice = createSlice({
  name: "passTheID",
  initialState: {
    vehicleId: "",
  },
  reducers: {
    passID: (state, action) => {
      state.vehicleId = action.payload;
    },
  },
});

export const { passID } = carPageSlice.actions;
export default carPageSlice.reducer;
