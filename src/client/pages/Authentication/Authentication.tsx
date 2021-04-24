import * as React from 'react';
import * as bem from 'b_';
import { useHistory } from "react-router-dom";

import { Grid } from '@material-ui/core';

import { AuthenticationStub } from './Authentication.stub';
import { useAuthentication } from './Authentication.hook';

import { TabsComponent } from './components/Tabs';
import { FormComponent } from './components/Form';
import { TitleComponent } from './components/Title';

import './Authentication.css';

const b = bem.with('authentication-page');


export default function Authentication() {
    const history = useHistory();

    const {
        isSignIn,
        isLoading,
        isAuthenticated,
        fetchAuthentication,
    } = useAuthentication();

    React.useEffect(() => {
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
                                <TabsComponent isSignIn={isSignIn} onClick={null} />
                            </Grid>
                            <Grid item>
                                <TitleComponent isSignIn={isSignIn} />
                            </Grid>
                            <Grid item>
                                <FormComponent value={''} isSignIn={isSignIn} onClick={null} onChange={null} />
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
