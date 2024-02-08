const { cakeActions } = require("../cake/cakeSlice");

const createSlice = require("@reduxjs/toolkit").createSlice;

const initialState = {
  numOfIceCreams: 20,
};
const iceCreamSlice = createSlice({
  name: "iceCream",
  initialState,
  reducers: {
    ordered: (state, action) => {
      state.numOfIceCreams -= action.payload || 1;
    },
    restocked: (state, action) => {
      state.numOfIceCreams += action.payload || 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(cakeActions.ordered, (state) => {
      state.numOfIceCreams--
    })
  },
});

module.exports = iceCreamSlice.reducer; // default export
module.exports.iceCreamActions = iceCreamSlice.actions; // named export
