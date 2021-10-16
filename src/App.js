import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navs from './components/Navs';

function App() {
    return (
        <div>
            <Navs />
            <Switch>
                <Route exact path="/">
                    This is HOME page
                </Route>
                <Route exact path="/starred">
                    This page is starred...
                </Route>
                <Route>404!! Page not found...</Route>
            </Switch>
        </div>
    );
}

export default App;
