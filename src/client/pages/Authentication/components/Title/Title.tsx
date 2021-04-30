import React from 'react';
import * as bem from 'b_';

import './Title.css';

const b = bem.with('authentication-title');

type TitleProps = {
    switching: boolean;
};

export function TitleComponent({ switching }: TitleProps) {
    return (
        <React.Fragment>
            <div className={b('container')}>
                <span className={b('span')}>{switching ? 'Glad to see you again!' : 'Hello, musiclover :)'}</span>
            </div>
        </React.Fragment>
    );
}
