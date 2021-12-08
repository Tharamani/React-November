import {Component} from 'react';

class Registration extends Component{

	render(){

		return(
				<div className="Registration">
					<div>
						<h2>Registration Form </h2>
						
						<label for="username">UserName </label>
						<input type="text" id="username" name="username" placeholder="Enter your username"/><br/>

						<label for="password">Password </label>
						<input type="password" name="password" placeholder="Enter your password"/><br/>

						<label for="fullname">Fullname </label>
						<input type="text" id="fullname" name="fullname" placeholder="Enter your fullname"/><br/>

						<label for="dob">DOB </label>
						<input type="date" id="dob" name="dob" placeholder="Enter your dob"/><br/>

						<label for="education-select">Choose your Qualification</label>
						<select name="education-select" id="education-select">
						    <option value="">--Choose your Qualification--</option>
						    <option value="be">B.E</option>
						    <option value="bSc">B.Sc</option>
						    <option value="bCom">B.Com</option>
						    <option value="mba">MBA</option>
						    <option value="ca">CA</option>
						    <option value="ias">IAS</option>
						</select><br/>

						<label for="story">Tell us your story:</label>
						<textarea id="story" name="story" rows="5" cols="33">Tell your story..</textarea><br/>

						<label>Select your gender </label>
						<label for="g1">Male<input type="radio" id="g1" name="gender" value="Male" /></label>
						<label for="g2">FeMale<input type="radio" id="g2" name="gender" value="FeMale"/></label>
					</div>
				</div>
			);
	}
}

export default Registration;