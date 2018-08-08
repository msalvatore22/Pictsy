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
    <div>    
      <ul className="col-md-4 list-group">
        {imageItems}
      </ul>
    </div>
    
  );
};

export default ImageList;