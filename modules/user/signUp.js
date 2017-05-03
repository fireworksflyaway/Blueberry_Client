import React from 'react';
//import $ from 'jquery';
//import 'bootstrap/dist/css/bootstrap.css';


import '../../style/signIn.css';

export default class SignUp extends React.Component{
	constructor(props){
		super(props);
		this.state={
			name:'',              //姓名
			department:'100000',        //部门
			position:'101000',          //职位
			class:'101001',             //级别
			phone:'',        //电话
			email:'',        //邮箱
			pwd:'',         // 密码
		}

	}
	onChangeInput(event){                                  //input框change事件
		var target = event.target;
		var val = $(target).val();
		if(target.parentNode.className == 'job_num line'){
			this.setState({name:val})
		}else if(target.parentNode.className == 'line phone'){
			this.setState({phone:val})
		}else if(target.parentNode.className == 'line email'){
			this.setState({email:val})
		}else{  
			this.setState({pwd:val});
		}
	}
	onClickSelOpen(event){                                                     //下拉框弹出事件
		var target = event.target;
		while(target.nodeName != 'DIV'){
			target = target.parentNode;
		}
		if($(target).parent().is('.depar')){
			$('#section .from .depar .opt').css('display','block');
		}else if($(target).parent().is('.position')){
			$('#section .from .position .opt').css('display','block');
		}else if($(target).parent().is('.rank')){
			$('#section .from .rank .opt').css('display','block');
		}else{
			console.log(target);
		}
		
	}
	onClickSelOff(event){                                                  //下拉框关闭事件
		var target = event.target;
		if(target.className != 'depar line' && target.className != 'sel' && target.parentNode.className != 'sel' && target.className != 'position line' && target.calssName != 'rank'){    
			$('#section .from .depar .opt').css('display','none');
			$('#section .from .position .opt').css('display','none');
			$('#section .from .rank .opt').css('display','none');
		}
	}
	onClickInputType(){                                                      //点击显示密码
		if($('#section .pwd input').attr('type') == 'password'){
			$('#section .pwd input').attr('type','text');
		}else{
			$('#section .pwd input').attr('type','password');
		}
	}
	onClickOpt(event){                                                     //下拉框选择option事件
		var target = event.target;
		var value = $(target).attr('value');
		if($(target).parent().parent().parent().is('.depar')){
			this.setState({department:value});
			var text = $(target).text();
			$('#section .from .depar .sel span').text(text);
		}else if($(target).parent().parent().parent().is('.position')){
			this.setState({position:value});
			var text = $(target).text();
			$('#section .from .position .sel span').text(text);
		}else if($(target).parent().parent().parent().is('.rank')){
			this.setState({class:value});
			var text = $(target).text();
			$('#section .from .rank .sel span').text(text);
		}
		$(target).siblings().removeClass('bor');
		$(target).addClass('bor');
		$('#section .from .depar .opt').css('display','none');
		console.log(this.state.name,this.state.department,this.state.class,this.state.position,this.state.phone,this.state.email,this.state.pwd);
	}
	onBtnsClickPost(){                                                      //提交事件，提交之前进行输入正则验证，
		var bool = true;
		if(this.state.name != '' && this.state.name != null){
			if(this.state.phone != '' && this.state.phone != null){
				var reg = /^1[3|4|5|7|8][0-9]{9}$/;
				if(reg.test(this.state.phone)){
					if(this.state.email != '' && this.state.email != null){
						var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/ ;
						if(reg.test(this.state.email)){
							if(this.state.pwd != '' && this.state.pwd != null){
								var reg = /^[a-zA-Z0-9]{6,12}$/;
								if(reg.test(this.state.pwd)){
									bool = true;
								}else{
									window.alert('密码格式输入错误,6-12位数字字母组成！')
									bool = false;
								}
							}else{
								window.alert('密码不能为空！');
								bool = false;
							}
						}else{
							window.alert('邮箱格式错误！');
							bool = false;
						}
					}else{
						window.alert('邮箱不能为空！')
						bool = false;
					}
				}else{
					window.alert('手机号码格式输入错误！');
					bool = false;
				}
			}else{
				window.alert('手机号码不能为空！');
				bool = false;
			}
		}else{
			window.alert('输入姓名不能为空！');
			bool =false;
		}
		if(bool){                                                 //发送请求
			console.log(this.state.name,this.state.department,this.state.class,this.state.email,this.state.position,this.state.pwd,this.state.phone);
			$.post('http://192.168.0.147:8084/api/staff',{Password:this.state.pwd,Name:this.state.pwd,Department:this.state.department,Position:this.state.position,Class:this.state.Class,Phone:this.state.phone,Email:this.state.email},function(data){
				if(data.Ack == true){
					window.alert('注册成功,您的工号为：' + data.StaffId);
					sessionStorage.setItem('Token',data.Token);
					window.location.href = 'SignUp.html';
				}else{
					window.alert(data.Err);
				}
			})
		}
	}
	render(){
		return(
			<div onClick={this.onClickSelOff.bind(this)}>
				<div id="top">
					<div className="title">
						<div className='home fl'>
							<a href="/"><span>访问MAIMI官网</span></a>
						</div>
						<div className='logo fl'>
							<a href="#none"><img src={require('../images/blueLogo.png')} /></a>
						</div>
						<div className="tit fr">
							<span><a href="SignUp">员工登录</a></span>
						</div>
					</div>
				</div>
				<div id="section">
					<div className="sec_box">
						<div className="img fl">
							<img src={require('../images/signup.png')} />
						</div>
						<div className="signin_box fr">
							<div className="title">
								<span className="wrie"></span>
								<span className='txt'>员工登录</span>
								<span className='wrie'></span>
							</div>
							<div className="from ">
								<div className='job_num line'>
									<label>姓&nbsp;&nbsp;名</label>
									<input type='text'  placeholder='请输入姓名' onChange={this.onChangeInput.bind(this)}/>
								</div>
								<div className='depar line'>
									<label>部&nbsp;&nbsp;门</label>
									<div className='sel' onClick={this.onClickSelOpen.bind(this)}>
										<span>技术部</span>
										<b></b>
									</div>
									<div className="opt">
										<ul>
											<li value='100000' onClick={this.onClickOpt.bind(this)}>技术部</li>
											<li value='200000' onClick={this.onClickOpt.bind(this)}>人事部</li>
											<li value='300000' onClick={this.onClickOpt.bind(this)}>财务部</li>
											<li value='400000' onClick={this.onClickOpt.bind(this)}>生产部</li>
											<li value='500000' onClick={this.onClickOpt.bind(this)}>经理部</li>
										</ul>
									</div>
								</div>
								<div className="position line">
									<label>职&nbsp;&nbsp;位</label>
									<div className='sel' onClick={this.onClickSelOpen.bind(this)} >
										<span>销售员</span>
										<b></b>
									</div>
									<div className='opt'>
										<ul>
											<li value='101000' onClick={this.onClickOpt.bind(this)}>销售员</li>
											<li value='102000' onClick={this.onClickOpt.bind(this)}>程序员</li>
											<li value='103000' onClick={this.onClickOpt.bind(this)}>经理</li>
											<li value='104000' onClick={this.onClickOpt.bind(this)}>会计</li>
											<li value='105000' onClick={this.onClickOpt.bind(this)}>生产员</li>
										</ul>
									</div>
								</div>
								<div className='rank line'>
									<label>级&nbsp;&nbsp;别</label>
									<div className='sel' onClick={this.onClickSelOpen.bind(this)} >
										<span>级别</span>
										<b></b>
									</div>
									<div className='opt'>
										<ul>
											<li value='101001' onClick={this.onClickOpt.bind(this)}>普通员工</li>
											<li value='101002' onClick={this.onClickOpt.bind(this)}>经理</li>
											<li value='101003' onClick={this.onClickOpt.bind(this)}>总裁</li>
											<li value='101004' onClick={this.onClickOpt.bind(this)}>董事</li>
											<li value='101005' onClick={this.onClickOpt.bind(this)}>董事长</li>
										</ul>
									</div>
								</div>
								<div className='line phone'>
									<label>电&nbsp;&nbsp;话</label>
									<input type="text"  placeholder='请输入电话号码' onChange={this.onChangeInput.bind(this)}/>
								</div>
								<div className='line email'>
									<label>邮&nbsp;&nbsp;箱</label>
									<input type="text"  placeholder='请输入邮箱' onChange={this.onChangeInput.bind(this)} />
								</div>
								<div className='line pwd'>
									<label>密&nbsp;&nbsp;码</label>
									<input type="password"  placeholder='请输入密码' onChange={this.onChangeInput.bind(this)} />
									<b onClick={this.onClickInputType.bind(this)}></b>
								</div>
							</div>
							<div className='btns'>
								<button className="signin btn" onClick={this.onBtnsClickPost.bind(this)}>注&nbsp;&nbsp;册</button>
								<button className="back btn">返&nbsp;&nbsp;回</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

