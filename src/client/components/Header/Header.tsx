import * as React from 'react';
import { NavLink } from 'react-router-dom';
import loadable from '@loadable/component';
import * as bem from 'b_';

import './Header.css';

enum PageName {
    Home = 'Home',
    SignIn = 'Sign In',
    SignUp = 'Sign Up'
}

const preloadPage = (pageName: string) =>
    loadable(() => import(`../../pages/${pageName}/${pageName}`));

const b = bem.with('header');

const menu = [
    {
        to: '/',
        exact: true,
        styles: 'grid-item-logo header__grid-item',
        child: <div className={b('logo')} />
    },
    {
        to: '/',
        exact: true,
        styles: 'grid-item-space header__grid-item',
        child: <div/>,
    },
    {
        to: '/authentication',
        exact: true,
        styles: 'grid-item-sign-in header__grid-item',
        page: PageName.SignIn,
    },
    {
        to: '/authentication',
        exact: true,
        styles: 'grid-item-sign-up header__grid-item',
        page: PageName.SignUp,
    },
];

export function Header() {
    return (
        <div className={b('')}>
            <nav className={b('gridbox')}>
                {menu.map(data => (
                    <div className={b(data.styles)}>
                        <NavLink
                            key={data.to}
                            exact={data.exact}
                            activeClassName="header__nav-item_active"
                            to={data.to}
                            className={b('nav-item')}
                            onMouseMove={() => preloadPage(data.page).preload()}
                        >
                            {'page' in data
                                ? data.page
                                : data.child}
                        </NavLink>
                    </div>
                ))}
            </nav>
        </div>
    );
}
