const store = require("./app/store");
const { cakeActions } = require("./features/cake/cakeSlice");
const { icecreamActions } = require("./features/iceCream/iceCreamSlice");
const { fetchUsers } = require("./features/user/userSlice");

console.log("initial state:", store.getState());
const unsubscribe = store.subscribe(() => {
  console.log("updated state:", store.getState());
});

store.dispatch(fetchUsers());

// store.dispatch(cakeActions.buyCake());
// store.dispatch(cakeActions.buyCake());
// store.dispatch(cakeActions.buyCake());
// store.dispatch(cakeActions.restocked(3));
// store.dispatch(icecreamActions.buyIcecream());
// store.dispatch(icecreamActions.buyIcecream());
// store.dispatch(icecreamActions.buyIcecream());
// store.dispatch(icecreamActions.restocked(3));
// unsubscribe();
