/**
 * Created by Mason Jackson in Office on 2017/4/21.
 */
import React from 'react';
import {render} from 'react-dom';
import { Router, Route, hashHistory, IndexRoute, browserHistory } from 'react-router';
import './node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss';
import './node_modules/bootstrap/dist/js/bootstrap.min';


render((
    <div>hahah</div>

),document.getElementById('basicDiv'));


// {/*<Router history={browserHistory}>*/}
// {/*<Route path="/" component={Content}>*/}
// {/*/!*<IndexRoute component={Home}/>*!/*/}
// {/*/!*<Route path="/signup" component={SignUp}/>*!/*/}
// {/*/!*<Route path="/centralpanel" component={CentralPanel}/>*!/*/}
// {/*/!*<Route path="/profile" component={Profile}/>*!/*/}
// {/*</Route>*/}
// {/*</Router>*/}