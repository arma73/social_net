import { createStore, combineReducers } from "redux";

import breakpoint from "./reducers/breakpoints";
import view from "./reducers/view";

const store = combineReducers({
    breakpoint,
    view,
});

export default createStore(store);
