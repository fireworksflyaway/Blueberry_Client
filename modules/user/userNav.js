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
                    <div className='borderDiv'>
                        <a href="#none">访问麦米官网</a>
                    </div>
                    <div className='logoDiv'>
                        <a href="#none"><img src={require('../../images/blueLogo.png')} /></a>
                    </div>
                    <div className="linkDiv">
                        <a href="./signin.html">员工注册</a>
                    </div>
                </div>
            </nav>
        )
    }


}