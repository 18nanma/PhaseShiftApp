
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {Events} from './src/components/Events.js'
import {Workshop} from './src/components/Workshop'
import {Map} from './src/components/Map'
import {Schedule} from './src/components/Schedule'

export default class App extends React.Component{
 render(){
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic">
            <View>
              <Text> Bottom Navigation bar</Text>
            </View>
          
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  );
 }
}



const AppTabNavigator default createMaterialBottomTabNavigator({
  Events: {
    screen:Events,
    navigationOption:{
      tabBarLabel: 'Events'
    }
  },
  Workshop: {
    screen: Workshop,
    navigationOption:{
      tabBarLabel: 'Workshops'
    }},
  Map: {
    screen: Map,
    navigationOption:{
      tabBarLabel: 'Map'
    }},
  Schedule: {
    screen : Schedule,
    navigationOption:{
      tabBarLabel: 'Schedules'
    }}
}, {
    initialRouteName: 'Workshop',
    order: ['Workshop', 'Events', 'Schedule', 'Map'],
    activeTintColor: 'blue',
    barStyle: {backgroundColor: '#213368'},
    shifting: true

})