import * as React from 'react';
import * as bem from 'b_';
import { useParams, useHistory } from "react-router-dom";


import { Grid } from '@material-ui/core';

import { AuthenticationStub } from './Authentication.stub';
import { useAuthentication } from './Authentication.hook';

import { TabsComponent } from './components/Tabs';
import { FormComponent } from './components/Form';
import { TitleComponent } from './components/Title';

import './Authentication.css';

const b = bem.with('authentication-page');


export default function Authentication() {
    const { switching: query } = useParams<{ switching?: string }>();
    const history = useHistory();

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
        console.log(query);
        if (query)
            onChangeSwitching(query.toLowerCase() === 'true');
        fetchAuthentication();
    }, []);

    React.useEffect(() => {
        if (isAuthenticated)
            history.push("/");
    }, [isAuthenticated])

    if (isLoading) return <AuthenticationStub/>;

    return (
        <React.Fragment>
            <div className={b('div-background')}>
                <div className={b('div-inner')}>
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
                </div>
            </div>
        </React.Fragment>
    );
}
