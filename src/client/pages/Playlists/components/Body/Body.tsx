import React from 'react';
import * as bem from 'b_';

import { Playlist } from 'RootModels';

import { chunker } from '../utils/Chunk';
import { collector } from '../utils/Collector';

import './Body.css';

import { Card as PlaylistCard } from './Card/Card';

const b = bem.with('playlists-body');

type BodyProps<T> = {
    items: T[],
    factor?: number;
    onClick: (query: string) => void;
    mock?: boolean;
    mockLength?: number;
}

function Body<T extends Playlist>({ items, factor, onClick, mock, mockLength }: BodyProps<T>) {
    if (mock)
        items = new Array(mockLength).map(e => null);

    return (
        <React.Fragment>
            {collector<T>(chunker<T>(items, factor), factor)
                .map((chunk: T[]) => (
                    <div className={b('row')}>
                        {chunk.map((playlist: T) => (
                            <div className={b('column')}>
                                {!playlist
                                    ? null
                                    : <PlaylistCard {...playlist} mock={mock} factor={2} onClick={onClick}/>}
                            </div>
                        ))}
                    </div>
                )
            )}
        </React.Fragment>
    )
}

Body.defaultProps = {
    mock: false,
    factor: 3
}

export { Body };
