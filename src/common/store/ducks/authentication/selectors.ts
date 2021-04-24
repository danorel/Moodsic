import { State } from 'RootState';

export function selectSignIn(state: State) {
    return state.authentication.data.isSignIn;
}

export function selectAuthenticated(state: State) {
    return state.authentication.data.isAuthenticated;
}

export function selectLoading(state: State) {
    return state.authentication.isLoading;
}
