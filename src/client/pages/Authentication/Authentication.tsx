import * as React from 'react';
import * as bem from 'b_';
import { useHistory } from "react-router-dom";
import queryString from "query-string";

import { Grid } from '@material-ui/core';

import { AuthenticationStub } from './Authentication.stub';
import { useAuthentication } from './Authentication.hook';

import { TabsComponent } from './components/Tabs';
import { FormComponent } from './components/Form';
import { TitleComponent } from './components/Title';

import './Authentication.css';

import {
    Container,
    ContainerVertical
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
            history.push("/");
    }, [isAuthenticated])

    if (isLoading) return <AuthenticationStub/>;

    return (
        <React.Fragment>
            <Container>
                <ContainerVertical>
                    <div className={b('div-frame')}>
                        <Grid container direction="column" justify="center" alignItems="center" spacing={3}>
                            <Grid item>
                                <TabsComponent switching={switching} onChange={onChangeSwitching} />
                            </Grid>
                            <Grid item>
                                <TitleComponent switching={switching} />
                            </Grid>
                            <Grid item>
                                <FormComponent
                                    value={email}
                                    switching={switching}
                                    onSubmit={fetchSubmission}
                                    onChange={onChangeEmail} />
                            </Grid>
                        </Grid>
                    </div>
                </ContainerVertical>
            </Container>
        </React.Fragment>
    );
}
