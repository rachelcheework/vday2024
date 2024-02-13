import React from "react";

const ImageList = ({images}) => {
    return (
        <ul className="image-list"> {/* Add a class for styling */}
        {images.map((image, index) => (
          <ul key={index}>
              <img src={image} alt={image} />
          </ul>
        ))}
      </ul>
    );
};

export default ImageList;