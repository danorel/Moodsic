import React from 'react';
import * as bem from 'b_';

import { Grid } from '@material-ui/core';

import './Title.css';

const b = bem.with('authentication-page-title');

type TitleViewProps = {
    isSignIn: boolean;
};

export function TitleComponent({ isSignIn }: TitleViewProps) {
    return (
        <React.Fragment>
            <Grid container direction="row" justify="center" alignItems="center">
                <Grid item>
                    <div className={b('div-title')}>{isSignIn ? 'Glad to see you again!' : 'Hello, musiclover :)'}</div>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}
