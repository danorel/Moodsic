import React from 'react';
import * as bem from 'b_';

import './Footer.css';

const b = bem.with('page-footer');

type ButtonProps = {
    title: string;
    disabled?: boolean;
};

function Button({ title, disabled }: ButtonProps) {
    return (
        <React.Fragment>
            <button className={b('button', { disabled })}>
                <div className={b('span', { disabled })}>{title}</div>
            </button>
        </React.Fragment>
    );
}

Button.defaultProps = {
    title: "Continue",
    disabled: false
}

type FooterProps = {
    title: string;
    disabled?: boolean
};

function Footer({ title, disabled }: FooterProps) {
    return (
        <React.Fragment>
            <div className={b('container')}>
                <Button disabled={disabled} title={title} />
            </div>
        </React.Fragment>
    );
}

Footer.defaultProps = {
    title: "Continue",
    disabled: false
}

export { Footer };
