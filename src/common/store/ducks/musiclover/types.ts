import { ReduxAction } from 'RootRedux';
import { Musiclover } from 'RootModels';

// types
export const FETCH_MUSICLOVER_REQUEST = '@@musiclover/FETCH_MUSICLOVER_REQUEST';
export const FETCH_MUSICLOVER_SUCCESS = '@@musiclover/FETCH_MUSICLOVER_SUCCESS';
export const FETCH_MUSICLOVER_FAILURE = '@@musiclover/FETCH_MUSICLOVER_FAILURE';

// action types
export type FetchMusicloverRequestAction = ReduxAction<typeof FETCH_MUSICLOVER_REQUEST>;
export type FetchMusicloverSuccessAction = ReduxAction<
    typeof FETCH_MUSICLOVER_SUCCESS,
    Musiclover
>;
export type FetchMusicloverFailureAction = ReduxAction<
    typeof FETCH_MUSICLOVER_FAILURE,
    string
>;

export type MusicloverActionTypes =
    | FetchMusicloverRequestAction
    | FetchMusicloverSuccessAction
    | FetchMusicloverFailureAction;
