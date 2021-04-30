import * as React from 'react';
import { useRouteMatch } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

import {
    selectQuery as querySelector,
    selectActive as activeSelector,
    selectLoading as isLoadingSelector,
    selectPlaylists as playlistsSelector,
    selectPlaylistsSorted as playlistsSortedSelector,
} from 'common/store/ducks/playlists/selectors';

import {
    fetchActiveRequest as fetchActiveActionCreator,
    fetchPlaylistsRequest as fetchPlaylistsActionCreator,
    fetchPlaylistsByQueryRequest as fetchPlaylistsByQueryCreator,
} from 'common/store/ducks/playlists/actions';

import { MusicloverId } from 'RootModels';

export function usePlaylists() {
    const dispatch = useDispatch();

    const match = useRouteMatch<{
        musicloverId: MusicloverId;
    }>();

    const query = useSelector(querySelector);
    const active = useSelector(activeSelector);
    const isLoading = useSelector(isLoadingSelector);

    const playlists = useSelector(playlistsSelector);
    const playlistsSorted = useSelector(playlistsSortedSelector);

    const fetchActive = React.useCallback(() => dispatch(fetchActiveActionCreator()), [dispatch]);

    const fetchPlaylists = React.useCallback(() => dispatch(fetchPlaylistsActionCreator(match.params.musicloverId)), [dispatch]);

    const fetchPlaylistsByQuery = React.useCallback(query => dispatch(fetchPlaylistsByQueryCreator(match.params.musicloverId, query)), [dispatch]);

    return {
        match,
        query,
        active,
        isLoading,
        playlists,
        playlistsSorted,
        fetchActive,
        fetchPlaylists,
        fetchPlaylistsByQuery,
    };
}
