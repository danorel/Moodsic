import { ReduxAction } from 'RootRedux';

// types
export const FETCH_EMAIL_REQUEST = '@@authentication/FETCH_EMAIL_REQUEST';

export const FETCH_SWITCHING_REQUEST = '@@authentication/FETCH_SWITCHING_REQUEST';

export const FETCH_SUBMISSION_REQUEST = '@@authentication/FETCH_SUBMISSION_REQUEST';
export const FETCH_SUBMISSION_SUCCESS = '@@authentication/FETCH_SUBMISSION_SUCCESS';
export const FETCH_SUBMISSION_FAILURE = '@@authentication/FETCH_SUBMISSION_FAILURE';

export const FETCH_AUTHENTICATION_REQUEST = '@@authentication/FETCH_AUTHENTICATION_REQUEST';
export const FETCH_AUTHENTICATION_SUCCESS = '@@authentication/FETCH_AUTHENTICATION_SUCCESS';
export const FETCH_AUTHENTICATION_FAILURE = '@@authentication/FETCH_AUTHENTICATION_FAILURE';


// action types
export type FetchEmailRequestAction = ReduxAction<typeof FETCH_EMAIL_REQUEST>;

export type FetchSwitchingRequestAction = ReduxAction<typeof FETCH_SWITCHING_REQUEST>;

export type FetchSubmissionRequestAction = ReduxAction<typeof FETCH_SUBMISSION_REQUEST>;
export type FetchSubmissionSuccessAction = ReduxAction<
    typeof FETCH_SUBMISSION_SUCCESS,
    { isAuthenticated: boolean }
    >;
export type FetchSubmissionFailureAction = ReduxAction<
    typeof FETCH_SUBMISSION_FAILURE,
    string
    >;

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
    | FetchEmailRequestAction
    | FetchSwitchingRequestAction
    | FetchSubmissionRequestAction
    | FetchSubmissionSuccessAction
    | FetchSubmissionFailureAction
    | FetchAuthenticationRequestAction
    | FetchAuthenticationSuccessAction
    | FetchAuthenticationFailureAction
