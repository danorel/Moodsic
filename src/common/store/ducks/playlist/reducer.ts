import {
    PlaylistActionTypes,
    FETCH_PLAYLIST_REQUEST,
    FETCH_PLAYLIST_FAILURE,
    FETCH_PLAYLIST_SUCCESS,
} from './types';

import { Playlist } from 'RootModels';

import produce, { Draft } from 'immer';

export interface PlaylistState {
    readonly data?: Playlist;
    readonly isLoading: boolean;
    readonly error?: string;
}

export const initialState: PlaylistState = {
    data: undefined,
    isLoading: false,
    error: undefined,
};

export default produce(
    (draft: Draft<PlaylistState> = initialState, action: PlaylistActionTypes) => {
        switch (action.type) {
            case FETCH_PLAYLIST_REQUEST:
                draft.isLoading = true;
                draft.error = undefined;
                return;
            case FETCH_PLAYLIST_SUCCESS:
                draft.data = action.payload;
                draft.isLoading = false;
                draft.error = undefined;
                return;
            case FETCH_PLAYLIST_FAILURE:
                draft.data = initialState.data;
                draft.isLoading = false;
                draft.error = action.payload;
                return;
        }
        return draft;
    }
);
