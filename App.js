/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScreen from './screens/ProfileScreen';
import ProductScreen from './screens/ProductScreen';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/AntDesign';
import ItemScreen from './screens/ItemScreen';
import CheckOutScreen from './screens/CheckOutScreen';
import { Provider } from 'react-redux';
import store from './redux/store';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const TopTab = createMaterialTopTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false
    }}>
      <Tab.Screen name="Product" component={TopTabs} options={{
        tabBarIcon: ({ color }) => (
          <Icon name="profile" size={30} color="#035efc" />
        )
      }}/>
      <Tab.Screen name="Profile" component={ProfileScreen} options={{
        tabBarIcon: ({ color }) => (
          <Icon name="user" size={30} color="#035efc" />
        )
      }}/>
    </Tab.Navigator>
  );
}

function TopTabs() {
  return (
    <TopTab.Navigator >
      <TopTab.Screen name="Jewelery" component={ItemScreen} initialParams={{category:'jewelery'}}/>
      <TopTab.Screen name="Electronics" component={ItemScreen} initialParams={{category:'electronics'}}/>
    </TopTab.Navigator>
  );
}



const App = () => {
  

  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
    headerShown: false
  }}>
        <Stack.Screen name="HomeTabs" component={HomeTabs}/>
        <Stack.Screen name="CheckOut" component={CheckOutScreen} route={'CheckOut'} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );

};

export default App;
