import * as React from 'react';
import { useRouteMatch } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

import {
    selectLoading as isLoadingSelector,
    selectPlaylists as playlistsSelector,
} from 'common/store/ducks/playlists/selectors';

import { fetchPlaylistsRequest as fetchPlaylistsActionCreator } from 'common/store/ducks/playlists/actions';

import { MusicloverId } from 'RootModels';

export function usePlaylists() {
    const dispatch = useDispatch();

    const match = useRouteMatch<{
        musicloverId: MusicloverId
    }>();

    const playlists = useSelector(playlistsSelector);
    const isLoading = useSelector(isLoadingSelector);

    const fetchPlaylists = React.useCallback(
        () => dispatch(fetchPlaylistsActionCreator(match.params.musicloverId)),
        [dispatch]
    );

    return {
        match,
        isLoading,
        playlists,
        fetchPlaylists,
    };
}
