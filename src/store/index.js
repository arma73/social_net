import { createStore, combineReducers } from "redux";

import breakpoint from "./reducers/breakpoints";
import view from "./reducers/view";
import history from "./reducers/history";

const store = combineReducers({
    breakpoint,
    view,
    history,
});

export default createStore(store);
