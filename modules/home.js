/**
 * Created by Mason Jackson in Office on 2017/4/25.
 */
import React from 'react';
import MyModal from './myModal';
export default class Content extends React.Component{
    constructor(){
        super();
    }

    handle(){
        this.refs.mm.open();
    }


    render(){
        return (
            <div>
                <a href="#" onClick={this.handle.bind(this)}>Click to show modal</a>
                <MyModal title="新建库房" ref="mm">
                    Hello <a href="./signin.html">go to sign in</a>
                </MyModal>
            </div>
        )
    }
}