import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import routes from 'common/routes';

import './App.css';

import { Header, Footer } from 'client/components/index';

function App() {
    return (
        <div className="app">
            <Header/>
            <Switch>
                {routes.map(({ fetchData, ...routeProps }) => (
                    <Route key={routeProps.path} {...routeProps} />
                ))}
            </Switch>
            <Footer/>
        </div>
    );
}

const Component = hot(App);

export { Component as App };
