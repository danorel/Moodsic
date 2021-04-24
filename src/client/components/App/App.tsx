import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import { Header, Footer } from 'client/components/index';
import routes from 'common/routes';

import './App.css';

function App() {
    return (
        <div className="app">
            <Switch>
                {routes.map(({ fetchData, ...routeProps }) => (
                    <Route key={routeProps.path} {...routeProps} />
                ))}
            </Switch>
        </div>
    );
}

const Component = hot(App);

export { Component as App };
