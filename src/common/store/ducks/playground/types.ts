import { ReduxAction } from 'RootRedux';
import { PlaygroundAim, PlaygroundMood } from 'RootModels';

export const FETCH_CONFIG_REQUEST = '@playground/PLAYGROUND_CONFIG_REQUEST';
export const FETCH_CONFIG_SUCCESS = '@playground/FETCH_CONFIG_SUCCESS';
export const FETCH_CONFIG_FAILURE = '@playground/FETCH_CONFIG_FAILURE';

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

export type ConfigActionTypes =
    | FetchConfigRequestAction
    | FetchConfigSuccessAction
    | FetchConfigFailureAction
