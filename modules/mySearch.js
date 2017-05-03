/**
 * Created by Mason Jackson in Office on 2017/4/28.
 */
import React from 'react';
import {Link} from 'react-router';

export default class MySelect extends React.Component {
    constructor() {
        super();
    }

    clickHandler(){
        let value=$(`#${this.props.id}`).val();
        this.props.search(value);
    }

    render() {
        return (
            <div style={{float:"right"}}>
            <div className="input-group">
                <input type="text" className="form-control" placeholder={this.props.placeholder}  id={this.props.id}/>
                <span className="input-group-btn">
                    <button onClick={this.clickHandler.bind(this)} className="btn btn-primary" type="button"><span className="glyphicon glyphicon-search" style={{fontSize:"small"}}></span></button>
                </span>
            </div>
            </div>
        )
    }

}