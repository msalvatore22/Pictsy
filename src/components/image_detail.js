import React from 'react';

const ImageDetail = ({image}) => {
  //check to see if there is a video before rendering component
  if(!image) {
    return(
      <div>Loading images...</div>
    )
  }
  
  let imageURL = image.images[0].link
  
  return (
    <div className="image-detail col-lg-8">
      <div>
        <img className="selected-image" src={imageURL}></img>
      </div>

      <div className="details">
        <div>{image.title}</div>
      </div>
      
    </div>
  )
}

export default ImageDetail;