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
                <Grid
                    item
                    xs={12} sm={12} md={12} lg={12} xl={12}
                    className={b("grid-item")}>
                    <input className={b('input')} value={value} placeholder={'Pass e-mail...'} onChange={e => onChange(e.target.value)} />
                </Grid>
                <Grid item
                      xs={12} sm={12} md={12} lg={12} xl={12}
                      className={b("grid-item")}>
                    <button className={b('button')} onClick={onSubmit}>
                        {switching ? "Let's go!" : 'Register me!'}
                    </button>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}
