/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {Text, View} from 'react-native';

const Ingredients = ({name, color}) => {
  return (
    <View
      style={{
        backgroundColor: color,
        padding: 5,
        borderRadius: 10,
        marginLeft: 5,
      }}>
      <Text style={{textAlign: 'center'}}>{name}</Text>
    </View>
  );
};

export default Ingredients;
