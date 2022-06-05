import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers/rootReducer";

const store = createStore(rootReducer, {}, composeWithDevTools());

store.subscribe(() => store.getState());

export default store;
