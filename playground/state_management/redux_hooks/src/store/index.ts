import { createStore } from "redux";
import { CountReducer } from "./reducers/countReducer";
export const store = createStore(CountReducer);
