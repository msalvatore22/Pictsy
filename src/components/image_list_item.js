import React from 'react';

const ImageListItem = ({image}) => {
  
  let imageURL = image.images[0].link
  let imageTitle = image.title
  
  return (
    <li className="list-group-item">
      <div className="image-list media">
        <div className="media">
          <img className="media-object align-self-center" src={ imageURL } />
        </div>

        <div className="media-body">
          <div className="media-heading">
            { imageTitle }
          </div>
        </div>
      </div>
    </li>  
  ) 
};

export default ImageListItem;