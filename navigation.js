
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
  StatusBar,
} from 'react-native';
import { Icon } from 'react-native-elements';
import {createMaterialTopTabNavigator} from 'react-navigation';

import {Events} from './src/components/Events.js'
import {Workshop} from './src/components/Workshop'
import {Map} from './src/components/Map'
import {Schedule} from './src/components/Schedule'

export default class App extends React.Component{
 render(){
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1, backgroundColor: '#213368'}}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic">
            
            <AppTabNavigator />
          
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  );
 }
}



const AppTabNavigator = createMaterialTopTabNavigator({
  Events: {
    screen:Events,
    navigationOption:{
      tabBarLabel: 'Events',
      tabBarIcon:({tintColor})=>(
        <Icon name="event" color="white" size={30} />
      )
    }
  },
  Workshop: {
    screen: Workshop,
    navigationOption:{
      tabBarLabel: 'Workshops',
      tabBarIcon:({tintColor})=>(
        <Icon name="store" color="white" size={30} />
       ) }},
  Map: {
    screen: Map,
    navigationOption:{
      tabBarLabel: 'Map',
      tabBarIcon:({tintColor})=>(
        <Icon name="explore" color="white" size={30} />
       ) }},
  Schedule: {
    screen : Schedule,
    navigationOption:{
      tabBarLabel: 'Schedules',
      tabBarIcon:({tintColor})=>(
        <Icon name="schedule" color="white" size={30} />
       ) }}
}, {
    initialRouteName: 'Workshop',
    order: ['Workshop', 'Events', 'Schedule', 'Map'],
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: 'rgba(34, 189, 239, 0.99)',
      inactiveTintColor: 'white',
      style: {
        backgroundColor: '#213368',
        borderTopWidth: 0.5
      },
      indicatorStyle: {
        height: 0
      },
      showIcons: true

    }
})
