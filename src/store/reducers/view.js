import { SET_ACTIVE_TARGET_VIEW } from "../types";

const initialStore = {
    "target": "base",
};

const view = (state = initialStore, { type, payload }) => {
    switch (type) {
        case SET_ACTIVE_TARGET_VIEW:
            return {
                ...state,
                "target": payload,
            };
        default:
            return state;
    }
};

export default view;
