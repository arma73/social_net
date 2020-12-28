export const replaceLocationState = (history, replaceParam) => {
    const { location } = history;
    const state = { ...location.state };
    delete state[replaceParam];
    history.replace({ ...location, state });
};
