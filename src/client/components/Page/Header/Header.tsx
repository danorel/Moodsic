import React from 'react';
import * as bem from 'b_';

import './Header.css';

const b = bem.with('page-header');

function Divider() {
    return (
        <React.Fragment>
            <div className={b('divider')} />
        </React.Fragment>
    );
}

type DescriptionProps = {
    title: string;
};

function Description({ title }: DescriptionProps) {
    return (
        <React.Fragment>
            <div className={b('span')}>{title}</div>
        </React.Fragment>
    );
}

type HeaderProps = {
    title: string;
};

function Header({ title }: HeaderProps) {
    return (
        <React.Fragment>
            <div className={b('flex-box')}>
                <div className={b('flex-item')}>
                    <Description title={title} />
                </div>
                <div className={b('flex-item')}>
                    <Divider />
                </div>
            </div>
        </React.Fragment>
    );
}

export { Header };
