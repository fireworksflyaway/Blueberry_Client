/**
 * Created by Mason Jackson in Office on 2017/4/24.
 */
import React from 'react';
import {Link} from 'react-router';
export default class AsidePanel extends React.Component{
    constructor(){
        super();
    }

    handleClick(){
        $('.currentChildPanelLi').removeClass('currentChildPanelLi');
        console.log($(this).parent());
    }

    render(){
        return(
            <div className="asidePanel">
                <Link to='#depotAsidePanel' data-toggle="collapse" className="asidePanelLink">仓库管理系统</Link>
                <ul id='depotAsidePanel' className="panel-collapse collapse asideChildPanel">
                    <li><Link to="#" >商品库存量查询</Link></li>
                    <li className="currentChildPanelLi"><Link to="#">仓库管理</Link></li>
                    <li><Link to="#">入库表</Link></li>
                    <li><Link to="#">出库表</Link></li>
                </ul>

                <Link to='#staffAsidePanel' data-toggle="collapse" className="asidePanelLink">员工管理系统</Link>
                <ul id='staffAsidePanel' className="panel-collapse collapse asideChildPanel">
                    <li><Link to="#abc"  onClick={this.handleClick}>员工信息查询</Link></li>
                </ul>
            </div>
        );
    }
}