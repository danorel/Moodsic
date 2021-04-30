import React from 'react';
import * as bem from 'b_';

import { Playlist } from 'RootModels';

import { chunker } from '../utils/Chunk';
import { collector } from '../utils/Collector';

import './Body.css';

import { Card as ItemCard } from './Card/Card';

const b = bem.with('playlists-body');

type BodyProps<T> = {
    items: T[];
    factor?: number;
    onClick: (query: string) => void;
    mock?: boolean;
};

function Body<T extends Playlist>({ items, factor, onClick, mock }: BodyProps<T>) {
    return (
        <React.Fragment>
            {collector(chunker(mock ? new Array(6).fill(null).map((_, i: number) => ({ id: String(i) } as Playlist)) : items, factor), factor).map(
                (chunk: T[], outer: number) => (
                    <div key={outer} className={b('row')}>
                        {chunk.map((item: T, inner: number) => (
                            <div key={inner} className={b('column')}>
                                {!item ? null : <ItemCard {...item} mock={mock} factor={2} onClick={onClick} />}
                            </div>
                        ))}
                    </div>
                )
            )}
        </React.Fragment>
    );
}

Body.defaultProps = {
    mock: true,
    factor: 3,
};

export { Body };
