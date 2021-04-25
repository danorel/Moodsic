import * as React from 'react';
import { useHistory } from 'react-router-dom';
import * as bem from 'b_';

import './Playground.css';

import { Header } from '../../components/Page/Header/Header';
import { Container, ContainerVertical, Meta } from 'client/components';
import { Body } from '../../components/Page/Body/Body';
import { Footer } from '../../components/Page/Footer/Footer';

import { usePlayground } from './Playground.hook';
import { PlaygroundStub } from './Playground.stub';

const b = bem.with('playground-page');

export default function Playground() {
    const history = useHistory();

    const {
        config,
        isLoading,
        isComplete,
        fetchConfig
    } = usePlayground();

    React.useEffect(() => {
        fetchConfig();
    }, []);

    React.useEffect(() => {
        if (isComplete)
            history.push("/musiclover/1/my-playlists");
    }, [isComplete])

    if (isLoading)
        return <PlaygroundStub />;

    return (
        <Container>
            <Meta title="Playground..." description="" />
            <ContainerVertical>
                <div className={b('flex-box')}>
                    <div className={b('flex-item')}>
                        <Header title="How do you feel today?"/>
                    </div>
                    <div className={b('flex-item')}>
                        <Body items={config.moods}/>
                    </div>
                    <div className={b('flex-item')}>
                        <Footer title="Continue"/>
                    </div>
                </div>
            </ContainerVertical>
        </Container>
    );
}
