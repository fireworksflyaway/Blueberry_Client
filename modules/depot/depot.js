/**
 * Created by Mason Jackson in Office on 2017/5/11.
 */
import React from 'react';

import ArticleHeader from '../articleHeader';
import ArticleBody from '../articleBody';
import MySelect from '../mySelect';
import MySearch from '../mySearch';
import MyPagination from '../myPagination';
import MyTable from '../myTable';

export default class Depot extends React.Component{
    constructor()
    {
        super();
        let dataHeight=Math.max(window.screen.height-540,360);
        let pageSize=Math.floor(dataHeight/36);
        this.state={
            pageIndex:1,
            items:[],
            pageCount:0,
            itemCount:0,
            searchItem:'',
            pageSize:pageSize
        }
    }

    updateTable({pageSize, pageIndex, searchItem}=this.state)
    {
        let staffId=sessionStorage.getItem('Maimi_StaffId');
        let token=sessionStorage.getItem('Maimi_Token');
        $.get("http://192.168.0.148:8085/api/depot",
            {
                staffId, token, searchItem, pageIndex, pageSize
            }, (obj)=>{
                if(obj.Ack)
                {
                    this.setState({
                        items:obj.DepotList,
                        pageCount:obj.PageCount,
                        pageIndex:pageIndex,
                        itemCount:obj.ItemCount,
                        searchItem:searchItem,
                        pageSize:pageSize
                    });
                    sessionStorage.setItem('Maimi_Token', obj.Token);
                }
                else
                {
                    alert(obj.Err);
                }
            }
        );
    }


    componentWillMount(){
        let staffId=sessionStorage.getItem('Maimi_StaffId');
        let token=sessionStorage.getItem('Maimi_Token');
        let {searchItem, pageIndex, pageSize}=this.state;
        $.get("http://192.168.0.148:8085/api/depot",
            {
                staffId, token, searchItem, pageIndex, pageSize
            }, (obj)=>{
                if(obj.Ack)
                {
                    this.setState({
                        items:obj.DepotList,
                        pageCount:obj.PageCount,
                        pageIndex:pageIndex,
                        itemCount:obj.ItemCount,
                        searchItem:searchItem,
                        pageSize:pageSize
                    });
                    sessionStorage.setItem('Maimi_Token', obj.Token);
                }
                else
                {
                    alert(obj.Err);
                }
            }
        );
    }


    render(){
        let attrList=[
            {name:"Name", title:"仓库名称"},
            {name:"Num", title:"仓库编号"},
            {name:"Alias", title:"仓库别名"},
            {name:"Address", title:"地址"},
            {name:"StaffName", title:"负责人姓名"}
        ]

        return (
            <div>
                <ArticleHeader title="仓库管理" >
                    <form className="form-inline">
                        <MySearch id="depotSearchInput" placeholder="请输入仓库名称/编号/别名..." search={this.updateTable.bind(this,this.state.pageSize, this.state.pageIndex)}/>
                    </form>
                </ArticleHeader>
                <ArticleBody>
                    <MyTable itemList={this.state.items} attrList={attrList} size={this.state.pageSize} />
                    <MyPagination itemCount={this.state.itemCount} pageIndex={this.state.pageIndex} pageCount={this.state.pageCount} changePage={this.updateTable.bind(this, this.state.pageSize)}/>
                </ArticleBody>
            </div>
        )
    }

}