import { ReduxAction } from 'RootRedux';

// types
export const FETCH_AUTHENTICATION_REQUEST = '@@authentication/FETCH_AUTHENTICATION_REQUEST';
export const FETCH_AUTHENTICATION_SUCCESS = '@@authentication/FETCH_AUTHENTICATION_SUCCESS';
export const FETCH_AUTHENTICATION_FAILURE = '@@authentication/FETCH_AUTHENTICATION_FAILURE';

// action types
export type FetchAuthenticationRequestAction = ReduxAction<typeof FETCH_AUTHENTICATION_REQUEST>;
export type FetchAuthenticationSuccessAction = ReduxAction<
    typeof FETCH_AUTHENTICATION_SUCCESS,
    { isAuthenticated: boolean }
>;
export type FetchAuthenticationFailureAction = ReduxAction<
    typeof FETCH_AUTHENTICATION_FAILURE,
    string
>;

export type AuthenticationActionTypes =
    | FetchAuthenticationRequestAction
    | FetchAuthenticationSuccessAction
    | FetchAuthenticationFailureAction;
