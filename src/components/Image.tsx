import React from "react";
import { css } from "emotion";

const Image = (props: { imgSrc: string }) => {
  const { imgSrc } = props;
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
      <img src={imgSrc} alt="" />
    </div>
  );
};

export default Image;
