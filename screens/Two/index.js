/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {Text, View, Image} from 'react-native';
import {SCREEN_HEIGHT} from '../../style/dimensions';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useSelector, useDispatch} from 'react-redux';
import color from '../../style/color';

import * as FoodAction from '../../store/actions/FoodAction';
import Ingredients from './Components/Ingredients';
import Steps from './Components/Steps';

const Two = () => {
  const food = useSelector(state => state.food.FoodData);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(FoodAction.getFood());
  }, [dispatch]);
  return (
    <View>
      <Image
        style={{height: SCREEN_HEIGHT * 0.35, width: '100%'}}
        source={{uri: food?.image}}
      />
      <View
        style={{
          borderRadius: 12,
          padding: 10,
          backgroundColor: color.white,
          bottom: 30,
        }}>
        <Text style={{fontWeight: 'bold', fontSize: 18, marginTop: 10}}>
          Food item from Foodish
        </Text>
        <Text style={{color: color.red, marginTop: 10, fontWeight: 'bold'}}>
          $ 25.89
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <FontAwesome name="star" size={25} color={color.red} />
            <Text
              style={{
                marginLeft: 5,
                fontWeight: 'bold',
              }}>
              4.5
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <MaterialIcons name="delivery-dining" size={25} color={color.red} />
            <Text
              style={{
                marginLeft: 5,
                fontWeight: 'bold',
              }}>
              25
            </Text>
          </View>
        </View>

        <Text style={{marginTop: 10}}>
          This is the image that has been rendered by using get request from the
          foodish heroku .If you want to load new image you can refresh the
          screen
        </Text>
        <View style={{marginTop: 10}}>
          <Text style={{fontWeight: 'bold', fontSize: 18}}>Ingredients</Text>

          <View
            style={{
              flexDirection: 'row',
              marginTop: 10,
            }}>
            <Ingredients name="Gouda" color="#FFF0EB" />
            <Ingredients name="Blue" color="#EBFFED" />
            <Ingredients name="Provolone" color="#FFEBF8" />
          </View>

          <View
            style={{
              flexDirection: 'row',
              marginTop: 10,
            }}>
            <Ingredients name="Swiss" color="#EBFFED" />
            <Ingredients name="Blue" color="#FFF0EB" />
            <Ingredients name="Provolone" color="#FFEBF8" />
          </View>

          <Steps />
        </View>
      </View>
    </View>
  );
};

export default Two;
