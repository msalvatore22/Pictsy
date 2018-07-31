import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/searchbar';
import ImageList from './components/image_list'
import Fetch from 'whatwg-fetch'
const API_KEY = '1c5cc83cd286417';

// Create a new component. This component should produce some HTML.
// Downwards Data Flow - the most parent component should be responsible for fetching any data.

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      images: [],
      selectedImg: null
    };

    this.imgSearch('star wars')
    
  } 

    imgSearch(term){
      var imgurURL = 'https://api.imgur.com/3/gallery/t/';

      return fetch(imgurURL + term, {
        headers: {
          'Authorization': 'Client-ID ' + API_KEY
        }
      }).then((response) => {
         return response.json();
      }).then((data) => {
        let imgData = []

        for(let img in data.data.items){
          if(data.data.items[img].images){
            imgData.push(data.data.items[img])
          }
        }
          
          
        this.setState({
          images: imgData,
          selectedImg: imgData[0]
        })
      }).catch((error) => {
        console.log(error)
      })
    }

  render () {
    const imgSearch = _.debounce((term) => {this.imgSearch(term)}, 600);

    return (
      <div>
        <h1>Pictsy</h1>
        <SearchBar onSearchTermChange={imgSearch}/>
        <ImageList images={this.state.images}/>
      </div>
    );
  }
}


// Take this component's HTML and put it in the DOM

ReactDOM.render(<App />, document.querySelector('.container'));
