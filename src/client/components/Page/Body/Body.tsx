import React from 'react';
import * as bem from 'b_';

import './Body.css';

import { PlaygroundAim, PlaygroundMood } from 'RootModels';

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
    title: string;
}

function Item({ title }: ItemProps) {
    return (
        <React.Fragment>
            <div className={b('item-container')}>
                <span className={b('item-span')}>{title}</span>
            </div>
        </React.Fragment>
    );
}

type BodyProps = {
    items: (PlaygroundMood | PlaygroundAim)[]
}

function Body({ items }: BodyProps) {
    return (
        <React.Fragment>
            <div className={b('container')}>
                <div className={b('grid-box')}>
                    <div className={b('grid-item')}>
                        <Description title="Choose your mood" />
                    </div>
                    <div className={b('grid-item')}>
                        <div className={b('flex-box')}>
                            {items.map(itemProps => (
                                <div className={b('flex-item')}>
                                    <Item {...itemProps}/>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export { Body };
