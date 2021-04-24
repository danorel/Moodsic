import * as React from 'react';
import * as bem from 'b_';

import './ContainerVerticalAligned.css';

type Props = {
    children: React.ReactChild;
    type?:
        | 'default';
    className?: string;
};

const b = bem.with('container-vertical-aligned');

function ContainerVertical({ type, className, children }: Props) {
    const classes = className ? `${b({ type })} ${className}` : b({ type });

    return <div className={classes}>{children}</div>;
}

ContainerVertical.defaultProps = {
    type: 'default',
    className: null,
};

export { ContainerVertical };
