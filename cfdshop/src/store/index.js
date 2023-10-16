// import { applyMiddleware, combineReducers, createStore } from "redux";
// import counterReducer from "./reducers/counterReducer";
// import dogReducer from "./reducers/dogReducer";

// const reducers = combineReducers({
//   counter: counterReducer,
//   dog: dogReducer,
// });

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const middleware = (store) => (next) => (action) => {
//   if (typeof action === "function") {
//     action(store.dispatch);
//     return;
//   }

//   next(action);
// };
// const store = createStore(
//   reducers,
//   composeEnhancers(applyMiddleware(middleware))
// );
// export default store;

import { ENV } from "../config/enviroment";
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice";
const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(thunkMiddleware),
  devTools: ENV === "development",
});

export default store;
