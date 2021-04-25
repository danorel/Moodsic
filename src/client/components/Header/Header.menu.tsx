import * as React from 'react';
import * as bem from 'b_';

import './Header.css';

enum PageName {
    Home = 'Home',
    SignIn = 'Sign In',
    SignUp = 'Sign Up'
}

enum PagePath {
    Home = 'Home',
    SignIn = 'Authentication',
    SignUp = 'Authentication'
}

const b = bem.with('header');

export type HeaderMenu = {
    complex: boolean;
    child: React.ReactNode;
    to?: string | undefined;
    query?: string | undefined;
    exact?: boolean | undefined;
    name?: string | undefined;
    path?: string | undefined;
    styles?: string | undefined;
};

export const HeaderAuthorizedMenu: HeaderMenu[] = [
    {
        complex: false,
        child: <div/>
    },
    {
        complex: true,
        child: <span/>,
        to: '/',
        exact: true,
        name: PageName.Home,
        path: PagePath.Home,
        styles: b('nav-item-link', { logo: true }),
    },
    {
        complex: false,
        child: <div/>,
    },
    {
        complex: true,
        child: <span>{PageName.SignIn}</span>,
        to: '/authentication',
        query: 'switching=true',
        exact: true,
        name: PageName.SignIn,
        path: PagePath.SignIn,
        styles: b('nav-item-link', { button: true }),
    },
    {
        complex: true,
        child: <span>{PageName.SignUp}</span>,
        to: '/authentication',
        query: 'switching=false',
        exact: true,
        name: PageName.SignUp,
        path: PagePath.SignUp,
        styles: b('nav-item-link', { button: true, active: true }),
    },
    {
        complex: false,
        child: <div/>
    },
];
