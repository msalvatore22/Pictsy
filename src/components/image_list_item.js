import React from 'react';

const ImageListItem = ({image, onImageSelect}) => {
  
  let imageURL = image.images[0].link
  let imageTitle = image.title
  
  return (
    //entire li is now set to an onlcick function that the
    //onImageSelect callback gets passed to
    <li onClick={()=> onImageSelect(image)} className="list-group-item">
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