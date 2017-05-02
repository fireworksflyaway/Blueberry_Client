/**
 * Created by Mason Jackson in Office on 2017/4/28.
 */
import React from 'react';
import {Link} from 'react-router';

export default class MySelect extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div style={{float:"right"}}>
            <div className="input-group">
                <input type="text" className="form-control" placeholder={this.props.placeholder}/>
                <span className="input-group-btn">
                    <button className="btn btn-primary" type="button"><span className="glyphicon glyphicon-search" style={{fontSize:"small"}}></span></button>
                </span>
            </div>
            </div>
        )
    }

}