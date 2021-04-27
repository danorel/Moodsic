import React from 'react';
import * as bem from 'b_';

import './Search.css';

const b = bem.with('playlists-bar-search');

type SearchProps = {
    value: string;
    onChange: (modified: string) => void;
}

function Search({ value, onChange }: SearchProps) {
    return (
        <React.Fragment>
            <input
                type="text"
                value={value}
                placeholder={"Search for..."}
                className={b('input')}
                onChange={(evt) => onChange(evt.target.value)}/>
        </React.Fragment>
    )
}

export { Search };
