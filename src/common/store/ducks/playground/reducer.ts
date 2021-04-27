import produce, { Draft } from 'immer';

import { PlaygroundAim, PlaygroundMood } from 'RootModels';

import {
    ConfigActionTypes,
    FETCH_ITEM_REQUEST,
    FETCH_CONFIG_FAILURE,
    FETCH_CONFIG_REQUEST,
    FETCH_CONFIG_SUCCESS,
    FETCH_SUBMISSION_REQUEST,
} from './types';

export interface PlaygroundState {
    readonly step: number;
    readonly data: {
        config: {
            aims: PlaygroundAim[],
            moods: PlaygroundMood[],
        },
        musiclover: {
            aims: PlaygroundAim[],
            moods: PlaygroundMood[]
        }
    },
    readonly isComplete: boolean;
    readonly isLoading: boolean;
    readonly error?: string;
}

const initialState: PlaygroundState = {
    step: 0,
    data: {
        config: {
            aims: [],
            moods: [],
        },
        musiclover: {
            aims: [],
            moods: [],
        }
    },
    isLoading: true,
    isComplete: false,
    error: undefined,
};

function itemAppender(arr: (PlaygroundAim | PlaygroundMood)[],
                      item: (PlaygroundAim | PlaygroundMood)) : (PlaygroundAim | PlaygroundMood)[] {
    if (arr.map(elem => elem.id).includes(item.id))
        return arr
            .filter(mood => mood.id !== item.id)

    return arr.concat(item);
}

export default produce(
    (draft: Draft<PlaygroundState> = initialState, action: ConfigActionTypes) => {
        switch (action.type) {
            /*
             * Item-driven data manipulations.
             */
            case FETCH_ITEM_REQUEST:
                switch (draft.step) {
                    case 0:
                        draft.data.musiclover.moods = itemAppender(draft.data.musiclover.moods, action.payload);
                        break;

                    case 1:
                        draft.data.musiclover.aims = itemAppender(draft.data.musiclover.aims, action.payload);
                        break;
                }
                return;
            /*
             * Config-driven data manipulations.
             */
            case FETCH_CONFIG_REQUEST:
                draft.isLoading = true;
                draft.error = undefined;
                return;
            case FETCH_CONFIG_SUCCESS:
                draft.isLoading = false;
                draft.data = {
                    ...draft.data,
                    ...action.payload,
                };
                draft.error = undefined;
                return;
            case FETCH_CONFIG_FAILURE:
                draft.isLoading = false;
                draft.data = initialState.data;
                draft.error = action.payload;
                return;
            /*
             * Step submission data manipulations.
             */
            case FETCH_SUBMISSION_REQUEST:
                draft.step += 1;
                if (draft.step === 3) draft.isComplete = true;
                return;
        }
        return draft;
    }
);
