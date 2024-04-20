import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: "filter",
  initialState: {
    location: "",
    details: {
      airConditioner: false,
      automatic: false,
      kitchen: false,
      tv: false,
      shower: false,
      type: "",
    },
  },
  reducers: {
    setLocationFilter(state, action) {
      console.log(action.payload);
      state.location = action.payload;
    },
    setFormFilter(state, action) {
      console.log("state", state.details);
      console.log("setFormFilter", action.payload);
      state.details = { ...state.details, ...action.payload };
    },
  },
});

export const { setLocationFilter, setFormFilter } = filterSlice.actions;
export default filterSlice.reducer;
