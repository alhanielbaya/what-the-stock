import React from "react";
import { css } from "emotion";
import { IImage } from "../types";
import Image from "./Image";
import { Breakpoint } from "react-socks";

const ImageFlex = (props: { imgArr: Array<IImage> }) => {
  const { imgArr } = props;

  function arrToJsx(arr: Array<IImage>) {
    return arr.map((img: IImage, index: number) => {
      return <Image imgSrc={img.src} key={index}></Image>;
    });
  }

  function splitEvenly(arr: Array<IImage>) {
    let arr1: Array<IImage> = [];
    let arr2: Array<IImage> = [];

    arr.forEach((value: IImage, index: number) => {
      if (index % 2 === 0 || index === 0) {
        arr1.push(value);
      } else {
        arr2.push(value);
      }
    });

    return { arr1, arr2 };
  }

  function splitIntoThree(arr: Array<IImage>) {}

  const { arr1: imgArr1, arr2: imgArr2 } = splitEvenly(imgArr);

  return (
    <>
      <Breakpoint small down>
        <div
          className={css`
            display: flex;
            flex-flow: column nowrap;
            justify-content: center;
            align-items: center;
          `}
        >
          {arrToJsx(imgArr)}
        </div>
      </Breakpoint>

      <Breakpoint medium only>
        <div
          className={css`
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 0 1rem;
            // .images1,
            // .images2 {
            //   width: 50%;
            // }
          `}
        >
          <div className="images1">{arrToJsx(imgArr1)}</div>
          <div className="images2">{arrToJsx(imgArr2)}</div>
        </div>
      </Breakpoint>
    </>
  );
};

export default ImageFlex;
