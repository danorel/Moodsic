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
        item: 'nav-item-logo',
        styles: 'grid-item header__grid-item-logo',
        child: <div className={b('logo')} />
    },
    {
        to: '/',
        exact: true,
        styles: 'grid-item header__grid-item-space ',
        child: <div/>,
    },
    {
        to: '/authentication?switching=true',
        exact: true,
        item: 'nav-item-sign-in',
        styles: 'grid-item header__grid-item-sign-in',
        page: PageName.SignIn,
        child: <div className={b('button-sign-in')}>{PageName.SignIn}</div>,
    },
    {
        to: '/authentication?switching=false',
        exact: true,
        item: 'nav-item-sign-up',
        styles: 'grid-item header__grid-item-sign-up',
        page: PageName.SignUp,
        child: <div className={b('button-sign-up')}>{PageName.SignUp}</div>,
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
                            to={data.to}
                            className={'item' in data ? b(data.item) : ''}
                            onMouseMove={() => preloadPage(data.page).preload()}
                        >
                            {data.child}
                        </NavLink>
                    </div>
                ))}
            </nav>
        </div>
    );
}
