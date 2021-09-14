export const SET_FOOD = 'SET_FOOD';

export const getFood = () => {
  return async dispatch => {
    const response = await fetch('https://foodish-api.herokuapp.com/api/');

    const responseData = await response.json();

    dispatch({type: SET_FOOD, foodData: responseData});
  };
};
