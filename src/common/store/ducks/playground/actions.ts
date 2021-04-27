import * as types from './types';
import { FetchSubmissionData } from './types';
import { PlaygroundAim, PlaygroundMood } from 'RootModels';

export function fetchItemRequest(item: (PlaygroundAim | PlaygroundMood)): types.FetchItemRequestAction {
    return { type: types.FETCH_ITEM_REQUEST, payload: item };
}

export function fetchConfigRequest(): types.FetchConfigRequestAction {
    return { type: types.FETCH_CONFIG_REQUEST };
}

export function fetchConfigSuccess(
    data: types.FetchConfigData
): types.FetchConfigSuccessAction {
    return { type: types.FETCH_CONFIG_SUCCESS, payload: data };
}

export function fetchConfigFailure(
    error: string
): types.FetchConfigFailureAction {
    return { type: types.FETCH_CONFIG_FAILURE, payload: error };
}

export function fetchSubmissionRequest(): types.FetchSubmissionRequestAction {
    return { type: types.FETCH_SUBMISSION_REQUEST };
}

export function fetchSubmissionSuccess(
    data: FetchSubmissionData
): types.FetchSubmissionSuccessAction {
    return { type: types.FETCH_SUBMISSION_SUCCESS, payload: data };
}

export function fetchSubmissionError(
    error: string
): types.FetchSubmissionFailureAction {
    return { type: types.FETCH_SUBMISSION_FAILURE, payload: error };
}
