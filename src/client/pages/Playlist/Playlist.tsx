import * as React from 'react';
import * as bem from 'b_';

import { Page } from 'client/components';

import { PlaylistStub } from './Playlist.stub';

import { usePlaylist } from './Playlist.hook';

import './Playlist.css';

const b = bem.with('sneakers-page');

function PlaylistPage() {
    const {
        match,
        isLoading,
        data,
        fetchPlaylist,
        fetchMusiclover,
    } = usePlaylist();

    React.useEffect(() => {
        if (!data || data.id !== match.params.musicloverId) {
            fetchMusiclover(match.params.musicloverId);
            fetchPlaylist(match.params.playlistId);
        }
    }, [match]);

    if (isLoading || !data)
        return <PlaylistStub />;

    const { songs, aim, id, mood, name, weather } = data;

    return (
        <Page mix={b()}>
            <div>{aim}</div>
        </Page>
    );
}

export default PlaylistPage;
