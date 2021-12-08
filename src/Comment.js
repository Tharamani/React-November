import {Component} from 'react';

class Comment extends Component{
	
	submitComment = ()=>{
			alert("your comment has been submitted. waiting for moderator.");
	}
	render(){

		return(
			
				<div className="Comment" >
				<div><h2>Comment </h2>
					<input type="text" name="name" id="name" placeholder="Enter your name" /><br/>
					<input type="email" pattern=".+@globex\.com"  name="email" id="email" placeholder="Enter your email" /><br/>
					<label for="story">Comments:</label>
					<textarea id="story" name="story"rows="5" cols="33">Leave your comments here..</textarea><br/>
					<button onClick={this.submitComment}>Submit</button>
				</div>
				</div>
			);
	}
}

export default Comment;