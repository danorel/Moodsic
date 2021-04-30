import React from 'react';
import * as bem from 'b_';

import './Card.css';

import { Rect } from '../../../../../components';

const b = bem.with('playlists-body-card');

type CardTag = {
    title: string;
    onClick: (query: string) => void;
};

export function Tag({ title, onClick }: CardTag) {
    return (
        <React.Fragment>
            <button className={b('tag-button')} onClick={() => onClick(title)}>
                <span className={b('tag-span')}>{title}</span>
            </button>
        </React.Fragment>
    );
}

export function TagMock() {
    return (
        <React.Fragment>
            <button className={b('tag-button')}>
                <span className={b('tag-span')} />
            </button>
        </React.Fragment>
    );
}
