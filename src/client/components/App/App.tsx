import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import routes from 'common/routes';

import './App.css';

import { Navbar, Footer } from 'client/components';

function App() {
    return (
        <div className="app">
            <Navbar/>
            <React.Fragment>
                <Switch>
                    {routes.map(({ fetchData, ...routeProps }) => (
                        <Route key={routeProps.path} {...routeProps} />
                    ))}
                </Switch>
            </React.Fragment>
            <Footer/>
        </div>
    );
}

const Component = hot(App);

export { Component as App };
