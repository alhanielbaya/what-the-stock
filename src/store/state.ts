import { IImage } from "../types";

export const REQUEST_IMAGES_PENDING = "REQUEST_IMAGES_PENDING";
export const REQUEST_IMAGES_SUCCESS = "REQUEST_IMAGES_SUCCESS";

const initialState = {
  imgArr: [],
  pending: false,
};

interface props {
  type: string;
  payload: any;
}

export const stateReducer = (state = initialState, action: props) => {
  switch (action.type) {
    case REQUEST_IMAGES_PENDING:
      return { ...state, pending: true };
    case REQUEST_IMAGES_SUCCESS:
      return { ...state, pending: false, imgArr: action.payload };
    default:
      return state;
  }
};

export interface IState {
  imgArr: IImage[];
  pending: boolean;
}
