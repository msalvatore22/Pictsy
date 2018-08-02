import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/searchbar';
import ImageList from './components/image_list'
import ImageDetail from './components/image_detail'
import Filter from './components/image_filter'
import Fetch from 'whatwg-fetch'
const API_KEY = '1c5cc83cd286417';

// Create a new component. This component should produce some HTML.
// Downwards Data Flow - the most parent component should be responsible for fetching any data.

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      images: [],
      images2: [],
      selectedImage: null,
      filter: {
        viral: true,
        gif: true,
      }

    };
    
    this.filterImages = this.filterImages.bind(this)
    //sets the inital search to star wars
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

        console.log(data.data.items[1].tags[1].name)

        for(let img in data.data.items){
          if(data.data.items[img].images){
            if (data.data.items[img].images[0].type === 'image/jpeg' || data.data.items[img].images[0].type === 'image/gif' ) {
              imgData.push(data.data.items[img]);
            }
          }
        }
        
        this.setState({
          images: imgData,
          images2: imgData,
          selectedImage: imgData[0]
        })
       

      }).catch((error) => {
        console.log('request failed', error)
      })
    }

    filterImages(event){
      let originalState = this.state.images2
      let value = this.state.filter[name];
      this.state.filter[name] = !value;
      let name = event.target.name;
      let images = this.state.images;
      let filterArray = []
      // let tags = []

      // console.log(tags)
      
      // for(let i=0; i < images.length; i++){
      //   return tags.push(images.tags[i].name)
      // }

      //loop through to check for image filter

      images.forEach((img) => {
        console.log(img.images[0].type)
        if (value === true && name === 'gif' && img.images[0].type === 'image/gif') {
          filterArray.push(img);
          console.log(filterArray)
        } else if (value === true && name === 'viral' && img.in_most_viral === true) {
          filterArray.push(img);
        } else if (value === false) {
          filterArray = originalState
        }
      })
      
      if (filterArray.length < 1) {
        alert('No images returned for this filter')
        filterArray = originalState;
        this.setState({
          filter: {
            viral: true,
            gif: true
          }
        })
      }

      this.setState({
        images: filterArray
      })

    }


  render () {
    //adds a delay to the img search method to prevent instant
    //rendering
    const imgSearch = _.debounce((term) => {this.imgSearch(term)}, 300);

    return (
      <div>
        <h1>Pictsy</h1>
        <SearchBar onSearchTermChange={imgSearch}/>
        <ImageDetail image={this.state.selectedImage}/>
        <Filter filterImages={ this.filterImages }/>
        <ImageList 
        //pass a callback function to imageList to update
        //selected image in in App state
          onImageSelect={selectedImage => this.setState({selectedImage})}
          images={this.state.images}/>
      </div>
    );
  }
}


// Take this component's HTML and put it in the DOM

ReactDOM.render(<App />, document.querySelector('.container'));
