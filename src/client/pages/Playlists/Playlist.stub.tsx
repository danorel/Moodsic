import * as React from 'react';
import { Container, ContainerVertical, Rect } from 'client/components';

export function PlaylistStubComponent() {
    return (
        <Container>
            <ContainerVertical>
                <h2>
                    <Rect type="black" height="20px" width="90px" />
                </h2>
            </ContainerVertical>
        </Container>
    );
}
