import React from 'react';
import * as bem from 'b_';

import './Card.css';

import { Playlist, PlaylistMood } from 'RootModels';

import { chunker } from '../../utils/Chunk';
import { collector } from '../../utils/Collector';

const b = bem.with('playlists-body-card')

type CardTag = {
    title: string;
    onClick: (query: string) => void;
};

function Tag({ title, onClick }: CardTag) {
    return (
        <React.Fragment>
            <button className={b('tag-button')} onClick={() => onClick(title)}>
                <span className={b('tag-span')}>
                    {title}
                </span>
            </button>
        </React.Fragment>
    )
}

type CardProps = Playlist & {
    factor: number;
    onClick: (query: string) => void;
};


function Card(props: CardProps) {
    return (
        <React.Fragment>
            <div className={b('container')}>
                <div className={b('grid-box')}>
                    <div className={b('grid-item')}/>
                    <div className={b('grid-item')}>
                        <span className={b('span-title')}>
                            {props.title}
                        </span>
                    </div>
                    <div className={b('grid-item')}>
                        <span className={b('span-aim')}>
                            {props.aim.title}
                        </span>
                    </div>
                    <div className={b('grid-item')}>
                        <div className={b('tag-flex-box')}>
                            {collector<PlaylistMood>(chunker<PlaylistMood>(props.moods, props.factor), props.factor)
                                .map(chunk => (
                                    <div className={b('tag-row')}>
                                        {chunk.map(tagProps => (
                                            <div className={b('tag-column')}>
                                                {!tagProps
                                                    ? null
                                                    : <Tag {...tagProps} onClick={props.onClick}/>}
                                            </div>
                                        ))}
                                    </div>
                                ))}
                        </div>
                    </div>
                    <div className={b('grid-item')}>
                        <span className={b('span-date')}>
                            {props.date.toDateString()}
                        </span>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export { Card };
