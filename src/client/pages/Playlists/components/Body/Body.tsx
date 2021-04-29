import React from 'react';
import * as bem from 'b_';

import { Playlist } from 'RootModels';

import { chunker } from '../utils/Chunk';
import { collector } from '../utils/Collector';

import './Body.css';

import { Card as PlaylistCard } from './Card/Card';

const b = bem.with('playlists-body');

type BodyProps = {
    items: Playlist[],
    factor?: number;
}

function Body({ items, factor }: BodyProps) {
    return (
        <React.Fragment>
            {collector<Playlist>(chunker<Playlist>(items, factor), factor)
                .map((chunk: Playlist[]) => (
                    <div className={b('row')}>
                        {chunk.map((playlist: Playlist) => (
                            <div className={b('column')}>
                                {!playlist
                                    ? null
                                    : <PlaylistCard {...playlist} factor={2}/>}
                            </div>
                        ))}
                    </div>
                )
            )}
        </React.Fragment>
    )
}

Body.defaultProps = {
    factor: 3
}

export { Body };
