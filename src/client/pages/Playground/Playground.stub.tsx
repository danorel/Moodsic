import * as React from 'react';
import * as bem from 'b_';

import './Playground.css';

import { Rect, Container, ContainerVertical } from 'client/components';
import { Header } from '../../components/Page/Header/Header';
import { Footer } from '../../components/Page/Footer/Footer';

const b = bem.with('playground-page');

export function PlaygroundStub() {
    return (
        <React.Fragment>
            <Container>
                <ContainerVertical>
                    <div className={b('flex-box')}>
                        <div className={b('flex-item')}>
                            <Header title="How do you feel today?" />
                        </div>
                        <div className={b('flex-item')}>
                            <div className={b('container-layout', { background: false })}>
                                <div style={{ display: 'flex', justifyContent: 'center', width: '100%', marginTop: '20px' }}>
                                    <Rect type="black" height="45px" width="75%" />
                                </div>
                                <div style={{ padding: '15px 0' }}>
                                    <div style={{ display: 'flex', justifyContent: 'center', width: '100%', padding: '5px 0px' }}>
                                        <Rect height="3.85vmin" width="60%" />
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'center', width: '100%', padding: '5px 0px' }}>
                                        <Rect height="3.85vmin" width="60%" />
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'center', width: '100%', padding: '5px 0px' }}>
                                        <Rect height="3.85vmin" width="60%" />
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'center', width: '100%', padding: '5px 0px' }}>
                                        <Rect height="3.85vmin" width="60%" />
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'center', width: '100%', padding: '5px 0px' }}>
                                        <Rect height="3.85vmin" width="60%" />
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'center', width: '100%', padding: '5px 0px' }}>
                                        <Rect height="3.85vmin" width="60%" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={b('flex-item')}>
                            <Footer disabled={true} title="Awaiting" />
                        </div>
                    </div>
                </ContainerVertical>
            </Container>
        </React.Fragment>
    );
}
