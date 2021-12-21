import { ActionType } from "../contant/action-type";
const initialState = {
  producys: [
    {
      id: 1,
      title: "Anil",
      catagory: "Programmer",
    },
  ],
};
export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionType.SET_PRODUCT:
      return state;
    default:
      return state;
  }
};
