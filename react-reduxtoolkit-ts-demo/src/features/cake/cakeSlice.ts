import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type InitialState = {
  numOfCakes: number
}

const initialState: InitialState = {
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
    restocked: (state, action: PayloadAction<number>) => {
      state.numOfCakes += action.payload || 1;
    },
  },
});

export default cakeSlice.reducer; // default export
export const { ordered, restocked } = cakeSlice.actions; // named export
