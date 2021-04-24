import { State } from 'RootState';

export function getMusiclover(state: State) {
    return state.musiclover.data;
}

export function isLoading(state: State) {
    return state.musiclover.isLoading;
}
