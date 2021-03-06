import * as React from 'react';
import { NavLink } from 'react-router-dom';
import * as bem from 'b_';
import loadable from '@loadable/component';

import './Navbar.css';

import { HeaderAuthorizedMenu, HeaderNonAuthorizedMenu } from './Navbar.menu';

const preloadPage = (pageName: string) => loadable(() => import(`../../pages/${pageName}/${pageName}`));

const b = bem.with('navbar');

type HeaderProps = {
    type?: 'authorized' | 'non-authorized';
};

function Navbar({ type }: HeaderProps) {
    const Menu = type === 'non-authorized' ? HeaderNonAuthorizedMenu : HeaderAuthorizedMenu;

    return (
        <div className={b('container')}>
            <div className={b('flex-box')}>
                <div className={b('flex-item')}>
                    <nav className={b('grid-box', { type })}>
                        {Menu.map((data, id: number) => (
                            <div key={id} className={b('grid-item')}>
                                {data.complex ? (
                                    <NavLink
                                        key={id}
                                        exact={data.exact}
                                        to={data.query ? `${data.to}?${data.query}` : data.to}
                                        activeClassName={null}
                                        className={data.styles}
                                        onMouseMove={() => preloadPage(data.path).preload()}
                                    >
                                        {data.child}
                                    </NavLink>
                                ) : (
                                    data.child
                                )}
                            </div>
                        ))}
                    </nav>
                </div>
            </div>
        </div>
    );
}

Navbar.defaultProps = {
    type: 'authorized',
};

export { Navbar };
