import * as React from 'react';
import { NavLink } from 'react-router-dom';
import * as bem from 'b_';
import loadable from '@loadable/component';

import './Header.css';

import {
    HeaderAuthorizedMenu,
    // HeaderNonAuthorizedMenu
} from './Header.menu';

const preloadPage = (pageName: string) =>
    loadable(() => import(`../../pages/${pageName}/${pageName}`));

const b = bem.with('header');

type HeaderProps = {
    type?:
        | 'authorized'
        | 'non-authorized';
};


function Header({ type }: HeaderProps) {
    return (
        <div className={b('')}>
            <div className={b('flex-box')}>
                <div className={b('flex-item')}>
                    <nav className={b('grid-box', { type })}>
                        {HeaderAuthorizedMenu.map((data, id: number) => (
                            <div key={id} className={b(data.styles, { type })}>
                                <NavLink
                                    key={id}
                                    exact={data.exact}
                                    to={data.query
                                        ? `${data.to}?${data.query}`
                                        : data.to}
                                    activeClassName={null}
                                    className={'item' in data ? b(data.item) : null}
                                    onMouseMove={() => preloadPage(data.path).preload()}
                                >
                                    {data.child}
                                </NavLink>
                            </div>
                        ))}
                    </nav>
                </div>
            </div>
        </div>
    );
}

Header.defaultProps = {
    type: 'non-authorized',
};

export { Header };
