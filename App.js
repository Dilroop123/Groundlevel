import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import TabNavigation from './navigation/Navigation';
import {StatusBar} from 'react-native';

import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';

import newsReducer from './store/reducers/NewsReducer';
import foodReducer from './store/reducers/FoodReducer';

const rootReducer = combineReducers({
  news: newsReducer,
  food: foodReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar hidden={true} />
      <Provider store={store}>
        <TabNavigation />
      </Provider>
    </NavigationContainer>
  );
};

export default App;
