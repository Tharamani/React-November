import {Component} from 'react';

class Footer extends Component{

	render(){

		return(
			<div className="Footer" >
				<h2>Footer</h2>
				
					<div class="about">
		            	<h6>About</h6>
		            	<p class="text-justify">Zenrays.com <i>CODE WANTS TO BE SIMPLE </i> is an initiative  to help 
			            the upcoming programmers with the coding. 
			            Zenrays focuses on teaching programming languages and frameworks that include HTML, JavaScript, React and so on..</p>
		          	</div>
		        	
		         	<div class="copy-right">
			            <p class="copyright-text">Copyright &copy; 2021 All Rights Reserved by 
			         	<a href="zenrays.com">Zenrays</a>.
			            </p>
			         </div>
			</div>
			);
	}
}
export default Footer;