import React, { useEffect } from "react";
import ImageFlex from "../components/ImageFlex";
import env from "../secrets";
import { useDispatch, useSelector } from "react-redux";
import Unsplash from "unsplash-js";
import {
  REQUEST_IMAGES_PENDING,
  REQUEST_IMAGES_SUCCESS,
  IState,
} from "../store/state";
import Loading from "react-loading";
import { IImage } from "../types";

const ImageFLexContainer = () => {
  const dispatch = useDispatch();
  const pending = useSelector((state: IState) => state.pending);
  const imgArr = useSelector((state: IState) => state.imgArr);
  const unsplash = new Unsplash({ accessKey: env.API_KEY });

  useEffect(() => {
    dispatch({ type: REQUEST_IMAGES_PENDING });
    unsplash.search
      .photos("creepy", 1, 20, { orientation: "portrait" })
      .then((res) => res.json())
      .then((json: { results: IImage[] }) => {
        dispatch({ type: REQUEST_IMAGES_SUCCESS, payload: json.results });
        console.log(json);
      });
  }, []);

  return pending ? <Loading /> : <ImageFlex imgArr={imgArr} />;
};

export default ImageFLexContainer;
