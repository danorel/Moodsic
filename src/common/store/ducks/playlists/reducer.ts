import produce, { Draft } from 'immer';

import {
    PlaylistsActionTypes,
    FETCH_PLAYLISTS_REQUEST,
    FETCH_PLAYLISTS_FAILURE,
    FETCH_PLAYLISTS_SUCCESS,
} from './types';

import { Playlist } from 'RootModels';

export interface PlaylistsState {
    readonly data: Playlist[];
    readonly query: string;
    readonly active: boolean;
    readonly isLoading: boolean;
    readonly error?: string;
}

export const initialState: PlaylistsState = {
    data: [],
    query: '',
    active: false,
    isLoading: false,
    error: undefined,
};

export default produce(
    (draft: Draft<PlaylistsState> = initialState, action: PlaylistsActionTypes) => {
        switch (action.type) {
            case FETCH_PLAYLISTS_REQUEST:
                draft.isLoading = true;
                draft.error = undefined;
                return;
            case FETCH_PLAYLISTS_SUCCESS:
                draft.data = action.payload;
                draft.isLoading = false;
                draft.error = undefined;
                return;
            case FETCH_PLAYLISTS_FAILURE:
                draft.data = initialState.data;
                draft.isLoading = false;
                draft.error = action.payload;
                return;
        }
        return draft;
    }
);
