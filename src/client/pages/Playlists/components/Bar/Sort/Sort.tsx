import React from 'react';
import * as bem from 'b_';

import './Sort.css';

const b = bem.with('playlists-bar-sort');

type SortProps = {
    active: boolean;
    disabled: boolean;
    onClick: (active: boolean) => void;
};

function Sort({ active, disabled, onClick }: SortProps) {
    return (
        <React.Fragment>
            <button className={b('button', { active, disabled })} onClick={() => onClick(!active)}>
                <span className={b('span')}>{active ? 'Sorted by alphabet' : 'Sort by alphabet'}</span>
            </button>
        </React.Fragment>
    );
}

Sort.defaultProps = {
    type: 'date',
};

export { Sort };
