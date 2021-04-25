import * as React from 'react';
import * as bem from 'b_';
import { useHistory } from "react-router-dom";
import queryString from "query-string";

import { AuthenticationStub } from './Authentication.stub';
import { useAuthentication } from './Authentication.hook';

import { FormComponent } from './components/Form/Form';
import { TabsComponent } from './components/Tabs/Tabs';
import { TitleComponent } from './components/Title/Title';

import './Authentication.css';

import {
    Container,
    ContainerVertical,
} from 'client/components';

const b = bem.with('authentication-page');


export default function Authentication() {
    const history = useHistory();
    const params = queryString.parse(history.location.search);

    const {
        email,
        switching,
        isLoading,
        isAuthenticated,
        onChangeEmail,
        onChangeSwitching,
        fetchSubmission,
        fetchAuthentication,
    } = useAuthentication();

    React.useEffect(() => {
        if (params.switching)
            onChangeSwitching(params.switching === String(true));

        fetchAuthentication();
    }, []);

    React.useEffect(() => {
        if (isAuthenticated)
            history.push("/musiclover/1/playground");
    }, [isAuthenticated])

    if (isLoading) return <AuthenticationStub/>;

    return (
        <React.Fragment>
            <Container>
                <ContainerVertical>
                    <div className={b('container-layout', { background: true })}>
                        <div className={b('grid-box-layout')}>
                            <div className={b('grid-item-layout')}>
                                <TabsComponent switching={switching} onChange={onChangeSwitching} />
                            </div>
                            <div className={b('grid-item-layout')}>
                                <div className={b('flex-box-form')}>
                                    <div className={b('flex-item-form')}>
                                        <TitleComponent switching={switching} />
                                    </div>
                                    <div className={b('flex-item-form')}>
                                        <FormComponent
                                            value={email}
                                            switching={switching}
                                            onSubmit={fetchSubmission}
                                            onChange={onChangeEmail} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ContainerVertical>
            </Container>
        </React.Fragment>
    );
}
