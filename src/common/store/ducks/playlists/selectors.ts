import { State } from 'RootState';

export function selectQuery(state: State) {
    return state.playlists.query;
}

export function selectActive(state: State) {
    return state.playlists.active;
}

export function selectLoading(state: State) {
    return state.playlists.isLoading;
}

export function selectPlaylists(state: State) {
    return state.playlists.data;
}

export function selectPlaylistsSorted(state: State) {
    return state.playlists.sorted;
}
