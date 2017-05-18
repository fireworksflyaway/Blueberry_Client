/**
 * Created by Mason Jackson in Office on 2017/5/11.
 */
import React from 'react';
import '../style/table.scss';


export default class MyTable extends React.Component{
    constructor()
    {
        super();
    }

    render(){
        // let attrList=[{name:"Id", title:"Id"},{name:"Name", title:"姓名"},{name:"Age", title:"年龄"}];
        let itemList=this.props.itemList;
        let attrList=this.props.attrList;
        let titleList=[];
        attrList.forEach(attr=>{
            titleList.push(<th>{attr.title}</th>);
        })
        let bodyList=[];
        if(itemList.length===0)
        {
            bodyList.push(<tr><td className="blankTd" colSpan={attrList.length}>
                <div>
                    <img src={require('../images/empty.png')} />
                    <span>此列表无数据</span>
                </div>
            </td> </tr> )
        }
        else
        {
            itemList.forEach(item=>{
                let tp=[];
                attrList.forEach(attr=>{
                    tp.push(<td>{item[attr.name]}</td>)
                })
                bodyList.push(<tr>{tp}</tr>);
            })
            if(bodyList.length<10){

            }

        }
        return (
            <table className="table table-bordered myTable">
                <thead>
                <tr>{titleList}</tr>
                </thead>
                <tbody>
                {bodyList}
                </tbody>
            </table>
        )
    }

}