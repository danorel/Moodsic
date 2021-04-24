import React from 'react';
import * as bem from 'b_';

import { Grid } from '@material-ui/core';

import './Tabs.css';

import { AuthenticationSwitching } from 'RootModels';

const b = bem.with('authentication-page-tabs');

interface TabsViewProps {
    switching: AuthenticationSwitching;
    onChange: (switching: AuthenticationSwitching) => void;
}

export function TabsComponent({ switching, onChange }: TabsViewProps) {
    return (
        <React.Fragment>
            <div className={b('div-tab')}>
                <Grid container direction="row" justify="space-between" alignItems="flex-start" spacing={2}>
                    <Grid item>
                        <div className={b('div-tab-sign-in')} onClick={() => onChange(true)}>
                            Sign In
                        </div>
                        {switching ? <div className={b('div-tab-divider')} /> : null}
                    </Grid>
                    <Grid item>
                        <div className={b('div-tab-sign-up')} onClick={() => onChange(false)}>
                            Sign Up
                        </div>
                        {!switching ? <div className={b('div-tab-divider')} /> : null}
                    </Grid>
                </Grid>
            </div>
        </React.Fragment>
    );
}
