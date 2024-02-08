import { ordered as cakeOrdered } from "../cake/cakeSlice";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type InitialState = {
  numOfIceCreams: number;
};

const initialState: InitialState = {
  numOfIceCreams: 20,
};
const iceCreamSlice = createSlice({
  name: "iceCream",
  initialState,
  reducers: {
    ordered: (state, action: PayloadAction<number>) => {
      state.numOfIceCreams -= action.payload || 1;
    },
    restocked: (state, action: PayloadAction<number>) => {
      state.numOfIceCreams += action.payload || 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(cakeOrdered, (state) => {
      state.numOfIceCreams--;
    });
  },
});

export default iceCreamSlice.reducer; // default export
export const { ordered, restocked } = iceCreamSlice.actions; // named export
