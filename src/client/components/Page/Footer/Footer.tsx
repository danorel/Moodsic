import React from 'react';
import * as bem from 'b_';

import './Footer.css';

const b = bem.with('page-footer');

type ButtonProps = {
    title: string;
    onClick: () => void;
    disabled?: boolean;
};

function Button({ title, disabled, onClick }: ButtonProps) {
    return (
        <React.Fragment>
            <button className={b('button', { disabled })} onClick={onClick}>
                <div className={b('span', { disabled })}>{title}</div>
            </button>
        </React.Fragment>
    );
}

Button.defaultProps = {
    title: 'Continue',
    disabled: false,
};

type FooterProps = {
    title: string;
    disabled?: boolean;
    onClick: () => void;
};

function Footer({ title, disabled, onClick }: FooterProps) {
    return (
        <React.Fragment>
            <div className={b('container')}>
                <Button disabled={disabled} title={title} onClick={onClick} />
            </div>
        </React.Fragment>
    );
}

Footer.defaultProps = {
    title: 'Continue',
    disabled: false,
};

export { Footer };
