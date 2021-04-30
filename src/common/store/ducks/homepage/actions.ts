import * as types from './types';

// action creators
export function fetchHomepageRequest(): types.FetchHomepageAction {
    return { type: types.FETCH_HOMEPAGE_REQUEST };
}

export function fetchHomepageSuccess(data: {}): types.FetchHomepageSuccessAction {
    return { type: types.FETCH_HOMEPAGE_SUCCESS, payload: data };
}

export function fetchHomepageError(error: string): types.FetchHomepageFailureAction {
    return { type: types.FETCH_HOMEPAGE_FAILURE, payload: error };
}
