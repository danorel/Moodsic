import * as React from 'react';
import * as bem from 'b_';

import { Container, ContainerVertical, PageMeta } from 'client/components';

import './Playground.css';

const b = bem.with('playground');

export default function Playground() {
    return (
        <Container>
            <PageMeta title="Playground..." description="" />
            <ContainerVertical>
                <h2 className={b('span')}>Playground...</h2>
            </ContainerVertical>
        </Container>
    );
}
