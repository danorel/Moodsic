import React from 'react';
import * as bem from 'b_';

import './Card.css';

import { Playlist } from 'RootModels';

const b = bem.with('playlists-body-card')

type CardProps = Playlist;

function Card(props: CardProps) {
    return (
        <React.Fragment>
            <div className={b('container')}>
                <div className={b('grid-box')}>
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

                    </div>
                    <div className={b('grid-item')}>

                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export { Card };
