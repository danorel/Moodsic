import * as types from './types';

// action creators
export function fetchAuthenticationRequest(): types.FetchAuthenticationRequestAction {
    return { type: types.FETCH_AUTHENTICATION_REQUEST };
}

export function fetchAuthenticationSuccess(data: { isAuthenticated: boolean }): types.FetchAuthenticationSuccessAction {
    return { type: types.FETCH_AUTHENTICATION_SUCCESS, payload: data };
}

export function fetchAuthenticationError(
    error: string
): types.FetchAuthenticationFailureAction {
    return { type: types.FETCH_AUTHENTICATION_FAILURE, payload: error };
}
