/**
 * Created by Mason Jackson in Office on 2017/4/25.
 */
import React from 'react';
import {Link} from 'react-router';
import '../style/nav.scss'

export default class Nav extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
            <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse"
                        data-target="#navbar-collapse">
                    <span className="sr-only">切换导航</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                 <span className="glyphicon glyphicon-plus navbar-brand"></span>
            </div>

            <div className="collapse navbar-collapse" id="navbar-collapse">
                <ul className="nav navbar-nav navbar-right">
                    <li><a href="#"><span className="glyphicon glyphicon-bell"></span><span className="badge">21</span> </a></li>
                    <li><a href="#"><span className="glyphicon glyphicon-envelope"></span><span className="badge">7</span> </a></li>
                    <li className="dropdown">
                        <img id='headpic' src={require('../images/head.png')} />
                        <a id='userLink' className="dropdown-toggle" href="#" data-toggle="dropdown">麦米用户<b className="caret"></b></a>
                        <ul className="dropdown-menu" role="menu" aria-labelledby="dLabel">
                            <li><a href="#">编辑用户信息</a> </li>
                            <li><a href="#">注销</a> </li>
                        </ul>
                    </li>
                    <li><a href="#"><span className="glyphicon glyphicon-off"></span> </a></li>
                </ul>
            </div>

            </nav>
        );
    }
}