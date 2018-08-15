import React from 'react';

const deleteComment = (e) => {
  let commentList = document.querySelector('.comment-list');
  commentList.innerHTML = ''
}

const ImageListItem = ({image, onImageSelect}) => {
  
  let imageURL = image.images[0].link
  let imageTitle = image.title
  
  return (
    //entire li is now set to an onlcick function that the
    //onImageSelect callback gets passed to
    <li onClick={()=> onImageSelect(image)} className="list-group-item">
      <div className="image-list media">
        <div className="media">
          <a href="#body"><img onClick={ deleteComment } className="media-object" src={ imageURL } ></img></a>
        </div>

        <div className="media-body">
          <div className="image-list-title">
            { imageTitle }
          </div>
        </div>
      </div>
    </li>  
  ) 
};

export default ImageListItem;