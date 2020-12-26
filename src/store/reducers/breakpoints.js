import { SET_ACTIVE_BREAKPOINT } from "../types";

const initialStore = {
    "name": "default",
    "size": null,
};

const breakpoints = (store = initialStore, { type, payload }) => {
    switch (type) {
        case SET_ACTIVE_BREAKPOINT:
            return {
                ...store,
                "name": payload.breakpointName,
                "size": payload.breakpointSize,
            };
        default:
            return store;
    }
};

export default breakpoints;
