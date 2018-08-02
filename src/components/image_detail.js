import React from 'react';

const CommentCreator = (event) => {
  event.preventDefault();

  let author = document.querySelector('#author')
  let content = document.querySelector('#content')
  let ul = document.querySelector('.comment-list')
  let li = document.createElement('li')

  li.innerHTML = `<div><h3>${author.value}</h3><br /><h5>${content.value}</h5></div>`


  return ul.appendChild(li)
}


const ImageDetail = ({image}) => {
  //check to see if there is a image before rendering component
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
      <div className="form-group">
        <label>Author</label>
        <input className="form-control" type="text" id="author" />
        <label>Leave a comment</label>
        <input className="form-control" type="text" id="content" />
        <button onClick={ CommentCreator } type="submit" className="btn btn-primary">Comment</button>
      </div>
      <div>
        <ul className="col-lg-8 list-group comment-list">
          
        </ul>
      </div>
    </div>
  )
}




export default ImageDetail;