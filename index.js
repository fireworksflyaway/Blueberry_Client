/**
 * Created by Mason Jackson in Office on 2017/4/21.
 */
import React from 'react';
import {render} from 'react-dom';
import { Router, Route, hashHistory, IndexRoute, browserHistory } from 'react-router';
import './node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss';
import './node_modules/bootstrap/dist/js/bootstrap.min';
import './style/common.scss';



import Content from './modules/content';
import Home from './modules/home';
import Staff from './modules/staff';
render(
    (<Router history={browserHistory}>
        <Route path="/" component={Content}>
            <IndexRoute component={Home}/>
            <Route path="/staff" component={Staff}/>
            {/*<Route path="/centralpanel" component={CentralPanel}/>*/}
            {/*<Route path="/profile" component={Profile}/>*/}
        </Route>
    </Router>)
    , document.getElementById('basicDiv'));


