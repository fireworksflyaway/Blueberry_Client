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
                    <table className="table table-bordered table-striped table-hover">
                        <thead>
                            <tr>
                                <th>员工姓名</th>
                                <th>工号</th>
                                <th>部门</th>
                                <th>职位</th>
                                <th>级别</th>
                                <th>电话</th>
                                <th>邮箱</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>靳强</td>
                                <td>1</td>
                                <td>电商事业部</td>
                                <td>主管</td>
                                <td>P4</td>
                                <td>18664867965</td>
                                <td>fireworksflyaway@live.com</td>
                            </tr>
                            <tr>
                                <td>靳强</td>
                                <td>1</td>
                                <td>电商事业部</td>
                                <td>主管</td>
                                <td>P4</td>
                                <td>18664867965</td>
                                <td>fireworksflyaway@live.com</td>
                            </tr>
                            <tr>
                                <td>靳强</td>
                                <td>1</td>
                                <td>电商事业部</td>
                                <td>主管</td>
                                <td>P4</td>
                                <td>18664867965</td>
                                <td>fireworksflyaway@live.com</td>
                            </tr>
                            <tr>
                                <td>靳强</td>
                                <td>1</td>
                                <td>电商事业部</td>
                                <td>主管</td>
                                <td>P4</td>
                                <td>18664867965</td>
                                <td>fireworksflyaway@live.com</td>
                            </tr>
                        </tbody>
                    </table>





                    <a href="#" onClick={this.handle.bind(this)}>Click to show modal</a>
                    <MyModal title="新建库房" ref="mm">
                        Hello <a href="./signin.html">go to sign in</a>
                    </MyModal>



                </ArticleBody>
            </div>
        )
    }
}