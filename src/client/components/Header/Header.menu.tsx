import * as React from 'react';
import * as bem from 'b_';

import './Header.css';

import { HeaderMenu } from 'RootComponents';

const b = bem.with('header');

/**
 * Components, meant for building the header menu for authorized users.
 */

enum PageAuthorizedName {
    Home = 'Home',
    Playlists = 'My Playlists',
    Playground = 'Generate more',
    SignOut = 'Sign out'
}

enum PageAuthorizedPath {
    Home = 'Home',
    Playlists = 'Playlists',
    Playground = 'Playground',
    SignOut = 'SignOut'
}

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
        name: PageAuthorizedName.Home,
        path: PageAuthorizedPath.Home,
        styles: b('nav-item-link', { logo: true }),
    },
    {
        complex: false,
        child: <div/>,
    },
    {
        complex: true,
        child: <span>{PageAuthorizedName.Playlists}</span>,
        to: '/musiclover/1/my-playlists/',
        exact: true,
        name: PageAuthorizedName.Playlists,
        path: PageAuthorizedPath.Playlists,
        styles: b('nav-item-link', { button: true }),
    },
    {
        complex: true,
        child: <span>{PageAuthorizedName.Playground}</span>,
        to: '/musiclover/1/playground/',
        exact: true,
        name: PageAuthorizedName.Playground,
        path: PageAuthorizedPath.Playground,
        styles: b('nav-item-link', { button: true, active: false }),
    },
    {
        complex: true,
        child: <span>{PageAuthorizedName.SignOut}</span>,
        to: '/',
        exact: true,
        name: PageAuthorizedName.SignOut,
        path: PageAuthorizedPath.SignOut,
        styles: b('nav-item-link', { button: true, active: true }),
    },
    {
        complex: false,
        child: <div/>
    },
];

/**
 * Components, meant for building the header menu for non-authorized users.
 */

enum PageNonAuthorizedName {
    Home = 'Home',
    SignIn = 'Sign In',
    SignUp = 'Sign Up'
}

enum PageNonAuthorizedPath {
    Home = 'Home',
    SignIn = 'Authentication',
    SignUp = 'Authentication'
}

export const HeaderNonAuthorizedMenu: HeaderMenu[] = [
    {
        complex: false,
        child: <div/>
    },
    {
        complex: true,
        child: <span/>,
        to: '/',
        exact: true,
        name: PageNonAuthorizedName.Home,
        path: PageNonAuthorizedPath.Home,
        styles: b('nav-item-link', { logo: true }),
    },
    {
        complex: false,
        child: <div/>,
    },
    {
        complex: true,
        child: <span>{PageNonAuthorizedName.SignIn}</span>,
        to: '/authentication',
        query: 'switching=true',
        exact: true,
        name: PageNonAuthorizedName.SignIn,
        path: PageNonAuthorizedPath.SignIn,
        styles: b('nav-item-link', { button: true }),
    },
    {
        complex: true,
        child: <span>{PageNonAuthorizedName.SignUp}</span>,
        to: '/authentication',
        query: 'switching=false',
        exact: true,
        name: PageNonAuthorizedName.SignUp,
        path: PageNonAuthorizedPath.SignUp,
        styles: b('nav-item-link', { button: true, active: true }),
    },
    {
        complex: false,
        child: <div/>
    },
];
