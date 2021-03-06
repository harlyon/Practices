import React from 'react';
import { Route } from 'react-router-dom';
import Login from './Login';
import Main from './Main';
import AllProperties from './AllProperties';
import SingleProperties from './SingleProperties';
import AddProperties from './admin/AddProperties';

const NRoute = () => {
    return (
        <div>
            <Route exact path="/" component={Main} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/properties" component={AllProperties} />
            <Route exact path="/rent/:rentid" component={SingleProperties} />
            <Route exact path="/property" component={AddProperties} />
        </div>
    );
};

export default NRoute;