import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { PlaygroundAim, PlaygroundMood } from 'RootModels';

import {
    selectStep as stepSelector,
    selectConfig as configSelector,
    selectMusiclover as musicloverSelector,
    selectLoading as isLoadingSelector,
    selectComplete as isCompleteSelector,
} from '../../../common/store/ducks/playground/selectors';

import {
    fetchItemRequest as fetchItemRequestCreator,
    fetchConfigRequest as fetchConfigRequestCreator,
    fetchSubmissionRequest as fetchSubmissionRequestCreator
} from 'common/store/ducks/playground/actions'

export function usePlayground() {
    const dispatch = useDispatch();

    const step = useSelector(stepSelector);

    const config = useSelector(configSelector);
    const musiclover = useSelector(musicloverSelector);

    const isLoading = useSelector(isLoadingSelector);
    const isComplete = useSelector(isCompleteSelector);

    const fetchItem = React.useCallback(
        (item: (PlaygroundAim | PlaygroundMood)) => dispatch(fetchItemRequestCreator(item)),
        [dispatch]
    )

    const fetchConfig = React.useCallback(
        () => dispatch(fetchConfigRequestCreator()),
        [dispatch]
    );

    const fetchSubmission = React.useCallback(
        () => dispatch(fetchSubmissionRequestCreator()),
        [dispatch]
    );

    return {
        step,
        config,
        musiclover,
        isLoading,
        isComplete,
        fetchItem,
        fetchConfig,
        fetchSubmission,
    };
}
