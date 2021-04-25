import produce, { Draft } from 'immer';

import { PlaygroundAim, PlaygroundMood } from 'RootModels';

import {
    ConfigActionTypes,
    FETCH_CONFIG_FAILURE,
    FETCH_CONFIG_REQUEST,
    FETCH_CONFIG_SUCCESS,
} from './types';

export interface PlaygroundState {
    readonly data: {
        config: {
            aims: PlaygroundAim[],
            moods: PlaygroundMood[],
        }
    },
    readonly isComplete: boolean;
    readonly isLoading: boolean;
    readonly error?: string;
}

const initialState: PlaygroundState = {
    data: {
        config: {
            moods: [],
            aims: [],
        },
    },
    isComplete: false,
    isLoading: true,
    error: undefined,
};

export default produce(
    (draft: Draft<PlaygroundState> = initialState, action: ConfigActionTypes) => {
        switch (action.type) {
            case FETCH_CONFIG_REQUEST:
                draft.isLoading = true;
                draft.error = undefined;
                return;
            case FETCH_CONFIG_SUCCESS:
                draft.isLoading = false;
                draft.data = {
                    ...draft.data,
                    ...action.payload,
                };
                draft.error = undefined;
                return;
            case FETCH_CONFIG_FAILURE:
                draft.isLoading = false;
                draft.data = initialState.data;
                draft.error = action.payload;
                return;
        }
        return draft;
    }
);
