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

  
  
  return (
    <div className="col-md-4 image-list-container">    
      <ul className="list-group">
        {imageItems}
      </ul>
    </div>
    
  );
};

export default ImageList;