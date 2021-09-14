/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Card} from 'react-native-elements';
import {Text, View, Image} from 'react-native';

import color from '../../../style/color';

import {SCREEN_HEIGHT} from '../../../style/dimensions';

const Comment = ({comments}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        padding: SCREEN_HEIGHT * 0.05,
      }}>
      <Image
        style={{
          height: SCREEN_HEIGHT * 0.05,
          width: SCREEN_HEIGHT * 0.05,
          marginTop: SCREEN_HEIGHT * 0.05,
        }}
        source={require('../../../assets/man.png')}
      />
      <Card containerStyle={{padding: SCREEN_HEIGHT * 0.01, borderRadius: 10}}>
        <View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontWeight: 'bold', color: color.black}}>
              {comments?.by}
            </Text>
            <Text style={{marginLeft: 10, color: color.grey}}>2 hours ago</Text>
          </View>
          <View style={{flexGrow: 1}}>
            <Text>{comments?.text}</Text>
          </View>
        </View>
      </Card>
    </View>
  );
};

export default Comment;
