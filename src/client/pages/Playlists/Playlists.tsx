import * as React from 'react';
import * as bem from 'b_';

import './Playlists.css';

import { Meta, Container, ContainerVertical } from 'client/components';
import { PlaylistStubComponent } from './Playlists.stub';

import { Header } from '../../components/Page/Header/Header';
import { Bar } from './components/Bar/Bar';
import { Body } from './components/Body/Body';

import { usePlaylists } from './Playlists.hook';

const b = bem.with('playlists');

function PlaylistsPage() {
    const {
        query,
        active,
        isLoading,
        playlists,
        playlistsSorted,
        fetchActive,
        fetchPlaylists,
        fetchPlaylistsByQuery,
    } = usePlaylists();

    React.useEffect(() => {
        fetchPlaylists();
    }, []);

    if (isLoading)
        return <PlaylistStubComponent />;

    return (
        <Container>
            <Meta
                title="My Playlists"
                description="See awesome collection of generated playlists"
            />
            <ContainerVertical>
                <div className={b('flex-box')}>
                    <div className={b('flex-item')}>
                        <Header title="How do you feel today?"/>
                    </div>
                    <div className={b('flex-item')}>
                        <Bar
                            value={query}
                            active={active}
                            disabled={false}
                            onClick={fetchActive}
                            onChange={fetchPlaylistsByQuery} />
                    </div>
                    <div className={b('flex-item')}>
                        <Body
                            mock={false}
                            items={active
                                ? playlistsSorted
                                : playlists}
                            factor={3}
                            onClick={fetchPlaylistsByQuery}/>
                    </div>
                </div>
            </ContainerVertical>
        </Container>
    );
}


export default PlaylistsPage;
