import { State } from 'RootState';

export function selectConfig(state: State) {
    return state.playground.data.config;
}

export function selectLoading(state: State) {
    return state.playground.isLoading;
}

export function selectComplete(state: State) {
    return state.playground.isComplete;
}
