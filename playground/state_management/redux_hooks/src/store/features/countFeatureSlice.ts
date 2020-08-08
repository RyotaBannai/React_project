import { createSlice } from "@reduxjs/toolkit";

export const CountFeature = createSlice({
  name: "count",
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state) => ({
      count: state.count + 1,
    }),
    decrement: (state) => ({
      count: state.count - 1,
    }),
  },
});
export const useCount = () => CountFeature.actions;
export default CountFeature.reducer;
