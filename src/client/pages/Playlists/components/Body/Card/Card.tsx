import React from 'react';
import * as bem from 'b_';

import './Card.css';

import { Playlist } from 'RootModels';

import {
    CardItem,
    CardItems,
    CardItemsMock
} from './Items';

const b = bem.with('playlists-body-card')

export type CardProps = Playlist & {
    mock: boolean;
    factor: number;
    onClick: (query: string) => void;
};


function Card(props: CardProps) {
    const Items = props.mock
        ? CardItemsMock
        : CardItems

    return (
        <React.Fragment>
            <div className={b('container')}>
                <div className={b('grid-box')}>
                    {Items(props).map((item: CardItem, index: number) => (
                        <div key={index} className={b('grid-item')}>
                            {item.children}
                        </div>
                    ))}
                </div>
            </div>
        </React.Fragment>
    )
}

export { Card };
