/**
 * Created by Mason Jackson in Office on 2017/5/2.
 */
import React from 'react';

export default class MyPagination extends React.Component {
    constructor(props) {
        super(props);
    }

    handler(page){
        if(page>0&&page<=this.props.pageCount)
        {
            this.props.changePage(page);
        }
    }

    goHandler(){
        let page=parseInt(this.refs.pageInput.value);
        if(page!==NaN)
            this.props.changePage(page);
    }

    render(){
        let len=7;
        let startNum=1;
        let pageIndex=this.props.pageIndex;
        let pageCount=this.props.pageCount;
        if(pageCount>len&&pageIndex>2)
            startNum=pageIndex-2;
        let items=[];
        console.log(pageIndex);
        for(let i=startNum;i<startNum+len;i++)
        {
            if(i==pageIndex)
                items.push(<li className="active"><a href="#">{i}</a> </li>);
            else if(i>pageCount)
                items.push(<li className="disabled"><a href="#">{i}</a> </li>);
            else
                items.push(<li><a href="javascript:void(0);" onClick={this.handler.bind(this,i)}>{i}</a> </li>);
        }
        return (
            <div style={{textAlign:"center"}}>
                    共{this.props.itemCount}条&emsp;
                    {this.props.pageIndex}/{this.props.pageCount}页&emsp;
                    <ul className="pagination" style={{verticalAlign:"middle"}}>
                        <li><a href="#"onClick={this.handler.bind(this,1)}>首页</a></li>
                        <li><a href="#"onClick={this.handler.bind(this,pageIndex-1)}>&laquo;</a></li>
                        {items}
                        <li><a href="#"onClick={this.handler.bind(this,pageIndex+1)}>&raquo;</a></li>
                        <li><a href="#"onClick={this.handler.bind(this,pageCount)}>尾页</a></li>
                    </ul>&emsp;&emsp;
                    跳转到&emsp;
                    <input type="text" className="form-control" ref="pageInput" style={{display:"inline-block", width:"60px", height:"32px", verticalAlign:"middle"}}/>&emsp;
                    <button className="btn btn-default" onClick={this.goHandler.bind(this)}>GO</button>
            </div>
        )
    }
}