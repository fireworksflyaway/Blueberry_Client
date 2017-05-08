import React from 'react';

import UserNav from './userNav';
//import '../../style/signIn.css';

export default class SignUp extends React.Component{
	constructor(props){
		super(props);

	}

	getForm(event){
        event.preventDefault();
		let data={
			staffId:$('#staffIdInput').val(),
            password:$('#passwordInput').val()
		}

        $.get('http://192.168.0.148:8085/api/staff',data,function(obj){
            if(obj.Ack)
            {
                sessionStorage.setItem('Maimi_StaffId', data.staffId);
                sessionStorage.setItem('Maimi_Token',obj.Token);
                sessionStorage.setItem('Maimi_Name',obj.Name);
                window.location.href = '/';
            }
            else
            {
                alert(obj.Err);
            }
        });

	}

	render(){
		return(
			<div>
				<UserNav type="signIn"/>
				<section className="container">
					<div className="col-lg-6 col-md-6 col-sm-6">
						<img src={require('../../images/signin.png')} />
					</div>
					<div className="col-lg-6 col-md-6 col-sm-6">
						<div className="title">
							<span>员工登录</span>
						</div>
						<form className="form-horizontal userForm" role="form" onSubmit={this.getForm.bind(this)}>
							<div className="form-group">
								<label htmlFor="staffIdInput" className="col-sm-2 control-label">工号</label>
								<div className="col-sm-10">
									<input type="text" className="form-control" id="staffIdInput" placeholder="请输入工号" required/>
								</div>
							</div>
							<div className="form-group">
								<label htmlFor="passwordInput" className="col-sm-2 control-label">密码</label>
								<div className="col-sm-10">
									<input type="password" className="form-control" id="passwordInput" placeholder="请输入密码" required />
								</div>
							</div>
							<div className="form-group">
								<div className="col-sm-offset-2 col-sm-10">
									<div className="checkbox">
										<label>
											<input type="checkbox" />记住当前账号
										</label>
									</div>
								</div>
							</div>
							<div className="form-group">
								<div className="col-sm-offset-2 col-sm-4">
									<button type="submit" className="btn btn-primary userFormButton">登录</button>
								</div>
								<div className="col-sm-offset-2 col-sm-4">
									<a href="./signup.html" className="btn btn-default userFormButton">注册</a>
								</div>
							</div>
							<a href="#" className="col-sm-offset-2">忘记密码？</a>
						</form>
					</div>
				</section>
			</div>
		)
	}
}

