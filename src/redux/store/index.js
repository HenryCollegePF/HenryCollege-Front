import { configureStore } from "@reduxjs/toolkit";
import users from "./slices/users";
import courses from "./slices/courses";
import payment from "./slices/payment";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["userState", "paymentState"],
};

const rootReducer = combineReducers({
  userState: users,
  courseState: courses,
  paymentState: payment,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default configureStore({
  reducer: persistedReducer, // corrected line
  middleware: [thunk],
});
