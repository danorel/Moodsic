import * as React from 'react';
import * as bem from 'b_';

import './Playground.css';

import { Header } from '../../components/Page/Header/Header';
import { Container, ContainerVertical, Meta } from 'client/components';

const b = bem.with('playground');

export default function Playground() {
    return (
        <Container>
            <Meta title="Playground..." description="" />
            <ContainerVertical>
                <Header title="How do you feel today?"/>
            </ContainerVertical>
        </Container>
    );
}
