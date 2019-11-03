import * as React from 'react';
import { View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

//page import
import Categories from './Categories';
import News from './News';
import Details from './Details';

const stack = createStackNavigator({
  categories: {
    screen: Categories
  },
  news: {
    screen: News
  },
   details: {
    screen: Details
  },
}, {initialRouteName:'categories'});


export default createAppContainer(stack);