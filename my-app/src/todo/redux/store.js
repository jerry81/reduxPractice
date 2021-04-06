import { createStore } from "redux"; // takes in reducer and returns the store that can be dispatched actions
import rootReducer from "./reducers"; // imports index.js

export default createStore(rootReducer);
