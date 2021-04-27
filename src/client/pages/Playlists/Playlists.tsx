import * as React from 'react';
import { Meta, Container, ContainerVertical } from 'client/components';
import { PlaylistStubComponent } from './Playlists.stub';

import { usePlaylists } from './Playlists.hook';

function PlaylistsPage() {
    const {
        isLoading,
        playlists,
        fetchPlaylists
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
                <h2>Playlists</h2>
                {playlists.map(playlist => playlist.title)}
            </ContainerVertical>
        </Container>
    );
}


export default PlaylistsPage;
