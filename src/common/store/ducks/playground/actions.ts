import * as types from './types';

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
