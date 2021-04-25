import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
    selectConfig as configSelector,
    selectLoading as isLoadingSelector,
    selectComplete as isCompleteSelector,
} from '../../../common/store/ducks/playground/selectors';

import {
    fetchConfigRequest as fetchConfigRequestCreator
} from 'common/store/ducks/playground/actions'

export function usePlayground() {
    const dispatch = useDispatch();

    const config = useSelector(configSelector);
    const isLoading = useSelector(isLoadingSelector);
    const isComplete = useSelector(isCompleteSelector);

    const fetchConfig = React.useCallback(
        () => dispatch(fetchConfigRequestCreator()),
        [dispatch]
    );

    return {
        config,
        isLoading,
        isComplete,
        fetchConfig
    };
}
