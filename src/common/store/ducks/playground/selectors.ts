import { State } from 'RootState';

export function selectStep(state: State) {
    return state.playground.step;
}

export function selectConfig(state: State) {
    return state.playground.data.config;
}

export function selectMusiclover(state: State) {
    return state.playground.data.musiclover;
}

export function selectLoading(state: State) {
    return state.playground.isLoading;
}

export function selectComplete(state: State) {
    return state.playground.isComplete;
}
