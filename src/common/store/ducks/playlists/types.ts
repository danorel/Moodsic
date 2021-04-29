import { ReduxAction } from 'RootRedux';
import { MusicloverId, Playlist } from 'RootModels';


export const FETCH_ACTIVE_REQUEST = '@@playlists/FETCH_ACTIVE_REQUEST';

export type FetchActiveRequestAction = ReduxAction<typeof FETCH_ACTIVE_REQUEST>;


export const FETCH_PLAYLISTS_REQUEST = '@@playlists/FETCH_PLAYLISTS_REQUEST';
export const FETCH_PLAYLISTS_SUCCESS = '@@playlists/FETCH_PLAYLISTS_SUCCESS';
export const FETCH_PLAYLISTS_FAILURE = '@@playlists/FETCH_PLAYLISTS_FAILURE';

export type FetchPlaylistsRequestAction = ReduxAction<typeof FETCH_PLAYLISTS_REQUEST, string>;
export type FetchPlaylistsSuccessAction = ReduxAction<
    typeof FETCH_PLAYLISTS_SUCCESS,
    Playlist[]
>;
export type FetchPlaylistsFailureAction = ReduxAction<
    typeof FETCH_PLAYLISTS_FAILURE,
    string
>;


export type PlaylistQueryType = { musicloverId: MusicloverId, query: string }

export const FETCH_PLAYLISTS_BY_QUERY_REQUEST = '@@playlists/FETCH_PLAYLISTS_BY_QUERY_REQUEST';
export const FETCH_PLAYLISTS_BY_QUERY_SUCCESS = '@@playlists/FETCH_PLAYLISTS_BY_QUERY_SUCCESS';
export const FETCH_PLAYLISTS_BY_QUERY_FAILURE = '@@playlists/FETCH_PLAYLISTS_BY_QUERY_FAILURE';

export type FetchPlaylistsByQueryRequestAction = ReduxAction<typeof FETCH_PLAYLISTS_BY_QUERY_REQUEST, PlaylistQueryType>;
export type FetchPlaylistsByQuerySuccessAction = ReduxAction<
    typeof FETCH_PLAYLISTS_BY_QUERY_SUCCESS,
    Playlist[]
    >;
export type FetchPlaylistsByQueryFailureAction = ReduxAction<
    typeof FETCH_PLAYLISTS_BY_QUERY_FAILURE,
    string
    >;



export type PlaylistsActionTypes =
    | FetchActiveRequestAction
    | FetchPlaylistsRequestAction
    | FetchPlaylistsSuccessAction
    | FetchPlaylistsFailureAction
    | FetchPlaylistsByQueryRequestAction
    | FetchPlaylistsByQuerySuccessAction
    | FetchPlaylistsByQueryFailureAction
