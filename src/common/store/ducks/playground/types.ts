import { ReduxAction } from 'RootRedux';
import { PlaygroundAim, PlaygroundMood } from 'RootModels';

export const FETCH_ITEM_REQUEST = '@@playground/FETCH_ITEM_REQUEST';

export const FETCH_CONFIG_REQUEST = '@@playground/PLAYGROUND_CONFIG_REQUEST';
export const FETCH_CONFIG_SUCCESS = '@@playground/FETCH_CONFIG_SUCCESS';
export const FETCH_CONFIG_FAILURE = '@@playground/FETCH_CONFIG_FAILURE';

export const FETCH_SUBMISSION_REQUEST = '@@playground/FETCH_SUBMISSION_REQUEST';
export const FETCH_SUBMISSION_SUCCESS = '@@playground/FETCH_SUBMISSION_SUCCESS';
export const FETCH_SUBMISSION_FAILURE = '@@playground/FETCH_SUBMISSION_FAILURE';

/*
 * User action types meant for making a choose of some item.
 */

export type FetchItemRequestAction = ReduxAction<
    typeof FETCH_ITEM_REQUEST,
    (PlaygroundAim | PlaygroundMood)
>;

/*
 * Action types meant for fetching the configurations from the server.
 */

export type FetchConfigData = {
    config: {
        aims: PlaygroundAim[],
        moods: PlaygroundMood[],
    }
}

export type FetchConfigRequestAction = ReduxAction<typeof FETCH_CONFIG_REQUEST>;
export type FetchConfigSuccessAction = ReduxAction<
    typeof FETCH_CONFIG_SUCCESS,
    FetchConfigData
>;
export type FetchConfigFailureAction = ReduxAction<
    typeof FETCH_CONFIG_FAILURE,
    string
>;

/*
 * Action types meant for fetching the submission of the step from the server.
 */

export type FetchSubmissionData = {
    ok: true;
};

export type FetchSubmissionRequestAction = ReduxAction<typeof FETCH_SUBMISSION_REQUEST>
export type FetchSubmissionSuccessAction = ReduxAction<
    typeof FETCH_SUBMISSION_SUCCESS,
    FetchSubmissionData
>
export type FetchSubmissionFailureAction = ReduxAction<
    typeof FETCH_SUBMISSION_FAILURE,
    string
>

export type ConfigActionTypes =
    | FetchItemRequestAction
    | FetchConfigRequestAction
    | FetchConfigSuccessAction
    | FetchConfigFailureAction
    | FetchSubmissionRequestAction
    | FetchSubmissionSuccessAction
    | FetchSubmissionFailureAction
