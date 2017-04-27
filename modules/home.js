/**
 * Created by Mason Jackson in Office on 2017/4/25.
 */
import React from 'react';
import MyModal from './myModal';
import ArticleHeader from './articleHeader';
import ArticleBody from './articleBody';
export default class Home extends React.Component{
    constructor(){
        super();
    }

    handle(){
        this.refs.mm.open();
    }


    render(){
        return (
            <div>
                <ArticleHeader title="欢迎！麦米网的同事"/>
                <ArticleBody>
                    <a href="#" onClick={this.handle.bind(this)}>Click to show modal</a>
                    <MyModal title="新建库房" ref="mm">
                        Hello <a href="./signin.html">go to sign in</a>
                    </MyModal>
                </ArticleBody>
            </div>
        )
    }
}