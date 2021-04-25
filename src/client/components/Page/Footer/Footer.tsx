import React from 'react';
import * as bem from 'b_';

import './Footer.css';

const b = bem.with('page-footer');

type ButtonProps = {
    title: string;
};

function Button({ title }: ButtonProps) {
    return (
        <React.Fragment>
            <button className={b('button')}>
                <div className={b('span')}>{title}</div>
            </button>
        </React.Fragment>
    );
}

type FooterProps = {
    title: string;
};

function Footer({ title }: FooterProps) {
    return (
        <React.Fragment>
            <div className={b('container')}>
                <Button title={title} />
            </div>
        </React.Fragment>
    );
}

export { Footer };
