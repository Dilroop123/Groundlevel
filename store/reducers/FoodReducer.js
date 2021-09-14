import {SET_FOOD} from '../actions/FoodAction';
const initialState = {
  FoodData: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_FOOD:
      return {
        ...state,
        FoodData: action.foodData,
      };
  }
  return state;
};
