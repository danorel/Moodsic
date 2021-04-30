import React from 'react';
import * as bem from 'b_';

import './Form.css';

import { AuthenticationEmail, AuthenticationSwitching } from 'RootModels';

const b = bem.with('authentication-form');

interface FormProps {
    value: string;
    switching: AuthenticationSwitching;
    onSubmit: () => void;
    onChange: (value: AuthenticationEmail) => void;
}

export function FormComponent({ value, switching, onSubmit, onChange }: FormProps) {
    return (
        <React.Fragment>
            <div className={b('flex-box')}>
                <div className={b('flex-item')}>
                    <input className={b('input')} value={value} placeholder={'Pass e-mail...'} onChange={e => onChange(e.target.value)} />
                </div>
                <div className={b('flex-item')}>
                    <button className={b('button')} onClick={onSubmit}>
                        {switching ? "Let's go!" : 'Register me!'}
                    </button>
                </div>
            </div>
        </React.Fragment>
    );
}
