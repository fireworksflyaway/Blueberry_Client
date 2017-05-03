/**
 * Created by Mason Jackson in Office on 2017/4/27.
 */
import React from 'react';
import {Link} from 'react-router';
import '../node_modules/bootstrap-select/sass/bootstrap-select.scss'
import '../node_modules/bootstrap-select/js/bootstrap-select';

let labelStyle={
    fontFamily:"Adobe 黑体 Std R, 'Helvetica Neue', Helvetica, Arial, sans-serif",
    fontSize:"medium",
    fontWeight:"normal",
    paddingRight:"10px"
}


export default class MySelect extends React.Component{
    constructor(){
        super();
    }

    changeHandler(){
        let value= $(`#${this.props.id} option:selected`).val();
        this.props.changeValue(value);
    }

    componentDidMount(){
         $('.selectpicker').selectpicker('render');
    }

    render(){
        return (
            <span>
                <label style={labelStyle}>{this.props.title}</label>
                <select id={this.props.id} className="selectpicker" data-width="fit" onChange={this.changeHandler.bind(this)}>
                    {this.props.children}
                </select>
            </span>
        )
    }

}