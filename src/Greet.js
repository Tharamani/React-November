import {Component} from 'react';

class Greet extends Component{

	currentTime;
	greetMessage;

	constructor(){
		super();
		this.currentTime = new Date().getHours();
	}
	greet = () =>{

		if(this.currentTime < 12){
			this.greetMessage = "Good Morning!!!!"
		}else if(this.currentTime >= 12 && this.currentTime <= 17){
			this.greetMessage = "Good Afternoon!!!"
		}else if (this.currentTime >= 17 && this.currentTime <= 24){
			this.greetMessage = "Good Evening!!!!";
		}
		
		alert(this.greetMessage);
	}
	render(){
	return(
			<div className="Greet">
			<h2>Greetings</h2>
				<button onClick={this.greet}>Greet</button>
			</div>

		);
	}
}
export default Greet;