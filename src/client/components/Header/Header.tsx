import * as React from 'react';
import { NavLink } from 'react-router-dom';
import loadable from '@loadable/component';
import * as bem from 'b_';

import './Header.css';

enum PageName {
    Home = 'Home',
    Space = 'Home',
    SignIn = 'Sign In',
    SignUp = 'Sign Up'
}

enum PagePath {
    Home = 'Home',
    SignIn = 'Authentication',
    SignUp = 'Authentication'
}

const preloadPage = (pageName: string) =>
    loadable(() => import(`../../pages/${pageName}/${pageName}`));

const b = bem.with('header');

const menu = [
    {
        to: '/',
        exact: true,
        item: 'nav-item-logo',
        styles: 'grid-item header__grid-item-logo',
        name: PageName.Home,
        path: PagePath.Home,
        child: <div className={b('logo')} />
    },
    {
        to: '/',
        exact: true,
        styles: 'grid-item header__grid-item-space',
        name: PageName.Space,
        child: <div/>,
    },
    {
        to: '/authentication',
        query: 'switching=true',
        exact: true,
        item: 'nav-item-sign-in',
        styles: 'grid-item header__grid-item-sign-in',
        name: PageName.SignIn,
        path: PagePath.SignIn,
        child: <div className={b('button-sign-in')}>{PageName.SignIn}</div>,
    },
    {
        to: '/authentication',
        query: 'switching=false',
        exact: true,
        item: 'nav-item-sign-up',
        styles: 'grid-item header__grid-item-sign-up',
        name: PageName.SignUp,
        path: PagePath.SignUp,
        child: <div className={b('button-sign-up')}>{PageName.SignUp}</div>,
    },
];

export function Header() {
    return (
        <div className={b('')}>
            <nav className={b('gridbox')}>
                {menu.map((data, id: number) => (
                    <div key={id} className={b(data.styles)}>
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
    );
}
