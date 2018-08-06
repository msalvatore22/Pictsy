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
      gifs: [],
      viral: [],
      selectedImage: null,
      

    };
    
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
        let allImages = []
        let gifImages = []
        let viralImages = []

        console.log(data.data.items[4].images[0].type)

        for(let img in data.data.items){
          if(data.data.items[img].images){
            if (data.data.items[img].images[0].type === 'image/jpeg' || data.data.items[img].images[0].type === 'image/gif' ) {
              allImages.push(data.data.items[img]);
            }
            
            if (data.data.items[img].images[0].type === 'image/gif') {
              gifImages.push(data.data.items[img]);
            }
            
            if (data.data.items[img].in_most_viral === true){
              viralImages.push(data.data.items[img]);
            }
          }
        }
        console.log(gifImages)
        console.log(viralImages)
        console.log(allImages)

        this.setState({
          images: allImages,
          gifs: gifImages,
          viral: viralImages,
          selectedImage: allImages[0]
        })
       

      }).catch((error) => {
        console.log('request failed', error)
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
          gifs={this.state.gifs}
          viral={this.state.viral}
          images={this.state.images}
           />
      </div>
    );
  }
}


// Take this component's HTML and put it in the DOM

ReactDOM.render(<App />, document.querySelector('.container'));
