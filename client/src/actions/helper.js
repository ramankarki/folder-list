import { ERROR } from "./types";

export const errorCreator = (heading, text, dispatch) => {
  dispatch({
    type: ERROR,
    payload: {
      heading,
      text,
    },
  });
};
