import * as React from 'react';
import { Container, ContainerVertical, PageMeta } from 'client/components';
import './Preferences.css';

export default function Preferences() {
    return (
        <Container>
            <PageMeta title="Preferences..." description="" />
            <ContainerVertical>
                <h2>Preferences...</h2>
            </ContainerVertical>
        </Container>
    );
}
