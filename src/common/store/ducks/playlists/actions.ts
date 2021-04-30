import { MusicloverId, Playlist } from 'RootModels';
import * as types from './types';

export function fetchActiveRequest(): types.FetchActiveRequestAction {
    return { type: types.FETCH_ACTIVE_REQUEST };
}

export function fetchPlaylistsRequest(id: MusicloverId): types.FetchPlaylistsRequestAction {
    return { type: types.FETCH_PLAYLISTS_REQUEST, payload: id };
}

export function fetchPlaylistsSuccess(data: Playlist[]): types.FetchPlaylistsSuccessAction {
    return { type: types.FETCH_PLAYLISTS_SUCCESS, payload: data };
}

export function fetchPlaylistsError(error: string): types.FetchPlaylistsFailureAction {
    return { type: types.FETCH_PLAYLISTS_FAILURE, payload: error };
}

export function fetchPlaylistsByQueryRequest(musicloverId: MusicloverId, query: string): types.FetchPlaylistsByQueryRequestAction {
    return { type: types.FETCH_PLAYLISTS_BY_QUERY_REQUEST, payload: { musicloverId, query } };
}

export function fetchPlaylistsByQuerySuccess(data: Playlist[]): types.FetchPlaylistsByQuerySuccessAction {
    return { type: types.FETCH_PLAYLISTS_BY_QUERY_SUCCESS, payload: data };
}

export function fetchPlaylistsByQueryError(error: string): types.FetchPlaylistsByQueryFailureAction {
    return { type: types.FETCH_PLAYLISTS_BY_QUERY_FAILURE, payload: error };
}
