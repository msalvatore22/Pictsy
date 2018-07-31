import React from 'react';

const ImageListItem = ({image}) => {
  console.log(image)
  let imageURL = image.images[0].link
  
  return (
    <li className="list-group-item">
      <div className="image-list media">
        <div className="media">
          <img className="media-object align-self-cente" src={ imageURL } />
        </div>
      </div>
    </li>  
  ) 
};

export default ImageListItem;