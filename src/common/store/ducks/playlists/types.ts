import { ReduxAction } from 'RootRedux';
import { Playlist } from 'RootModels';

// types
export const FETCH_PLAYLISTS_REQUEST = '@@playlists/FETCH_PLAYLISTS_REQUEST';
export const FETCH_PLAYLISTS_SUCCESS = '@@playlists/FETCH_PLAYLISTS_SUCCESS';
export const FETCH_PLAYLISTS_FAILURE = '@@playlists/FETCH_PLAYLISTS_FAILURE';

// action types
export type FetchPlaylistsRequestAction = ReduxAction<typeof FETCH_PLAYLISTS_REQUEST, string>;
export type FetchPlaylistsSuccessAction = ReduxAction<
    typeof FETCH_PLAYLISTS_SUCCESS,
    Playlist[]
>;
export type FetchPlaylistsFailureAction = ReduxAction<
    typeof FETCH_PLAYLISTS_FAILURE,
    string
>;

export type PlaylistsActionTypes =
    | FetchPlaylistsRequestAction
    | FetchPlaylistsSuccessAction
    | FetchPlaylistsFailureAction;
