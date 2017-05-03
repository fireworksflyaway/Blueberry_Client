import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import '../css/SignUp.css';

class SignUp extends React.Component{
	constructor(props){
		super(props);
		this.state={
			staffid:'',      //工号
			pwd:'',         // 密码
			checked:false,
		}

	}
	onChangeInput(event){
		var target = event.target;
		var val = $(target).val();
		if(target.parentNode.className == 'staffid line'){
			this.setState({staffid:val})
		}else{
			this.setState({pwd:val})
		}
	}
	onChangeCheckBox(){                                                  //是否记住密码
		this.setState({checked:!this.state.checked});
		console.log(this.state.checked);
	}
	onClickInputType(){                                                   //点击显示密码
		if($('#section .pwd input').attr('type') == 'password'){
			$('#section .pwd input').attr('type','text');
		}else{
			$('#section .pwd input').attr('type','password');
		}
	}
	onBtnsClickSignUp(){
		var bool = true;
		if(this.state.staffid != "" && this.state.staffid != null){
			if(this.state.pwd != '' && this.state.pwd != null){
				bool = true;
			}else{
				window.alert('密码不能为空！');
				bool = false;
			}
		}else{
			window.alert('工号不能为空！');
			bool = false;
		}
		if(bool){
			$.get('http://192.168.0.147:8084/api/staff',{staffId:this.state.staffid,password:this.state.pwd},function(data){
				if(data.Ack == true){
					sessionStorage.setItem('MM_Token',data.Token);               //成功后sessionStorage保存Token,staffid
					sessionStorage.setItem('MM_StaffId',this.state.staffid);
					window.alert('登录成功！');
					if(this.state.checked == true){
						localStorage.setItem('MM_StaffId',this.state.staffid);
						localStorage.setItem('MM_pwd',this.state.pwd);
					}else{
						localStorage.removeItem('MM_StaffId');
						localStorage.removeItem('MM_pwd');
					}
					window.location.href='warehouse.html';
				}else{
					window.alert(data.Err);
				}
			}.bind(this));
		}
	}
	componentWillMount(){
		var staffid = localStorage.getItem('MM_StaffId');
		var pwd = localStorage.getItem('MM_pwd');
		if(staffid != "" && staffid != null && pwd != "" && pwd != null){
			this.setState({staffid:staffid,pwd:pwd,checked:true});
		}
	}
	render(){
		return(
			<div>
				<div id="top">
					<div className="title">
						<div className='home fl'>
							<a href="#none"><span>访问MAIMI官网</span></a>
						</div>
						<div className='logo fl'>
							<a href="#none"><img src='../image/icon/Logo.png' /></a>
						</div>
						<div className="tit fr">
							<span><a href="SignIn">员工注册</a></span>
						</div>
					</div>
				</div>
				<div id="section">
					<div className="sec_box">
						<div className="img fl">
							<img src='../image/icon/Signin.png' />
						</div>
						<div className="signin_box fr">
							<div className="title">
								<span className="wrie"></span>
								<span className='txt'>员工注册</span>
								<span className='wrie'></span>
							</div>
							<div className="from ">
								<div className='staffid line'>
									<label>工&nbsp;&nbsp;号</label>
									<input type='text' value={this.state.staffid} placeholder='请输入姓名' onChange={this.onChangeInput.bind(this)}/>
								</div>
								<div className='line pwd'>
									<label>密&nbsp;&nbsp;码</label>
									<input type="password" value={this.state.pwd} placeholder='请输入密码' onChange={this.onChangeInput.bind(this)} />
									<b onClick={this.onClickInputType.bind(this)}></b>
								</div>
							</div>
							<div className='btns'>
								<input  type='checkbox' checked={this.state.checked} onChange={this.onChangeCheckBox.bind(this)} /><span>记住当前账号</span>
								<button className="signup btn" onClick={this.onBtnsClickSignUp.bind(this)}>登&nbsp;&nbsp;录</button>  <br />
								<a href='#none'>忘记密码？</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}


var div = document.createElement("div");
div.id = "root";
document.body.appendChild(div);
ReactDOM.render(<SignUp  />,document.getElementById('root'));