import React from 'react';
import ImageListItem from "./image_list_item"

const ImageList = (props) => {
  const imageItems = props.images.map((img) => {
    return <ImageListItem image={img} />
  })
  
  return (
    <ul className="col-md-4 list-group">
      {imageItems}
    </ul>
  );

};

export default ImageList;