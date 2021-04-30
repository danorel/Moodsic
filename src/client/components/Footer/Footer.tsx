import * as React from 'react';
import * as bem from 'b_';

import './Footer.css';

const b = bem.with('footer');

type FooterProps = {
    display: boolean;
};

export function Footer({ display }: FooterProps) {
    const currentYear = new Date().getFullYear();

    return (
        <div className={b('container', { display })}>
            <p className={b('p')}>{currentYear},&nbsp;Moodsic, Emotional-based music playlist generation&nbsp;</p>
        </div>
    );
}

Footer.defaultProps = {
    display: true,
};
