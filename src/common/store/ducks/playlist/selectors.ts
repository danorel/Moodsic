import { State } from 'RootState';

export function getPlaylist(state: State) {
    return state.playlist.data;
}

export function isLoading(state: State) {
    return state.playlist.isLoading;
}
