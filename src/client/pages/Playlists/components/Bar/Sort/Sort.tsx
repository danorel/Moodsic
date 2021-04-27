import React from 'react';
import * as bem from 'b_';

import './Sort.css';

const b = bem.with('playlists-bar-sort');

type SortProps = {
    active: boolean;
    onClick: (active: boolean) => void;
}

function Sort({ active, onClick }: SortProps) {
    return (
        <React.Fragment>
            <button className={b('button', { active })} onClick={() => onClick(!active)}>
                <span className={b('span')}>
                    {active
                        ? "Sort by alphabet"
                        : "Sorted by alphabet"}
                </span>
            </button>
        </React.Fragment>
    )
}

Sort.defaultProps = {
    type: 'date'
};

export { Sort };
