import React from "react";
import { css } from "emotion";

const Image = (props: { imgSrc: string; alt: string }) => {
  const { imgSrc, alt } = props;
  return (
    <div
      className={css`
        width: 100%;
        margin: 1rem 0;
        img {
          width: 100%;
        }
      `}
    >
      <img src={imgSrc} alt={alt} />
    </div>
  );
};

export default Image;
