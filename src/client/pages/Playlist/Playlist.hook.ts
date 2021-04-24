import * as React from 'react';
import { useRouteMatch } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

import {
    getPlaylist,
    isLoading as isLoadingSelector,
} from 'common/store/ducks/playlist/selectors';

import { fetchPlaylistRequest as fetchPlaylistActionCreator } from 'common/store/ducks/playlist/actions';

import { fetchMusicloverRequest as fetchMusicloverActionCreator } from 'common/store/ducks/musiclover/actions';

import { PlaylistId, MusicloverId } from 'RootModels';

export function usePlaylist() {
    const dispatch = useDispatch();

    const match = useRouteMatch<{
        playlistId: PlaylistId,
        musicloverId: MusicloverId
    }>();

    const data = useSelector(getPlaylist);
    const isLoading = useSelector(isLoadingSelector);

    const fetchPlaylist = React.useCallback(
        (playlistId: PlaylistId) => dispatch(fetchPlaylistActionCreator(playlistId)),
        [dispatch]
    );

    const fetchMusiclover = React.useCallback(
        (musicloverId: MusicloverId) => dispatch(fetchMusicloverActionCreator(musicloverId)),
        [dispatch]
    );

    return {
        match,
        data,
        isLoading,
        fetchPlaylist,
        fetchMusiclover,
    };
}
