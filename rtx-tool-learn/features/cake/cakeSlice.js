const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  numberOfCake: 10,
};

const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    buyCake: (state) => {
      state.numberOfCake--;
    },
    restocked: (state, action) => {
      state.numberOfCake += action.payload;
    },
  },
});

module.exports.cakeReducer = cakeSlice.reducer;
module.exports.cakeActions = cakeSlice.actions;
