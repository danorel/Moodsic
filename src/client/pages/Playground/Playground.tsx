import * as React from 'react';
import { Container, ContainerVertical, PageMeta } from 'client/components';
import './Playground.css';

export default function Playground() {
    return (
        <Container>
            <PageMeta title="Playground..." description="" />
            <ContainerVertical>
                <h2>Playground...</h2>
            </ContainerVertical>
        </Container>
    );
}
