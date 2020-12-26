import * as types from "../types";

/**
 * @description Changes the active breakpoint.
 * 
 * @param {string} breakpointName - String defining the active breakpoint
 * @param {number} breakpointSize - Number defining the active breakpoint
 * 
 * @return {object} Action object
 */
export const setActiveBreakpoint = (breakpointName, breakpointSize) => ({
    "type": types.SET_ACTIVE_BREAKPOINT,
    "payload": {
        breakpointName,
        breakpointSize,
    },
});

/**
 * @param {string} view base | grid | mixed
 */
export const setActiveTargetView = view => ({
    "type": types.SET_ACTIVE_TARGET_VIEW,
    "payload": view,
});
