import { ReduxAction } from 'RootRedux';

// types
export const FETCH_HOMEPAGE_REQUEST = '@@homepage/FETCH_HOMEPAGE_REQUEST';
export const FETCH_HOMEPAGE_SUCCESS = '@@homepage/FETCH_HOMEPAGE_SUCCESS';
export const FETCH_HOMEPAGE_FAILURE = '@@homepage/FETCH_HOMEPAGE_FAILURE';

// action types
export type FetchHomepageAction = ReduxAction<typeof FETCH_HOMEPAGE_REQUEST>;
export type FetchHomepageSuccessAction = ReduxAction<
    typeof FETCH_HOMEPAGE_SUCCESS,
    {}
>;
export type FetchHomepageFailureAction = ReduxAction<
    typeof FETCH_HOMEPAGE_FAILURE,
    string
>;

export type HomepageActionTypes =
    | FetchHomepageAction
    | FetchHomepageSuccessAction
    | FetchHomepageFailureAction;
