import * as React from 'react';
import { connect } from 'react-redux';
import * as bem from 'b_';
import { State } from 'RootState';
import { PageMeta, Page, PageContainer } from 'client/components';
import { fetchHomepageRequest } from 'common/store/ducks/homepage/actions';
import { getHomepage, isLoading } from 'common/store/ducks/homepage/selectors';
import { HomeStub } from './Home.stub';

type Props = {
    data: {};
    fetchHomepage: () => void;
    isLoading: boolean;
};

const b = bem.with('page');

function Home(props: Props) {
    const { isLoading } = props;

    if (isLoading)
        return <HomeStub />;

    return (
        <Page>
            <PageMeta title="Home page" description="Buy awesome snickers" />
            <PageContainer>
                <h2>Popular</h2>
            </PageContainer>
            <PageContainer btn={{ to: '/musiclover', text: 'See more' }}>
                <h2>Newest</h2>
            </PageContainer>
        </Page>
    );
}

const mapStateToProps = (state: State) => ({
    data: getHomepage(state),
    isLoading: isLoading(state),
});
const mapDispatchToProps = { fetchHomepage: fetchHomepageRequest };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home) as React.ComponentType<Props>;
