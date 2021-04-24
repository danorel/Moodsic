import React from 'react';
import * as bem from 'b_';

import { Grid } from '@material-ui/core';

import './Tabs.css';

const b = bem.with('authentication-page-tabs');

interface TabsViewProps {
    isSignIn: boolean;
    onClick: (newSignIn: boolean) => void;
}

export function TabsComponent({ isSignIn, onClick }: TabsViewProps) {
    return (
        <React.Fragment>
            <div className={b('div-tab')}>
                <Grid container direction="row" justify="space-between" alignItems="flex-start" spacing={2}>
                    <Grid item>
                        <div className={b('div-tab-sign-in')} onClick={() => onClick(true)}>
                            Sign In
                        </div>
                        {isSignIn ? <div className={b('div-tab-divider')} /> : null}
                    </Grid>
                    <Grid item>
                        <div className={b('div-tab-sign-up')} onClick={() => onClick(false)}>
                            Sign Up
                        </div>
                        {!isSignIn ? <div className={b('div-tab-divider')} /> : null}
                    </Grid>
                </Grid>
            </div>
        </React.Fragment>
    );
}
