import * as React from 'react';
import { connect } from 'react-redux';
import { State } from 'RootState';
import { Playlist } from 'RootModels';
import { PageMeta, PageContainer, Page } from 'client/components';
import { PlaylistStubComponent } from './Playlist.stub';
import { fetchPlaylistRequest } from '../../../common/store/ducks/playlist/actions';
import { getPlaylist, isLoading } from '../../../common/store/ducks/playlist/selectors';

type Props = {
    data: Playlist;
    fetchPlaylist: () => void;
    isLoading: boolean;
};

function PlaylistComponent(props: Props) {
    const { isLoading, data, fetchPlaylist } = props;

    React.useEffect(() => {
        if (!data)
            fetchPlaylist();
    }, []);

    if (isLoading || !data)
        return <PlaylistStubComponent />;

    return (
        <Page>
            <PageMeta
                title="Playlist page"
                description="See awesome collection of snickers"
            />
            <PageContainer>
                <h2>Playlist</h2>
            </PageContainer>
        </Page>
    );
}

const mapStateToProps = (state: State) => ({
    data: getPlaylist(state),
    isLoading: isLoading(state),
});
const mapDispatchToProps = { fetchPlaylist: fetchPlaylistRequest.bind('1') };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PlaylistComponent) as React.ComponentType;
