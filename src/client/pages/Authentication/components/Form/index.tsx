import React from 'react';
import * as bem from 'b_';

import { Grid } from '@material-ui/core';

import './Form.css';

const b = bem.with('authentication-page-form');

interface FormViewProps {
    value: string;
    isSignIn: boolean;
    onClick: () => void;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function FormComponent({ value, isSignIn, onClick, onChange }: FormViewProps) {
    return (
        <React.Fragment>
            <Grid container direction="column" justify="center" alignItems="center" spacing={2}>
                <Grid item>
                    <input className={b('input')} value={value} placeholder={'Pass e-mail...'} onChange={onChange} />
                </Grid>
                <Grid item>
                    <button className={b('button-sign-up')} onClick={onClick}>
                        {isSignIn ? "Let's go!" : 'Register me!'}
                    </button>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}
