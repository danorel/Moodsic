import {
    AuthenticationActionTypes,
    FETCH_EMAIL_REQUEST,
    FETCH_SWITCHING_REQUEST,
    FETCH_SUBMISSION_REQUEST,
    FETCH_SUBMISSION_SUCCESS,
    FETCH_SUBMISSION_FAILURE,
    FETCH_AUTHENTICATION_REQUEST,
    FETCH_AUTHENTICATION_SUCCESS,
    FETCH_AUTHENTICATION_FAILURE,
} from './types';

import produce, { Draft } from 'immer';

export interface AuthenticationState {
    readonly data: {
        email: string,
        switching: boolean;
        isAuthenticated: boolean;
    };
    readonly isLoading: boolean;
    readonly error?: string;
}

export const initialState: AuthenticationState = {
    data: {
        email: '',
        switching: true,
        isAuthenticated: false
    },
    isLoading: true,
    error: undefined,
};

export default produce(
    (
        draft: Draft<AuthenticationState> = initialState,
        action: AuthenticationActionTypes
    ) => {
        switch (action.type) {
            case FETCH_EMAIL_REQUEST:
                draft.data.email = action.payload;
                return;
            case FETCH_SWITCHING_REQUEST:
                draft.data.switching = action.payload;
                return;
            case FETCH_AUTHENTICATION_REQUEST:
                draft.isLoading = true;
                draft.error = undefined;
                return;
            case FETCH_AUTHENTICATION_SUCCESS:
                draft.data = {
                    ...draft.data,
                    ...action.payload
                }
                draft.isLoading = false;
                draft.error = undefined;
                return;
            case FETCH_AUTHENTICATION_FAILURE:
                draft.data = initialState.data;
                draft.isLoading = false;
                draft.error = action.payload;
                return;
            case FETCH_SUBMISSION_REQUEST:
                draft.isLoading = true;
                draft.error = undefined;
                return;
            case FETCH_SUBMISSION_SUCCESS:
                draft.data = {
                    ...draft.data,
                    ...action.payload
                }
                draft.isLoading = false;
                draft.error = undefined;
                return;
            case FETCH_SUBMISSION_FAILURE:
                draft.data = initialState.data;
                draft.isLoading = false;
                draft.error = action.payload;
                return;
        }
        return draft;
    }
);
