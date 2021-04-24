import { ReduxAction } from 'RootRedux';
import { Playlist } from 'RootModels';

// types
export const FETCH_PLAYLIST_REQUEST = '@@playlist/FETCH_PLAYLIST_REQUEST';
export const FETCH_PLAYLIST_SUCCESS = '@@playlist/FETCH_PLAYLIST_SUCCESS';
export const FETCH_PLAYLIST_FAILURE = '@@playlist/FETCH_PLAYLIST_FAILURE';

// action types
export type FetchPlaylistRequestAction = ReduxAction<typeof FETCH_PLAYLIST_REQUEST, string>;
export type FetchPlaylistSuccessAction = ReduxAction<
    typeof FETCH_PLAYLIST_SUCCESS,
    Playlist
>;
export type FetchPlaylistFailureAction = ReduxAction<
    typeof FETCH_PLAYLIST_FAILURE,
    string
>;

export type PlaylistActionTypes =
    | FetchPlaylistRequestAction
    | FetchPlaylistSuccessAction
    | FetchPlaylistFailureAction;
