import React from 'react';
import * as bem from 'b_';

import './Bar.css';

import { Sort } from './Sort/Sort';
import { Search } from './Search/Search';

const b = bem.with('playlists-bar');

type BarProps = {
    value: string;
    active: boolean;
    disabled: boolean;
    onClick: (active: boolean) => void;
    onChange: (modified: string) => void;
};

function Bar({ value, active, disabled, onClick, onChange }: BarProps) {
    return (
        <React.Fragment>
            <div className={b('grid-box')}>
                <div className={b('grid-item')}>
                    <Sort disabled={disabled} active={active} onClick={onClick} />
                </div>
                <div className={b('grid-item')}>
                    <Search disabled={disabled} value={value} onChange={onChange} />
                </div>
            </div>
        </React.Fragment>
    );
}

export { Bar };
