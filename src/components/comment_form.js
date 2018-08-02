import React, { Component } from 'react';


const commentCreate = 

class CommentForm extends Component {
  constructor(props){
    super(props)

    this.state = { 
      comment: ''
    }

  }

  render(){
    return (
      <div>
        <div className="form-group">
          <input 
          className="form-control" type="text"
          value={this.state.comment} 
          onChange={event => this.onInputChange(event.target.value)}
          />
          
          <button onClick={ commentCreate } type="submit" className="btn btn-primary">Comment</button>
        </div>
        <ul className="col-lg-8 list-group comment-list">
          
        </ul>

      </div>
    );
  }

  onInputChange(comment){
    this.setState({comment})
    console.log(comment)
  }

}


export default CommentForm;