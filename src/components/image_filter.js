import React from 'react';

const Filter = ({filterImages}) => {
  return (
  <div>
    <input onClick={(event) => { filterImages(event) } } type="button" id="viral" value='Viral' name="viral" />
    <input onClick={(event) => { filterImages(event) } } type="button" value='Gif' name="gif"/>
    <input onClick={(event) => { filterImages(event) } } type="button" value='Meme' name="meme"/>

  </div>
  );
}

export default Filter