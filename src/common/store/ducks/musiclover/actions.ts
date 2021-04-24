import { Musiclover, MusicloverId } from 'RootModels';
import * as types from './types';

// action creators
export function fetchMusicloverRequest(id: MusicloverId): types.FetchMusicloverRequestAction {
    return { type: types.FETCH_MUSICLOVER_REQUEST, payload: id };
}

export function fetchMusicloverSuccess(
    data: Musiclover
): types.FetchMusicloverSuccessAction {
    return { type: types.FETCH_MUSICLOVER_SUCCESS, payload: data };
}

export function fetchMusicloverError(
    error: string
): types.FetchMusicloverFailureAction {
    return { type: types.FETCH_MUSICLOVER_FAILURE, payload: error };
}
