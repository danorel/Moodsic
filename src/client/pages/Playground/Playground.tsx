import * as React from 'react';
import { useHistory } from 'react-router-dom';
import * as bem from 'b_';

import {
    PlaygroundAim,
    PlaygroundConfig, PlaygroundMood,
    PlaygroundMusiclover,
} from 'RootModels';

import './Playground.css';

import { Header } from '../../components/Page/Header/Header';
import { Container, ContainerVertical, Meta } from 'client/components';
import { BodyName } from '../../components/Page/Body/BodyName/BodyName';
import { BodyItems } from '../../components/Page/Body/BodyItems/BodyItems';
import { Footer } from '../../components/Page/Footer/Footer';

import { usePlayground } from './Playground.hook';
import { PlaygroundStub } from './Playground.stub';

const b = bem.with('playground-page');

const PlaygroundBodyStepper = (name: string,
                               musiclover: PlaygroundMusiclover,
                               config: PlaygroundConfig,
                               fetchItem: (item: (PlaygroundAim | PlaygroundMood)) => void,
                               fetchTitle: (title: string) => void): React.ReactNode[] => {
    return [
        <BodyItems
            title={"Choose your mood"}
            items={config.moods}
            options={musiclover.moods}
            onClick={fetchItem}/>,
        <BodyItems
            title={"Choose your aim"}
            items={config.aims}
            options={musiclover.aims}
            onClick={fetchItem}/>,
        <BodyName
            value={name}
            title={"Give a name to your playlist"}
            subtitle={"It could not be changed in future!"}
            onChange={fetchTitle}/>
    ];
}

export default function Playground() {
    const history = useHistory();

    const {
        step,
        title,
        config,
        musiclover,
        isLoading,
        isComplete,
        fetchItem,
        fetchTitle,
        fetchConfig,
        fetchSubmission
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
                        {PlaygroundBodyStepper(title, musiclover, config, fetchItem, fetchTitle)[step]}
                    </div>
                    <div className={b('flex-item')}>
                        <Footer disabled={false} title="Continue" onClick={fetchSubmission} />
                    </div>
                </div>
            </ContainerVertical>
        </Container>
    );
}
