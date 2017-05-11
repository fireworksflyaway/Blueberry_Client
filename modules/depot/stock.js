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


export default class Stock extends React.Component{
    constructor()
    {
        super();
    }

    render(){
        let itemList=[{Id:1,Name:'mason',Age:25},{Id:2,Name:'lily',Age:18}];
        let attrList=[{name:"Id", title:"Id"},{name:"Name", title:"姓名"},{name:"Age", title:"年龄"}];
        console.log(itemList);
        return (
            <div>
                <ArticleHeader title="员工信息查询" />
                <ArticleBody>
                    <MyTable itemList={itemList} attrList={attrList}/>
                </ArticleBody>
            </div>
        )

    }

}