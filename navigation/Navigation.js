import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import One from '../screens/One';
import Two from '../screens/Two';
const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        options={{
          tabBarLabel: 'Post',
          tabBarIcon: ({color, size}) => (
            <FontAwesome name="home" color={color} size={size} />
          ),
        }}
        name="One"
        component={One}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Food',
          tabBarIcon: ({color, size}) => (
            <FontAwesome name="cutlery" color={color} size={size} />
          ),
        }}
        name="Two"
        component={Two}
      />
    </Tab.Navigator>
  );
}
