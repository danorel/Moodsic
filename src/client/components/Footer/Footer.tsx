import * as React from 'react';
import * as bem from 'b_';

import './Footer.css';

const b = bem.with('footer');

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <div className={b()}>
            <p className={b('div')}>{currentYear},&nbsp;Moodsic, Emotional-based music playlist generation&nbsp;</p>
        </div>
    );
}
