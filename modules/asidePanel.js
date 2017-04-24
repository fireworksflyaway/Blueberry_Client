/**
 * Created by Mason Jackson in Office on 2017/4/24.
 */
import React from 'react';
import {Link} from 'react-router';
export default class AsidePanel extends React.Component{
    constructor(){
        super();
    }

    handleClick(event){
        event.preventDefault();
        let element=event.srcElement||event.target;
        let parent=element.parentNode;
        let tagName=parent.tagName.toLowerCase();
        if(tagName!=="li"&&tagName!=="div")
            return;
        $('.asideCurrentPanelLink').removeClass('asideCurrentPanelLink');
        if(parent.tagName.toLowerCase()==="li")
        {
            $('.asideCurrentChildPanelLi').removeClass('asideCurrentChildPanelLi');
            parent.className+= ' asideCurrentChildPanelLi';
            let panel=parent.parentNode.previousSibling;
            panel.className+= ' asideCurrentPanelLink';
        }
        else
        {
            $('.asideChildPanel').removeClass('in');
            element.className+= ' asideCurrentPanelLink';
        }
    }

    render(){
        return(
            <div className="asidePanel" onClick={this.handleClick}>
                <Link to='#depotAsidePanel' data-toggle="collapse" className="asidePanelLink">仓库管理系统</Link>
                <ul id='depotAsidePanel' className="panel-collapse collapse asideChildPanel">
                    <li><Link to="#" >商品库存量查询</Link></li>
                    <li><Link to="#">仓库管理</Link></li>
                    <li><Link to="#">入库表</Link></li>
                    <li><Link to="#">出库表</Link></li>
                </ul>

                <Link to='#staffAsidePanel' data-toggle="collapse" className="asidePanelLink">员工管理系统</Link>
                <ul id='staffAsidePanel' className="panel-collapse collapse asideChildPanel">
                    <li><Link to="#abc">员工信息查询</Link></li>
                </ul>
            </div>
        );
    }
}