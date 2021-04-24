import React from 'react';
import * as bem from 'b_';

import { Grid } from '@material-ui/core';

import './Form.css';

import { AuthenticationEmail, AuthenticationSwitching } from 'RootModels';

const b = bem.with('authentication-page-form');

interface FormViewProps {
    value: string;
    switching: AuthenticationSwitching;
    onSubmit: () => void;
    onChange: (value: AuthenticationEmail) => void;
}

export function FormComponent({ value, switching, onSubmit, onChange }: FormViewProps) {
    return (
        <React.Fragment>
            <Grid container direction="column" justify="center" alignItems="center" spacing={2}>
                <Grid item>
                    <input className={b('input')} value={value} placeholder={'Pass e-mail...'} onChange={e => onChange(e.target.value)} />
                </Grid>
                <Grid item>
                    <button className={b('button-sign-up')} onClick={onSubmit}>
                        {switching ? "Let's go!" : 'Register me!'}
                    </button>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}
