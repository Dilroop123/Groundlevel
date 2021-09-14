import {SET_COMMENT, SET_ASK} from '../actions/NewsAction';
const initialState = {
  CommentData: [],
  AskData: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_COMMENT:
      return {
        ...state,
        CommentData: action.commentData,
      };
    case SET_ASK:
      return {
        ...state,
        AskData: action.askData,
      };
  }
  return state;
};
