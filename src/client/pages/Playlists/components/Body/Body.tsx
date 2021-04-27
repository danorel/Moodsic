import React from 'react';
import * as bem from 'b_';

import { Playlist } from 'RootModels';

import './Body.css';

import { Card as PlaylistCard } from './Card/Card';

const b = bem.with('playlists-body');

function* chunks(arr: Playlist[], factor: number) {
    for (let i = 0; i < arr.length; i += factor)
        yield arr.slice(i, i + factor);
}

type BodyProps = {
    items: Playlist[],
    factor?: number;
}

function Body({ items, factor }: BodyProps) {
    return (
        <React.Fragment>
            {[...chunks(items, factor)]
                .map((chunk: Playlist[]) => (
                    <div className={b('row')}>
                        {chunk.map((playlist: Playlist) => (
                            <div className={b('column')}>
                                <PlaylistCard {...playlist}/>
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
