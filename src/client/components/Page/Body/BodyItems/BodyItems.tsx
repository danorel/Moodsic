import React from 'react';
import * as bem from 'b_';

import './BodyItems.css';

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
    active: boolean;
}

function Item({ title, active }: ItemProps) {
    return (
        <React.Fragment>
            <div className={b('item-container', { active })}>
                <span className={b('item-span')}>{title}</span>
            </div>
        </React.Fragment>
    );
}

type BodyItemsProps = {
    title: string;
    items: (PlaygroundMood | PlaygroundAim)[],
    options: (PlaygroundMood | PlaygroundAim)[],
    onClick: (item: PlaygroundMood | PlaygroundAim) => void;
}

function BodyItems({ title, items, options, onClick }: BodyItemsProps) {
    return (
        <React.Fragment>
            <div className={b('container-items')}>
                <div className={b('grid-box')}>
                    <div className={b('grid-item')}>
                        <Description title={title} />
                    </div>
                    <div className={b('grid-item')}>
                        <div className={b('flex-box')}>
                            {items.map(itemProps => (
                                <div onClick={() => onClick({...itemProps})} className={b('flex-item')}>
                                    <Item {...itemProps} active={options.map(option => option.id).includes(itemProps.id)} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export { BodyItems };
