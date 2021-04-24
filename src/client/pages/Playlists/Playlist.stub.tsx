import * as React from 'react';
import { Page, PageContainer, Rect, SneakersListStub } from 'client/components';

export function PlaylistStubComponent() {
    return (
        <Page>
            <PageContainer>
                <h2>
                    <Rect type="black" height="20px" width="90px" />
                </h2>
                <SneakersListStub count={18} />
            </PageContainer>
        </Page>
    );
}
