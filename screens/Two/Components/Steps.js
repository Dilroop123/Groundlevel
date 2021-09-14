/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {Text, View} from 'react-native';

import color from '../../../style/color';

const Steps = () => {
  return (
    <View>
      <Text style={{fontWeight: 'bold', fontSize: 18}}>Steps</Text>
      <View
        style={{
          backgroundColor: color.lightBlue,
          padding: 10,
          borderRadius: 10,
        }}>
        <Text>
          1) Working with pizza dough is easiest if it’s at room temperature.
        </Text>
        <Text>
          2) Prepare a large floured surface for the dough but start shaping the
          dough with your hands.
        </Text>
        <Text>3) Let the dough rest for five minutes.</Text>
      </View>
    </View>
  );
};

export default Steps;
