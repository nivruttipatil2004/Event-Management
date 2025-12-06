import React from "react";
import "./Photos.css";
import images from "../../assets/images";   // import all images

function Photos() {
  const imagesArray = [
    images.img1,
    images.img2,
    images.img3,
    images.img4,
    images.img5,
    images.img6,
    images.img1,
    images.img3,
  ];

  return (
    <div className="gallery-container">
      <h1 className="gallery-title">Events Gallery</h1>

      <div className="gallery-grid">
        {imagesArray.map((img, index) => (
          <div key={index} className="gallery-item">
            <img src={img} alt={`Event ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Photos;
