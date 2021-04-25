import * as React from 'react';
import * as bem from 'b_';

import './Playground.css';

import { Header } from '../../components/Page/Header/Header';
import { Container, ContainerVertical, Meta } from 'client/components';
import { Body } from '../../components/Page/Body/Body';
import { Footer } from '../../components/Page/Footer/Footer';

const b = bem.with('playground');

export default function Playground() {
    return (
        <Container>
            <Meta title="Playground..." description="" />
            <ContainerVertical>
                <div className={b('flex-box')}>
                    <div className={b('flex-item')}>
                        <Header title="How do you feel today?"/>
                    </div>
                    <div className={b('flex-item')}>
                        <Body items={[{ emoji: '😍', title: 'Happy' }]}/>
                    </div>
                    <div className={b('flex-item')}>
                        <Footer title="Continue"/>
                    </div>
                </div>
            </ContainerVertical>
        </Container>
    );
}
