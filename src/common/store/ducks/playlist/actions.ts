import { Playlist, PlaylistId } from 'RootModels';
import * as types from './types';

// action creators
export function fetchPlaylistRequest(id: PlaylistId): types.FetchPlaylistRequestAction {
    return { type: types.FETCH_PLAYLIST_REQUEST, payload: id };
}

export function fetchPlaylistSuccess(
    data: Playlist
): types.FetchPlaylistSuccessAction {
    return { type: types.FETCH_PLAYLIST_SUCCESS, payload: data };
}

export function fetchPlaylistError(error: string): types.FetchPlaylistFailureAction {
    return { type: types.FETCH_PLAYLIST_FAILURE, payload: error };
}
