import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props){
    super(props)

    this.state = { term: ''};
  }

  render() {
    return (
      <div className="search-bar">
        <input 
        value={this.state.term}
        onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }

  onInputChange(term){
    this.setState({term});
    //callback from app to update the search term and kick off
    // a new search
    this.props.onSearchTermChange(term);
  }
}


export default SearchBar;