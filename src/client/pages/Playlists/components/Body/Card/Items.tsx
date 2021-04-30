import React from 'react';
import * as bem from 'b_';

import './Card.css';

import { PlaylistMood } from 'RootModels';

import { Rect } from '../../../../../components';

import { chunker } from '../../utils/Chunk';
import { collector } from '../../utils/Collector';

import { Tag, TagMock } from './Tag';
import { CardProps } from './Card';

const b = bem.with('playlists-body-card');

export type CardItem = {
    children: React.ReactNode;
};

export const CardItems = (props: CardProps): CardItem[] => [
    {
        children: <div />,
    },
    {
        children: <span className={b('span-title')}>{props.title}</span>,
    },
    {
        children: <span className={b('span-aim')}>{props.aim.title}</span>,
    },
    {
        children: (
            <div className={b('tag-flex-box')}>
                {collector<PlaylistMood>(chunker<PlaylistMood>(props.moods, props.factor), props.factor).map(chunk => (
                    <div className={b('tag-row')}>
                        {chunk.map(tagProps => (
                            <div className={b('tag-column')}>{!tagProps ? null : <Tag {...tagProps} onClick={props.onClick} />}</div>
                        ))}
                    </div>
                ))}
            </div>
        ),
    },
    {
        children: <span className={b('span-date')}>{props.date.toDateString()}</span>,
    },
];

export const CardItemsMock = (props: CardProps): CardItem[] => [
    {
        children: <div />,
    },
    {
        children: (
            <div style={{ display: 'flex', justifyContent: 'center', width: '100%', padding: '15px 0px' }}>
                <Rect type="black" height="34px" width="80%" />
            </div>
        ),
    },
    {
        children: (
            <div style={{ display: 'flex', justifyContent: 'center', width: '100%', padding: '15px 0px' }}>
                <Rect type="black" height="14px" width="80%" />
            </div>
        ),
    },
    {
        children: (
            <div className={b('tag-flex-box')}>
                {collector(chunker(new Array(6).fill(null), props.factor), props.factor).map(chunk => (
                    <div className={b('tag-row')}>
                        {chunk.map(tagProps => (
                            <div className={b('tag-column')}>
                                <TagMock />
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        ),
    },
    {
        children: (
            <div style={{ display: 'flex', justifyContent: 'center', width: '100%', padding: '25px 0px' }}>
                <Rect height="34px" width="80%" />
            </div>
        ),
    },
];
