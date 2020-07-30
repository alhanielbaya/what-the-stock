import React from 'react';
import { css } from 'emotion';
import { IImage } from '../types';
import Image from './Image';

const ImageFlex = (props: { imgArr: Array<IImage> }) => {
  const { imgArr } = props;
  return (
    <>
      <div
        className={css`
          display: grid;
          justify-content: center;
          align-items: center;
          gap: 16px 16px;
          grid-template-columns: 1fr 1fr;
          grid-template-row: auto;
        `}
      >
        {imgArr.map((img: IImage) => {
          return <Image imgSrc={img.src}></Image>;
        })}
      </div>
    </>
  );
};

export default ImageFlex;
