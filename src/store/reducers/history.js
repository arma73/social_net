import * as types from "../types";

const initialState = {
    "from": null,
};

const history = (state = initialState, { type, payload }) => {
    switch (type) {
        case types.SET_LOCATION_STATE_FROM:
            return {
                ...state,
                "from": payload,
            };
        default:
            return state;
    }
};

export default history;
