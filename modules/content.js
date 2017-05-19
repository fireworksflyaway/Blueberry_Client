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
        let articleHeight=Math.max(window.screen.height-300,600);
        return (
            <div>
                <Aside />
                <Nav/>
                <article className="col-lg-9 col-md-8" style={{minHeight:`${articleHeight}px`}}>
                    {this.props.children}
                </article>
            </div>
        );
    }
}