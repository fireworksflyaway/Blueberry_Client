/**
 * Created by Mason Jackson in Office on 2017/5/3.
 */
import React from 'react';

export default class UserNav extends React.Component{
    constructor(props) {
        super(props);

    }

    render(){
        return (
            <nav className="userNav">
                <div className="container">
                    <div className='navbar-header'>
                        <a href="#none"><span>访问MAIMI官网</span></a>
                    </div>
                    <div className='nav navbar-nav'>
                        <a href="#none"><img src={require('../../images/blueLogo.png')} /></a>
                    </div>
                    <div>
                        <span><a href="./signin.html">员工注册</a></span>
                    </div>
                </div>
            </nav>
        )
    }


}