import {Component} from 'react';

class Login extends Component{
	render(){

		return(
				<div className="Login">
				<h2>Login Form </h2>
						<label>UserName </label>
						<input type="text" name="username" placeholder="Enter your username"/><br/>

						<label>Password </label>
						<input type="password" name="password" placeholder="Enter your password"/><br/>
						<button>Login</button><br/>
						<a href="resetpassword">ResetPassword</a>
						<a href="forgotpassword">ForgotPassword</a>
						
					
				</div>
			);
	}
}

export default Login;