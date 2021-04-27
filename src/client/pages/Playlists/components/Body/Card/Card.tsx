import React from 'react';
import * as bem from 'b_';

import './Card.css';

import { Playlist } from 'RootModels';

const b = bem.with('playlists-body-card')

type CardProps = Playlist;

function Card(props: CardProps) {
    return (
        <React.Fragment>

        </React.Fragment>
    )
}

export { Card };
