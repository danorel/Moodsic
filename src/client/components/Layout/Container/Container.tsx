import * as React from 'react';
import * as bem from 'b_';

import './Container.css';

type Props = {
    children: React.ReactChild;
    type?:
        | 'default'
        | 'black';
    className?: string;
};

const b = bem.with('container');

function Container({ type, className, children }: Props) {
    const classes = className ? `${b({ type })} ${className}` : b({ type });

    return <div className={classes}>{children}</div>;
}

Container.defaultProps = {
    type: 'default',
    className: null,
};

export { Container };
