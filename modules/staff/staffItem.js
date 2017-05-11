/**
 * Created by Mason Jackson in Office on 2017/5/2.
 */
import React from 'react';
export default class StaffItem extends React.Component{
    constructor(){
        super();
    }

    render(){
        return (
            <tr>
                <td>{this.props.item.Name}</td>
                <td>{this.props.item.StaffId}</td>
                <td>{this.props.item.Department}</td>
                <td>{this.props.item.Position}</td>
                <td>{this.props.item.Class}</td>
                <td>{this.props.item.Phone}</td>
                <td>{this.props.item.Email}</td>
            </tr>
        )
    }
}