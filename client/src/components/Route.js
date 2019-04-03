import React from 'react';
import { Route } from 'react-router-dom';
import Login from './Login';
import Main from './Main';

const NRoute = () => {
    return (
        <div>
            <Route exact path="/" component={Main} />
            <Route exact path="/login" component={Login} />
        </div>
    );
};

export default NRoute;