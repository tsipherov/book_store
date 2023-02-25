import { createStore } from "redux";
import bookReducer from "./reducers/bookReducer";

const bookStore = createStore(bookReducer);

export default bookStore;
