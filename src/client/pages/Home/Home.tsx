import * as React from 'react';
import { connect } from 'react-redux';
import { State } from 'RootState';
import { Meta } from 'client/components';
import { fetchHomepageRequest } from 'common/store/ducks/homepage/actions';
import { getHomepage, isLoading } from 'common/store/ducks/homepage/selectors';
import { HomeStub } from './Home.stub';

type Props = {
    data: {};
    fetchHomepage: () => void;
    isLoading: boolean;
};

function Home(props: Props) {
    const { isLoading } = props;

    if (isLoading) return <HomeStub />;

    return (
        <React.Fragment>
            <Meta title="Home page" description="Buy awesome snickers" />
        </React.Fragment>
    );
}

const mapStateToProps = (state: State) => ({
    data: getHomepage(state),
    isLoading: isLoading(state),
});
const mapDispatchToProps = { fetchHomepage: fetchHomepageRequest };

export default connect(mapStateToProps, mapDispatchToProps)(Home) as React.ComponentType<Props>;
