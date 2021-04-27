import { Playlist, PlaylistId } from 'RootModels';
import * as types from './types';

// action creators
export function fetchPlaylistsRequest(id: PlaylistId): types.FetchPlaylistsRequestAction {
    return { type: types.FETCH_PLAYLISTS_REQUEST, payload: id };
}

export function fetchPlaylistsSuccess(
    data: Playlist[]
): types.FetchPlaylistsSuccessAction {
    return { type: types.FETCH_PLAYLISTS_SUCCESS, payload: data };
}

export function fetchPlaylistsError(error: string): types.FetchPlaylistsFailureAction {
    return { type: types.FETCH_PLAYLISTS_FAILURE, payload: error };
}
