/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {Text, View} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';
import Post from './Components/Post';
import Comment from './Components/Comment';
import color from '../../style/color';
import * as NewsAction from '../../store/actions/NewsAction';

const One = () => {
  const comments = useSelector(state => state.news.CommentData);
  const ask = useSelector(state => state.news.AskData);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(NewsAction.getComment());
    dispatch(NewsAction.getAsk());
  }, [dispatch]);

  return (
    <View
      style={{paddingHorizontal: 20, backgroundColor: color.white, flex: 1}}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          marginTop: 10,
          color: color.primary,
          textAlign: 'center',
        }}>
        New Post
      </Text>

      {/* This is Post Section*/}
      <Post ask={ask} />

      {/* This is comment Section*/}
      <Comment comments={comments} />
    </View>
  );
};

export default One;
