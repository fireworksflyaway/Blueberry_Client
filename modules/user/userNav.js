/**
 * Created by Mason Jackson in Office on 2017/5/3.
 */
import React from 'react';

export default class UserNav extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        let pageType=this.props.type;
        let url="#", content="未知页面";
        switch (pageType)
        {
            case 'signIn':url='./signup.html';content='员工注册';break;
            case 'signUp':url='./signin.html';content='员工登录';break;
        }
        return (
            <nav className="userNav">
                <div className="container">
                    <div className='borderDiv'>
                        <a href="#none">访问麦米官网</a>
                    </div>
                    <div className='logoDiv'>
                        <a href="/"><img src={require('../../images/blueLogo.png')} /></a>
                    </div>
                    <div className="linkDiv">
                        <a href={url}>{content}</a>
                    </div>
                </div>
            </nav>
        )
    }


}