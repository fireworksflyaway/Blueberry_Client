/**
 * Created by Mason Jackson @ Fireworks-Dell on 2017/4/22.
 */
import React from 'react';

import Aside from './aside';
import Nav from './nav';
export default class Content extends React.Component{
    constructor(){
        super();

    }

    render(){
        return (
            <div>
                <Aside />
                <Nav/>
                {this.props.children}
            </div>
        );
    }
}