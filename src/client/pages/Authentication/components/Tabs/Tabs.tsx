import React from 'react';
import * as bem from 'b_';

import './Tabs.css';

import { AuthenticationSwitching } from 'RootModels';

const b = bem.with('authentication-tabs');

type TabDividerProps = {
    active: boolean;
}

function TabDivider({ active }: TabDividerProps) {
    return active ? <div className={b('tab-divider')} /> : null;
}

/*
 * Tab component meant for holding log-in or log-out.
 */

type TabProps = {
    name: string;
    action: boolean;
    active: AuthenticationSwitching;
    className: string;
    onChange: (switching: AuthenticationSwitching) => void;
};

function TabComponent({ name, className, active, action, onChange }: TabProps) {
    return (
        <React.Fragment>
            <div className={className} onClick={() => onChange(action)}>
                {name}
            </div>
            <TabDivider active={active} />
        </React.Fragment>
    );
}

interface TabsProps {
    switching: AuthenticationSwitching;
    onChange: (switching: AuthenticationSwitching) => void;
    value?: string;
}

export function TabsComponent(props: TabsProps) {
    return (
        <React.Fragment>
            <div className={b('tab')}>
                <div className={b('flex-box')}>
                    <div className={b('flex-item')}>
                        <TabComponent
                            name={'Sign in'}
                            action={true}
                            className={b('tab-item')}
                            active={props.switching}
                            onChange={props.onChange} />
                    </div>
                    <div className={b('flex-item')}>
                        <TabComponent
                            name={'Sign up'}
                            action={false}
                            active={!props.switching}
                            className={b('tab-item')}
                            onChange={props.onChange} />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
