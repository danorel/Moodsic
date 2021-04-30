import * as React from 'react';
import * as bem from 'b_';
import { Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import routes from 'common/routes';

import './App.css';

import { Navbar, Footer } from 'client/components';
import { useAuthentication } from '../../pages/Authentication/Authentication.hook';

const b = bem.with('app');

function App() {
    const {
        isAuthenticated
    } = useAuthentication();

    return (
        <div className={b("", { type: 'default' })}>
            <div className={b('grid-box', { authenticated: isAuthenticated })}>
                <div className={b('grid-item')}>
                    <Navbar type={isAuthenticated ? 'authorized' : 'non-authorized'}/>
                </div>
                <div className={b('grid-item')}>
                    <Switch>
                        {routes.map(({ fetchData, ...routeProps }) => (
                            <Route key={routeProps.path} {...routeProps} />
                        ))}
                    </Switch>
                </div>
                <div className={b('grid-item', { authenticated: isAuthenticated })}>
                    <Footer display={isAuthenticated}/>
                </div>
            </div>
        </div>
    );
}

const Component = hot(App);

export { Component as App };
