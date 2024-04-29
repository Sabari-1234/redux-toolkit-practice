const { createSlice } = require("@reduxjs/toolkit");
const { cakeActions } = require("../cake/cakeSlice");
const initialState = {
  numberOfIcecream: 20,
};

const icecreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    buyIcecream: (state) => {
      state.numberOfIcecream--;
    },
    restocked: (state, action) => {
      state.numberOfIcecream += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(cakeActions.buyCake, (state) => {
      state.numberOfIcecream--;
    });
  },
});

module.exports.icecreamReducer = icecreamSlice.reducer;
module.exports.icecreamActions = icecreamSlice.actions;
