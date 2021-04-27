import React from 'react';
import * as bem from 'b_';

import './BodyName.css';

const b = bem.with('page-body');

type DescriptionProps = {
    title: string;
    description: string;
}

function Description({ title, description }: DescriptionProps) {
    return (
        <React.Fragment>
            <div className={b('title')}>
                {title}
            </div>
            <div className={b('description')}>
                {description}
            </div>
        </React.Fragment>
    );
}

type ItemProps = {
    value: string;
    onChange: (title: string) => void;
}

function Input({ value, onChange }: ItemProps) {
    return (
        <React.Fragment>
            <div className={b('input-container')}>
                <input
                    value={value}
                    className={b('input-field')}
                    onChange={evt => onChange(evt.target.value)}/>
            </div>
        </React.Fragment>
    );
}

type BodyNameProps = {
    title: string;
    value: string;
    description: string;
    onChange: (title: string) => void;
}

function BodyName({ value, title, description, onChange }: BodyNameProps) {
    return (
        <React.Fragment>
            <div className={b('container')}>
                <div className={b('grid-box')}>
                    <div className={b('grid-item')}>
                        <Description title={title} description={description}/>
                    </div>
                    <div className={b('grid-item')}>
                        <div className={b('flex-box')}>
                            <div className={b('flex-item')}>
                                <Input value={value} onChange={onChange} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export { BodyName };
