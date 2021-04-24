import * as React from 'react';
import { useRouteMatch } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

import {
    selectMusiclover,
    selectLoading as isLoadingSelector,
} from 'common/store/ducks/musiclover/selectors';

import { fetchMusicloverRequest as fetchMusicloverActionCreator } from 'common/store/ducks/musiclover/actions';

import { MusicloverId } from 'RootModels';

export function useAuthentication() {
    const dispatch = useDispatch();

    const match = useRouteMatch<{ musicloverId: MusicloverId }>();

    const data = useSelector(selectMusiclover);
    const isLoading = useSelector(isLoadingSelector);

    const fetchMusiclover = React.useCallback(
        (id: MusicloverId) => dispatch(fetchMusicloverActionCreator(id)),
        [dispatch]
    );

    return {
        match,
        data,
        isLoading,
        fetchMusiclover,
    };
}
