import React from 'react';
import * as bem from 'b_';

import './BodyName.css';

const b = bem.with('body-name');

type DescriptionProps = {
    title: string;
    subtitle: string;
}

function Description({ title, subtitle }: DescriptionProps) {
    return (
        <React.Fragment>
            <div className={b('description-flex-box')}>
                <div className={b('description-flex-item')}>
                    <div className={b('description-title')}>
                        {title}
                    </div>
                </div>
                <div className={b('description-flex-item')}>
                    <div className={b('description-subtitle')}>
                        {subtitle}
                    </div>
                </div>
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
                    placeholder={"Best songs"}
                    className={b('input-field')}
                    onChange={evt => onChange(evt.target.value)}/>
            </div>
        </React.Fragment>
    );
}

type BodyNameProps = {
    value: string;
    title: string;
    subtitle: string;
    onChange: (title: string) => void;
}

function BodyName({ value, title, subtitle, onChange }: BodyNameProps) {
    return (
        <React.Fragment>
            <div className={b('container')}>
                <div className={b('grid-box')}>
                    <div className={b('grid-item')}>
                        <Description title={title} subtitle={subtitle}/>
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
