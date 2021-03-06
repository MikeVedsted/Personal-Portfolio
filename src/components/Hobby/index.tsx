import React from "react";
import Image from "react-bootstrap/Image";

import { HobbyProps } from "../../types";

const Hobby = ({ hobby }: HobbyProps) => {
  const { title, description, image } = hobby;

  return (
    <div className="hoverEffect">
      <Image src={image} fluid />
      <div className="overlay">
        <div className="overlay__text">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Hobby;
