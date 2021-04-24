import React from 'react';
import * as bem from 'b_';

import { Grid } from '@material-ui/core';

import './Title.css';

const b = bem.with('authentication-page-title');

type TitleViewProps = {
    switching: boolean;
};

export function TitleComponent({ switching }: TitleViewProps) {
    return (
        <React.Fragment>
            <Grid container direction="row" justify="center" alignItems="center">
                <Grid item>
                    <div className={b('div-title')}>{switching ? 'Glad to see you again!' : 'Hello, musiclover :)'}</div>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}
