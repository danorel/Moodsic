import { State } from 'RootState';

export function selectPlaylists(state: State) {
    return state.playlists.data;
}

export function selectLoading(state: State) {
    return state.playlists.isLoading;
}
