/**
 * Created by Mason Jackson in Office on 2017/4/27.
 */
import React from 'react';
import {Link} from 'react-router';

export default class ArticleHeader extends React.Component{
    constructor(){
        super();
    }

    render(){

        return (
            <div className="articleHeader">
                <span className="articleTitle">{this.props.title}</span>
                <span>
                    {this.props.children}
                </span>
            </div>
        )
    }

}