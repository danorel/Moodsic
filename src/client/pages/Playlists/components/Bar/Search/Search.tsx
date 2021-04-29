import React from 'react';
import * as bem from 'b_';

import './Search.css';

const b = bem.with('playlists-bar-search');

type SearchProps = {
    value: string;
    disabled: boolean;
    onChange: (modified: string) => void;
}

function Search({ value, disabled, onChange }: SearchProps) {
    return (
        <React.Fragment>
            <input
                disabled={disabled}
                type="text"
                value={value}
                placeholder={"Search for..."}
                className={b('input')}
                onChange={(evt) => onChange(evt.target.value)}/>
        </React.Fragment>
    )
}

export { Search };
