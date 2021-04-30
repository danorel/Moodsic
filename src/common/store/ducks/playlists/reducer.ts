import produce, { Draft } from 'immer';

import {
    FETCH_ACTIVE_REQUEST,
    FETCH_PLAYLISTS_BY_QUERY_FAILURE,
    FETCH_PLAYLISTS_BY_QUERY_REQUEST,
    FETCH_PLAYLISTS_BY_QUERY_SUCCESS,
    FETCH_PLAYLISTS_FAILURE,
    FETCH_PLAYLISTS_REQUEST,
    FETCH_PLAYLISTS_SUCCESS,
    PlaylistsActionTypes,
} from './types';

import { Playlist } from 'RootModels';

export interface PlaylistsState {
    readonly data: Playlist[];
    readonly sorted: Playlist[];
    readonly query: string;
    readonly active: boolean;
    readonly isLoading: boolean;
    readonly error?: string;
}

export const initialState: PlaylistsState = {
    data: [],
    sorted: [],
    query: '',
    active: false,
    isLoading: true,
    error: undefined,
};

function playlistDateComparator(a: Playlist, b: Playlist) {
    return b.date.getTime() - a.date.getTime();
}

function playlistTitleComparator(a: Playlist, b: Playlist) {
    return a.title.localeCompare(b.title);
}

export default produce((draft: Draft<PlaylistsState> = initialState, action: PlaylistsActionTypes) => {
    switch (action.type) {
        case FETCH_ACTIVE_REQUEST:
            draft.active = !draft.active;
            return;
        case FETCH_PLAYLISTS_REQUEST:
            draft.error = undefined;
            draft.isLoading = true;
            return;
        case FETCH_PLAYLISTS_SUCCESS:
            draft.data = [...action.payload].sort(playlistDateComparator);
            draft.sorted = [...action.payload].sort(playlistTitleComparator);
            draft.isLoading = false;
            draft.error = undefined;
            return;
        case FETCH_PLAYLISTS_FAILURE:
            draft.data = initialState.data;
            draft.sorted = initialState.sorted;
            draft.isLoading = false;
            draft.error = action.payload;
            return;
        case FETCH_PLAYLISTS_BY_QUERY_REQUEST:
            draft.query = action.payload.query;
            draft.error = undefined;
            return;
        case FETCH_PLAYLISTS_BY_QUERY_SUCCESS:
            draft.data = [...action.payload].sort(playlistDateComparator);
            draft.sorted = [...action.payload].sort(playlistTitleComparator);
            draft.error = undefined;
            return;
        case FETCH_PLAYLISTS_BY_QUERY_FAILURE:
            draft.data = initialState.data;
            draft.sorted = initialState.sorted;
            draft.error = action.payload;
            return;
    }
    return draft;
});
