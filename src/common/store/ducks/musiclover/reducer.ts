import {
    MusicloverActionTypes,
    FETCH_MUSICLOVER_REQUEST,
    FETCH_MUSICLOVER_FAILURE,
    FETCH_MUSICLOVER_SUCCESS,
} from './types';

import { Musiclover } from 'RootModels';

import produce, { Draft } from 'immer';

export interface MusicloverState {
    readonly data: Musiclover;
    readonly isLoading: boolean;
    readonly error?: string;
}

export const initialState: MusicloverState = {
    data: {
        id: ""
    },
    isLoading: false,
    error: undefined,
};

export default produce(
    (draft: Draft<MusicloverState> = initialState, action: MusicloverActionTypes) => {
        switch (action.type) {
            case FETCH_MUSICLOVER_REQUEST:
                draft.isLoading = true;
                draft.error = undefined;
                return;
            case FETCH_MUSICLOVER_SUCCESS:
                draft.data = action.payload;
                draft.isLoading = false;
                draft.error = undefined;
                return;
            case FETCH_MUSICLOVER_FAILURE:
                draft.data = initialState.data;
                draft.isLoading = false;
                draft.error = action.payload;
                return;
        }
        return draft;
    }
);
