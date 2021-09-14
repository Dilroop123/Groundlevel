/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {Text, View} from 'react-native';

import color from '../../../style/color';

import {SCREEN_HEIGHT} from '../../../style/dimensions';

const Post = ({ask}) => {
  return (
    <View
      style={{
        borderWidth: 1,
        padding: SCREEN_HEIGHT * 0.02,
        borderColor: color.lightGrey,
        borderRadius: SCREEN_HEIGHT * 0.02,
        marginTop: SCREEN_HEIGHT * 0.02,
        backgroundColor: color.lightBlue,
      }}>
      <Text style={{textAlign: 'center', fontWeight: 'bold'}}>
        {ask?.title}
      </Text>
      <View
        style={{
          borderBottomColor: color.grey,
          borderBottomWidth: 0.5,
          marginVertical: SCREEN_HEIGHT * 0.02,
        }}
      />
      <Text>{ask?.text}</Text>
    </View>
  );
};

export default Post;
