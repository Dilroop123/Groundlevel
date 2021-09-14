/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {Text, View, TextInput, FlatList} from 'react-native';
import {SCREEN_HEIGHT} from '../../style/dimensions';

import {useSelector, useDispatch} from 'react-redux';
import Post from './Components/Post';
import Comment from './Components/Comment';

import color from '../../style/color';
import * as NewsAction from '../../store/actions/NewsAction';
import Button from './Components/Button';
const One = () => {
  const comments = useSelector(state => state.news.CommentData);
  const ask = useSelector(state => state.news.AskData);
  const [inputComments, setInputComments] = React.useState([]);
  const [value, setValue] = React.useState('');
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(NewsAction.getComment());
    dispatch(NewsAction.getAsk());
  }, [dispatch]);

  React.useEffect(() => {
    const firstComment = {text: comments?.text, id: 1, by: comments?.by};

    setInputComments([firstComment]);
  }, [comments]);

  const onPressHander = () => {
    setInputComments([
      ...inputComments,
      {text: value, id: inputComments?.length + 1, by: 'Morgan Steeve'},
    ]);

    setValue('');
  };

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
      <View style={{flexDirection: 'row', padding: 5, alignItems: 'center'}}>
        <TextInput
          value={value}
          placeholder="Enter New Comment"
          onChangeText={setValue}
          style={{
            height: SCREEN_HEIGHT * 0.06,
            borderRadius: SCREEN_HEIGHT * 0.01,
            borderColor: color.lightGrey,
            borderWidth: 1,
            paddingLeft: 10,
            flexGrow: 1,
            fontSize: SCREEN_HEIGHT * 0.02,
          }}
          underlineColorAndroid="transparent"
        />
        <Button onPress={onPressHander} />
      </View>

      {/* This is comment Section*/}
      {/* <Comment comments={comments} /> */}

      <FlatList
        data={inputComments}
        extraData={inputComments}
        keyExtractor={item => item?.id}
        renderItem={({item: comment}) => <Comment comments={comment} />}
      />
    </View>
  );
};

export default One;
