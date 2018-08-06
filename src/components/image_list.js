import React from 'react';
import ImageListItem from "./image_list_item"

const ImageList = (props) => {
  const imageItems = props.images.map((image) => {
    return (
    <ImageListItem 
      onImageSelect={props.onImageSelect}
      key={image.id}
      image={image}  />
    )
  })

  const gifItems = props.gifs.map((image) => {
    return (
    <ImageListItem 
      onImageSelect={props.onImageSelect}
      key={image.id}
      image={image}  />
    )
  })

  const viralItems = props.viral.map((image) => {
    return (
    <ImageListItem 
      onImageSelect={props.onImageSelect}
      key={image.id}
      image={image}  />
    )
  })
  
  
  return (
    <div>
      <input onClick={(event) => { filterViral(event) } } type="button" id="viral" value='Viral' name="viral" />
      <input onClick={(event) => { filterGif(event) } } type="button" value='Gif' name="gif"/>
    
      <ul className="col-md-4 list-group">
        {imageItems}

        gifs

        {gifItems}

        viral

        {viralItems}
      </ul>
    </div>
    
  );
};

export default ImageList;