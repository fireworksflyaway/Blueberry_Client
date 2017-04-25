/**
 * Created by Mason Jackson in Office on 2017/4/25.
 */
import React from 'react';
import '../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss';
import '../node_modules/bootstrap/dist/js/bootstrap.min';
export default class Home extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div className="home">
                <h2>Welcome dear user...</h2>
                <a href="#myModal" className="btn btn-primary" data-toggle="modal">Click to show modal</a>

                <div className="modal fade" id="myModal" tabindex="1050" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button className="close" data-dismiss="modal" aria-hidden="true">x</button>
                                <h4 className="modal-title" id="myModalLabel">模态框标题</h4>
                            </div>

                            <div class="modal-body">
                                按下 ESC 按钮退出。
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-default"
                                        data-dismiss="modal">关闭
                                </button>
                                <button type="button" className="btn btn-primary">
                                    提交更改
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}