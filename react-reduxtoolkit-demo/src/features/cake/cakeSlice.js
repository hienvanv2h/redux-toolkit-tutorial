import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numOfCakes: 10,
};
const cakeSlice = createSlice({
  // define name
  name: "cake",
  // define initial state
  initialState,
  reducers: {
    // define all the reducer functions here
    // action creators will be auto generate with the same name as reducer functions
    ordered: (state) => {
      state.numOfCakes--; // directly muttate state
    },
    restocked: (state, action) => {
      state.numOfCakes += action.payload || 1;
    },
  },
});

export default cakeSlice.reducer; // default export
export const { ordered, restocked } = cakeSlice.actions; // named export
