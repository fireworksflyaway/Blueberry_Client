/**
 * Created by Mason Jackson in Office on 2017/5/11.
 */
import React from 'react';
import MyModal from './myModal';
import '../style/table.scss';


export default class MyTable extends React.Component{
    constructor()
    {
        super();
    }

    handle(){
        this.refs.mm.open();
    }

    render(){
        // let attrList=[{name:"Id", title:"Id"},{name:"Name", title:"姓名"},{name:"Age", title:"年龄"}];
        let {itemList, attrList, size}=this.props;
        let titleList=[];
        let marginBottom=20;  //控制表格下方空白
        attrList.forEach(attr=>{
            titleList.push(<th>{attr.title}</th>);
        })
        let bodyList=[];
        if(itemList.length===0)
        {
            bodyList.push(<tr><td className="blankTd" colSpan={attrList.length} style={{height:`${36*size}px`}}>
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
                bodyList.push(<tr onClick={this.handle.bind(this)}>{tp}</tr>);
            })
            marginBottom+=(size-bodyList.length)*36;
        }
        return (
            <div>
                <table className="table table-bordered myTable" style={{marginBottom: `${marginBottom}px`}}>
                    <thead>
                    <tr>{titleList}</tr>
                    </thead>
                    <tbody>
                    {bodyList}
                    </tbody>
                </table>
                <MyModal title="员工信息编辑" ref="mm">
                    Hello
                </MyModal>
            </div>
        )
    }

}