import React from 'react';
import * as bem from 'b_';

import { Playlist } from 'RootModels';

import './Body.css';

import { Card as PlaylistCard } from './Card/Card';

const b = bem.with('playlists-body');

function chunks(arr: Playlist[], factor: number): Playlist[][] {
    const chunksArr: Playlist[][] = [];
    for (let i = 0; i < arr.length; i += factor)
        chunksArr.push(arr.slice(i, i + factor));
    return chunksArr;
}

function collect(arr: Playlist[][], factor: number): ((Playlist | null)[])[] {
    if (!arr.length)
        return [];

    const last = arr.length - 1;

    return [
        ...[...arr.slice(0, last)],
        [
            ...arr[last],
            ...new Array(factor - arr[last].length)
                .map(_ => null)
        ]
    ];
}

type BodyProps = {
    items: Playlist[],
    factor?: number;
}

function Body({ items, factor }: BodyProps) {
    return (
        <React.Fragment>
            {collect(chunks(items, factor), factor)
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
