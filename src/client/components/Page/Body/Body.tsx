import React from 'react';
import * as bem from 'b_';

import './Body.css';

import { PlaygroundItem } from 'RootModels';

const b = bem.with('page-body');

type DescriptionProps = {
    title: string;
}

function Description({ title }: DescriptionProps) {
    return (
        <React.Fragment>
            <div className={b('description')}>
                {title}
            </div>
        </React.Fragment>
    );
}

type ItemProps = {
    emoji: string;
    title: string;
}

function Item({ title, emoji }: ItemProps) {
    return (
        <React.Fragment>
            <div className={b('item')}>
                {title}{emoji}
            </div>
        </React.Fragment>
    );
}

type BodyProps = {
    items: PlaygroundItem[]
}

function Body({ items }: BodyProps) {
    return (
        <React.Fragment>
            <div className={b('container')}>
                <div className={b('flex-box')}>
                    {items.map(itemProps => (
                        <div className={b('flex-item')}>
                            <Item {...itemProps}/>
                        </div>
                    ))}
                </div>
            </div>
        </React.Fragment>
    );
}

export { Body };
