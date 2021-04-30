import * as types from './types';
import { PlaygroundAim, PlaygroundMood } from 'RootModels';

export function fetchItemRequest(item: PlaygroundAim | PlaygroundMood): types.FetchItemRequestAction {
    return { type: types.FETCH_ITEM_REQUEST, payload: item };
}

export function fetchTitleRequest(title: string): types.FetchTitleRequestAction {
    return { type: types.FETCH_TITLE_REQUEST, payload: title };
}

export function fetchSubmissionRequest(): types.FetchSubmissionRequestAction {
    return { type: types.FETCH_SUBMISSION_REQUEST };
}

export function fetchConfigRequest(): types.FetchConfigRequestAction {
    return { type: types.FETCH_CONFIG_REQUEST };
}

export function fetchConfigSuccess(data: types.FetchConfigData): types.FetchConfigSuccessAction {
    return { type: types.FETCH_CONFIG_SUCCESS, payload: data };
}

export function fetchConfigFailure(error: string): types.FetchConfigFailureAction {
    return { type: types.FETCH_CONFIG_FAILURE, payload: error };
}
