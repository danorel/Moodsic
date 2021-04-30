import * as React from 'react';
import * as bem from 'b_';

import './Authentication.css';

import { Rect, Container, ContainerVertical } from 'client/components';

const b = bem.with('authentication-page');

export function AuthenticationStub() {
    return (
        <React.Fragment>
            <Container>
                <ContainerVertical>
                    <div className={b('container-layout', { background: false })}>
                        <div style={{ display: 'flex', justifyContent: 'center', width: '100%', marginTop: '15px' }}>
                            <Rect height="18px" width="40%" />
                            <div style={{ padding: '5px' }} />
                            <Rect height="18px" width="40%" />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', width: '100%', padding: '15px 0px' }}>
                            <Rect type="black" height="34px" width="80%" />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', width: '100%', padding: '15px 0px' }}>
                            <Rect height="16px" width="75%" />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', width: '100%', paddingBottom: '20px' }}>
                            <Rect height="150px" width="80%" />
                        </div>
                    </div>
                </ContainerVertical>
            </Container>
        </React.Fragment>
    );
}
