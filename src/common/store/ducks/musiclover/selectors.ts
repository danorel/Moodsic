import { State } from 'RootState';

export function selectMusiclover(state: State) {
    return state.musiclover.data;
}

export function selectLoading(state: State) {
    return state.musiclover.isLoading;
}
