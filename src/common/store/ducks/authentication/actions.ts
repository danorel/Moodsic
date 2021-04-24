import * as types from './types';

import {
    AuthenticationEmail,
    AuthenticationStatus,
    AuthenticationSwitching
} from 'RootModels';

export function fetchEmailRequest(email: AuthenticationEmail): types.FetchEmailRequestAction {
    return { type: types.FETCH_EMAIL_REQUEST, payload: email };
}

export function fetchSwitchingRequest(switching: AuthenticationSwitching): types.FetchSwitchingRequestAction {
    return { type: types.FETCH_SWITCHING_REQUEST, payload: switching };
}

export function fetchSubmissionRequest(): types.FetchSubmissionRequestAction {
    return { type: types.FETCH_SUBMISSION_REQUEST };
}

export function fetchSubmissionSuccess(data: { isAuthenticated: AuthenticationStatus }): types.FetchSubmissionSuccessAction {
    return { type: types.FETCH_SUBMISSION_SUCCESS, payload: data };
}

export function fetchSubmissionError(
    error: string
): types.FetchSubmissionFailureAction {
    return { type: types.FETCH_SUBMISSION_FAILURE, payload: error };
}

export function fetchAuthenticationRequest(): types.FetchAuthenticationRequestAction {
    return { type: types.FETCH_AUTHENTICATION_REQUEST };
}

export function fetchAuthenticationSuccess(data: { isAuthenticated: AuthenticationStatus }): types.FetchAuthenticationSuccessAction {
    return { type: types.FETCH_AUTHENTICATION_SUCCESS, payload: data };
}

export function fetchAuthenticationError(
    error: string
): types.FetchAuthenticationFailureAction {
    return { type: types.FETCH_AUTHENTICATION_FAILURE, payload: error };
}
