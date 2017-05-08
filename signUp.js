/**
 * Created by Mason Jackson in Office on 2017/5/3.
 */
import React from 'react';
import {render} from 'react-dom';

import './node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss';
import './style/user.scss';
import './node_modules/bootstrap/dist/js/bootstrap.min';
import SignUp from './modules/user/signUp';

render(
    <SignUp />
    , document.getElementById('basicDiv'));