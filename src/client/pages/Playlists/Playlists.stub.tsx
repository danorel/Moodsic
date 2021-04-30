import * as React from 'react';
import * as bem from 'b_';

import './Playlists.css';

import { Container, ContainerVertical, Rect } from 'client/components';
import { Header } from '../../components/Page/Header/Header';
import { Bar } from './components/Bar/Bar';
import { Body } from './components/Body/Body';

const b = bem.with('playlists');

export function PlaylistStubComponent() {
    return (
        <Container>
            <ContainerVertical>
                <div className={b('flex-box')}>
                    <div className={b('flex-item')}>
                        <Header title="My playlists"/>
                    </div>
                    <div className={b('flex-item')}>
                        <Bar
                            disabled={true}
                            value={''}
                            active={false}
                            onClick={() => {}}
                            onChange={() => {}} />
                    </div>
                    <div className={b('flex-item')}>
                        <Body
                            items={[]}
                            factor={3}
                            mock={true}
                            onClick={() => {}}/>
                    </div>
                </div>
            </ContainerVertical>
        </Container>
    );
}
