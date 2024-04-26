const { produce } = require("immer");
const { createStore } = require("redux");

const STREETCHANGE = "STREETCHANGE";

const changeStreet = (street) => {
  return {
    type: STREETCHANGE,
    payload: street,
  };
};

const initialState = {
  name: "sabari",
  address: {
    street: "kulapadi",
    area: "pvl",
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STREETCHANGE:
      //   return {
      //     ...state,
      //     address: {
      //       ...state.address,
      //       stree: action.payload,
      //     },
      //   };

      //by immer

      return produce(state, (draft) => {
        draft.address.street = action.payload;
      });
    default:
      return state;
  }
};

const store = createStore(reducer);
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(changeStreet("kkdi"));
