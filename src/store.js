import { createStore } from "redux";
import bookReducer from "./reducers";

const bookStore = createStore(bookReducer);

export default bookStore;
