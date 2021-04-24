import * as React from 'react';
import * as bem from 'b_';

import { Grid } from '@material-ui/core';

import { AuthenticationStub } from './Authentication.stub';
import { useAuthentication } from './Authentication.hook';

import { TabsComponent } from './components/Tabs';
import { FormComponent } from './components/Form';
import { TitleComponent } from './components/Title';

import './Authentication.css';

const b = bem.with('authentication-page');


export default function Authentication() {
    const {
        match,
        data,
        isLoading,
        fetchMusiclover,
    } = useAuthentication();

    React.useEffect(() => {
        if (!data || data.id !== match.params.musicloverId)
            fetchMusiclover(match.params.musicloverId);
    }, [match]);

    if (isLoading) return <AuthenticationStub/>;

    const { id } = data;

    return (
        <React.Fragment>
            <div className={b('div-background')}>
                <div className={b('div-inner')}>
                    <div className={b('div-frame')}>
                        <Grid container direction="column" justify="center" alignItems="center" spacing={3}>
                            <Grid item>
                                <TabsComponent isSignIn={false} onClick={null} />
                            </Grid>
                            <Grid item>
                                <TitleComponent isSignIn={false} />
                            </Grid>
                            <Grid item>
                                <FormComponent value={''} isSignIn={false} onClick={null} onChange={null} />
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
