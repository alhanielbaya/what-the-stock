import React from "react";
import { css } from "emotion";
import { IImage } from "../types";
import Image from "./Image";
import { Breakpoint } from "react-socks";

const ImageFlex = (props: { imgArr: Array<IImage> }) => {
  const { imgArr } = props;

  function arrToJsx(arr: Array<IImage>) {
    return arr.map((img: IImage, index: number) => {
      return (
        <Image
          imgSrc={img.urls.small}
          alt={img.alt_description}
          key={index}
        ></Image>
      );
    });
  }

  function splitEvenly(arr: Array<IImage>) {
    let arr1: IImage[] = [];
    let arr2: IImage[] = [];

    arr.forEach((value: IImage, index: number) => {
      if (index % 2 === 0 || index === 0) {
        arr1.push(value);
      } else {
        arr2.push(value);
      }
    });

    return { arr1, arr2 };
  }

  function splitEvenlyIntoThree(arr: Array<IImage>) {
    let arr1: IImage[] = [];
    let arr2: IImage[] = [];
    let arr3: IImage[] = [];

    arr.forEach((value: IImage, index: number) => {
      if ((index + 1) % 3 === 0) {
        arr3.push(value);
      } else if (index % 2 === 0 || index === 0) {
        arr1.push(value);
      } else {
        arr2.push(value);
      }
    });

    return { arr1, arr2, arr3 };
  }

  const { arr1: mediumImgArr1, arr2: mediumImgArr2 } = splitEvenly(imgArr);
  const {
    arr1: largeImgArr1,
    arr2: largeImgArr2,
    arr3: largeImgArr3,
  } = splitEvenlyIntoThree(imgArr);

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
          <div className="images1">{arrToJsx(mediumImgArr1)}</div>
          <div className="images2">{arrToJsx(mediumImgArr2)}</div>
        </div>
      </Breakpoint>

      <Breakpoint large up>
        <div
          className={css`
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 0 1rem;

            .images1 {
              grid-column: 1 / 2;
            }
          `}
        >
          <div className="images1">{arrToJsx(largeImgArr1)}</div>
          <div className="images2">{arrToJsx(largeImgArr2)}</div>
          <div className="images3">{arrToJsx(largeImgArr3)}</div>
        </div>
      </Breakpoint>
    </>
  );
};

export default ImageFlex;
