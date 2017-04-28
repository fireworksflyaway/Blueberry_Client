/**
 * Created by Mason Jackson in Office on 2017/4/27.
 */
import React from 'react';
import MyModal from './myModal';
import ArticleHeader from './articleHeader';
import ArticleBody from './articleBody';
import MySelect from './mySelect';
import MySearch from './mySearch';
export default class Staff extends React.Component{
    constructor(){
        super();
    }

    handle(){
        this.refs.mm.open();
    }

    render(){
        return (
            <div>
                <ArticleHeader title="员工信息查询">
                    <form className="form-inline">
                        <MySelect title="部门">
                            <option>全选</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </MySelect>
                        &emsp;&emsp;
                        <MySelect title="职位">
                            <option>全选</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </MySelect>
                        &emsp;&emsp;
                        <MySearch />
                    </form>
                </ArticleHeader>
                <ArticleBody>
                    <a href="#" onClick={this.handle.bind(this)}>Click to show modal</a>
                    <MyModal title="新建库房" ref="mm">
                        Hello <a href="./signin.html">go to sign in</a>
                    </MyModal>
                </ArticleBody>
            </div>
        )
    }
}