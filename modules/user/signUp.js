import React from 'react';
import UserNav from "./userNav";
//import $ from 'jquery';
//import 'bootstrap/dist/css/bootstrap.css';


//import '../../style/signIn.css';

export default class SignUp extends React.Component{
	constructor(props){
		super(props);


	}

	postForm(event){                                                      //提交事件，提交之前进行输入正则验证，
		event.preventDefault();
		let data={
			Name:$('#staffNameInput').val(),
			Department:$('#departmentSelect option:selected').val(),
			Position:'职员',
			Class:'P01',
			Phone:$('#telInput').val(),
			Email:$('#emailInput').val(),
			Password:$('#passwordInput').val()
		};

		if($('#passwordAgainInput').val()!==data.Password)
		{
			alert('两次输入的密码不一致');
			return;
		}

		//正则验证


		//Post
        	$.post('http://192.168.0.148:8085/api/staff',data,function(obj){
        		if(obj.Ack == true){
        			window.alert('注册成功,您的工号为：' + obj.StaffId);
                    sessionStorage.setItem('Maimi_StaffId', obj.StaffId);
        			sessionStorage.setItem('Maimi_Token',obj.Token);
        			sessionStorage.setItem('Maimi_Name',data.Name);
        			window.location.href = '/';
        		}else{
        			window.alert(obj.Err);
        		}
        	})

	}
	render(){
		return(
		    <div>
                <UserNav type="signUp"/>
                <section className="container">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <img src={require('../../images/signup.png')} />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="title">
                            <span>员工注册</span>
                        </div>
                        <form className="form-horizontal userForm" role="form" onSubmit={this.postForm.bind(this)}>
                            <div className="form-group">
                                <label htmlFor="staffNameInput" className="col-sm-3 control-label">姓名</label>
                                <div className="col-sm-9">
                                    <input type="text" className="form-control" id="staffNameInput" placeholder="请输入姓名" required />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="departmentSelect" className="col-sm-3 control-label">部门</label>
                                <div className="col-sm-9">
                                    <select  className="form-control" id="departmentSelect">
                                        <option value="市场部">市场部</option>
                                        <option value="采购部">采购部</option>
                                        <option value="人事部">人事部</option>
                                        <option value="财务部">财务部</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="telInput" className="col-sm-3 control-label">电话</label>
                                <div className="col-sm-9">
                                    <input type="tel" className="form-control" id="telInput" placeholder="请输入电话号码" required />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="emailInput" className="col-sm-3 control-label">邮箱</label>
                                <div className="col-sm-9">
                                    <input type="email" className="form-control" id="emailInput" placeholder="请输入邮箱地址" required />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="passwordInput" className="col-sm-3 control-label">密码</label>
                                <div className="col-sm-9">
                                    <input type="password" className="form-control" id="passwordInput" placeholder="请输入密码" required />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="passwordAgainInput" className="col-sm-3 control-label">密码确认</label>
                                <div className="col-sm-9">
                                    <input type="password" className="form-control" id="passwordAgainInput" placeholder="请再次输入密码" required />
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="col-sm-offset-3 col-sm-4">
                                    <button type="submit" className="btn btn-primary userFormButton">注册</button>
                                </div>
                                <div className="col-sm-4">
                                    <button type="reset" className="btn btn-default userFormButton">重置</button>
                                </div>
                            </div>
                            <a href="./signin.html">已有账号？</a>
                        </form>

                    </div>
                </section>
            </div>
        )

	}
}

