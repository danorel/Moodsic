import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { PlaygroundAim, PlaygroundMood } from 'RootModels';

import {
    selectConfig as configSelector,
    selectMusiclover as musicloverSelector,
    selectLoading as isLoadingSelector,
    selectComplete as isCompleteSelector,
} from '../../../common/store/ducks/playground/selectors';

import {
    fetchItemRequest as fetchItemRequestCreator,
    fetchConfigRequest as fetchConfigRequestCreator
} from 'common/store/ducks/playground/actions'

export function usePlayground() {
    const dispatch = useDispatch();

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

    return {
        config,
        musiclover,
        isLoading,
        isComplete,
        fetchItem,
        fetchConfig
    };
}
