import { HomepageActionTypes, FETCH_HOMEPAGE_REQUEST, FETCH_HOMEPAGE_FAILURE, FETCH_HOMEPAGE_SUCCESS } from './types';

import produce, { Draft } from 'immer';

export interface HomepageState {
    readonly data: {};
    readonly isLoading: boolean;
    readonly error?: string;
}

export const initialState: HomepageState = {
    data: {},
    isLoading: false,
    error: undefined,
};

export default produce((draft: Draft<HomepageState> = initialState, action: HomepageActionTypes) => {
    switch (action.type) {
        case FETCH_HOMEPAGE_REQUEST:
            draft.isLoading = true;
            draft.error = undefined;
            return;
        case FETCH_HOMEPAGE_SUCCESS:
            draft.data = action.payload;
            draft.isLoading = false;
            draft.error = undefined;
            return;
        case FETCH_HOMEPAGE_FAILURE:
            draft.data = initialState.data;
            draft.isLoading = false;
            draft.error = action.payload;
            return;
    }
    return draft;
});
