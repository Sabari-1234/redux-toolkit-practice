const { configureStore } = require("@reduxjs/toolkit");
const { cakeReducer } = require("../features/cake/cakeSlice");
const { icecreamReducer } = require("../features/iceCream/iceCreamSlice");
const { default: logger } = require("redux-logger");
const { userReducer } = require("../features/user/userSlice");

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: icecreamReducer,
    user: userReducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

module.exports = store;
