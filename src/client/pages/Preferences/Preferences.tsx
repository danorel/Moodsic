import * as React from 'react';
import { Page, PageContainer, PageMeta } from 'client/components';
import './Preferences.css';

export default function Preferences() {
    return (
        <Page>
            <PageMeta title="Preferences..." description="" />
            <PageContainer>
                <h2>Preferences...</h2>
                <div className="upcoming-banner" />
            </PageContainer>
        </Page>
    );
}
