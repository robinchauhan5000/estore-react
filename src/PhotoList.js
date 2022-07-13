import React from "react";
import { PhotoContext } from "./App";

export const PhotoList = () => {
  const photoData = React.useContext(PhotoContext);

  console.log(photoData);
  return (
    <div className='container'>
      {photoData.photos.map((photo, index) => {
        return (
          <ul key={index}>
            <li>
              <img src={photo.imgSrc} alt={photo.title}/> 
              <p>{photo.title}</p>
            </li>
          </ul>
        );
      })}
    </div>
  );
};
