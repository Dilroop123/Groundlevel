export const SET_COMMENT = 'SET_COMMENT';
export const SET_ASK = 'SET_ASK';

export const getComment = () => {
  return async dispatch => {
    const response = await fetch(
      'https://hacker-news.firebaseio.com/v0/item/2921983.json?print=pretty',
    );

    const responseData = await response.json();

    dispatch({type: SET_COMMENT, commentData: responseData});
  };
};

export const getAsk = () => {
  return async dispatch => {
    const response = await fetch(
      'https://hacker-news.firebaseio.com/v0/item/121003.json?print=pretty',
    );

    const responseData = await response.json();

    dispatch({type: SET_ASK, askData: responseData});
  };
};
