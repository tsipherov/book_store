import { createStore } from "redux";
import bookReducer from "./reducers/bookReducer";

const bookStore = createStore(
  bookReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default bookStore;
