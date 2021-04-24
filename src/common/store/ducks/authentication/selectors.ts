import { State } from 'RootState';

export function selectEmail(state: State) {
    return state.authentication.data.email;
}

export function selectSwitching(state: State) {
    return state.authentication.data.switching;
}

export function selectAuthenticated(state: State) {
    return state.authentication.data.isAuthenticated;
}

export function selectLoading(state: State) {
    return state.authentication.isLoading;
}
