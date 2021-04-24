import * as React from 'react';
import { Rect, Container, ContainerVertical } from 'client/components';

export function PlaylistStub() {
    return (
        <Container>
            <ContainerVertical>
                <Rect height="18px" width="190px" />
                <Rect type="black" height="34px" width="320px" />
                <div style={{ padding: '20px' }}>
                    <Rect height="16px" width="50px" />
                </div>
                <Rect height="200px" width="100%" />
            </ContainerVertical>
        </Container>
    );
}
