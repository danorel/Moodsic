import { useRouteMatch } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import * as React from 'react';
import {
    getPlaylist,
    isLoading as isLoadingSelector,
} from 'common/store/ducks/playlist/selectors';
import { getHomepage } from 'common/store/ducks/homepage/selectors';
import { fetchPlaylistRequest as fetchShoesActionCreator } from 'common/store/ducks/playlist/actions';
import { fetchHomepageRequest as fetchHomepageActionCreator } from 'common/store/ducks/homepage/actions';

export function useSneakers() {
    const match = useRouteMatch<{ slug: string }>();

    const { popular } = useSelector(getHomepage);
    const isLoading = useSelector(isLoadingSelector);
    const data = useSelector(getPlaylist);
    const dispatch = useDispatch();
    const fetchShoes = React.useCallback(
        (slug: string) => dispatch(fetchShoesActionCreator(slug)),
        [dispatch]
    );
    const fetchHomepage = React.useCallback(
        () => dispatch(fetchHomepageActionCreator()),
        [dispatch]
    );

    return {
        match,
        popular,
        isLoading,
        data,
        fetchShoes,
        fetchHomepage,
    };
}
