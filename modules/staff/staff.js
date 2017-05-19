/**
 * Created by Mason Jackson in Office on 2017/4/27.
 */
import React from 'react';
import MyModal from '../myModal';
import ArticleHeader from '../articleHeader';
import ArticleBody from '../articleBody';
import MySelect from '../mySelect';
import MySearch from '../mySearch';
import MyTable from '../myTable';
import MyPagination from '../myPagination';
export default class Staff extends React.Component{
    constructor(){
        super();
        let dataHeight=Math.max(window.screen.height-540,360);
        let pageSize=Math.floor(dataHeight/36);
        this.state={
            pageIndex:1,
            pageSize:pageSize,
            items:[],
            pageCount:0,
            itemCount:0,
            searchItem:'',
            department:'',
            position:''
        }
    }

    updateTable(pageIndex=this.state.pageIndex, searchItem=this.state.searchItem, department=this.state.department, position=this.state.position)
    {
        let staffId=sessionStorage.getItem('Maimi_StaffId');
        let token=sessionStorage.getItem('Maimi_Token');
        $.get("http://192.168.0.148:8085/api/staff",
            {
                staffId: staffId,
                token: token,
                item:searchItem,
                department:department,
                position:position,
                pageIndex:pageIndex,
                pageSize:this.state.pageSize,
            },(obj)=> {
                if(obj.Ack)
                {
                    this.setState(
                        {
                            items:obj.StaffList,
                            pageCount:obj.PageCount,
                            pageIndex:pageIndex,
                            itemCount:obj.ItemCount,
                            searchItem:searchItem,
                            department:department,
                            position:position,
                            pageSize:this.state.pageSize,
                        });
                    sessionStorage.setItem('Maimi_Token', obj.Token);
                }
                else
                {
                    alert(obj.Err);
                }
            }
        )
    }

    componentWillMount(){
        let pindex=this.state.pageIndex;
        let staffId=sessionStorage.getItem('Maimi_StaffId');
        let token=sessionStorage.getItem('Maimi_Token');
        $.get("http://192.168.0.148:8085/api/staff",
            {
                staffId: staffId,
                token: token,
                item:'',
                department:'',
                position:'',
                pageIndex:pindex,
                pageSize:this.state.pageSize,
            },(obj)=> {
                if(obj.Ack)
                {
                    this.setState(
                        {
                            items:obj.StaffList,
                            pageCount:obj.PageCount,
                            pageIndex:pindex,
                            itemCount:obj.ItemCount,
                            searchItem:'',
                            department:'',
                            position:'',
                            pageSize:this.state.pageSize
                        });
                    sessionStorage.setItem('Maimi_Token', obj.Token);
                }
                else
                {
                    alert(obj.Err);
                }
            }
        )
    }



    handle(){
        this.refs.mm.open();
    }

    render(){
        let attrList=[
            {name:"Name", title:"姓名"},
            {name:"StaffId", title:"工号"},
            {name:"Department", title:"部门"},
            {name:"Position", title:"职位"},
            {name:"Class", title:"级别"},
            {name:"Phone", title:"电话"},
            {name:"Email", title:"电子邮箱"}
            ];


        return (
            <div>
                <ArticleHeader title="员工信息查询">
                    <form className="form-inline">
                        <MySelect title="部门" id="departmentSelect" changeValue={this.updateTable.bind(this,this.state.pageIndex, this.state.searchItem)}>
                            <option value=''>全选</option>
                            <option value="市场部">市场部</option>
                            <option value="采购部">采购部</option>
                            <option value="人事部">人事部</option>
                            <option value="财务部">财务部</option>
                        </MySelect>
                        &emsp;&emsp;
                        <MySelect title="职位" id="positionSelect" changeValue={this.updateTable.bind(this,this.state.pageIndex, this.state.searchItem, this.state.department)}>
                            <option value=''>全选</option>
                            <option value="职员">职员</option>
                            <option value="主管">主管</option>
                            <option value="经理">经理</option>
                            <option value="总经理">总经理</option>
                        </MySelect>
                        &emsp;&emsp;
                        <MySearch id="staffSearch" placeholder="请输入工号或姓名..." search={this.updateTable.bind(this,this.state.pageIndex)}/>
                    </form>
                </ArticleHeader>
                <ArticleBody>
                    <MyTable itemList={this.state.items} attrList={attrList} size={this.state.pageSize}/>


                    <MyPagination itemCount={this.state.itemCount} pageIndex={this.state.pageIndex} pageCount={this.state.pageCount} changePage={this.updateTable.bind(this)}/>
                    {/*<a href="#" onClick={this.handle.bind(this)}>Click to show modal</a>*/}
                    <MyModal title="新建库房" ref="mm">
                        Hello <a href="./signin.html">go to sign in</a>
                    </MyModal>



                </ArticleBody>
            </div>
        )
    }
}