
import React, {Fragment} from 'react';
import {
  StatusBar,
  ScrollView,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import {createMaterialTopTabNavigator} from 'react-navigation';
import AppTeamNumbers from './src/components/AppTeamNumbers';
import CoreNumbers from './src/components/CoreNumbers';

export default class TeamPage extends React.Component {


  render() {
    return (
      <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
      <ScrollView
          contentInsetAdjustmentBehavior="automatic">
            <ImageBackground source={require('./src/images/BACKG5.png')} 
            style={{
              width: '100%',
              flex:1,
              height: '100%',
              resizeMode: 'cover',
              }}>
            
                    <AppTabNavigator />

                </ImageBackground>
        </ScrollView>
        </SafeAreaView>
      </Fragment>
        
      
    );
  }
}

const AppTabNavigator = createMaterialTopTabNavigator({
  CoreNumbers: {
    screen:CoreNumbers,
    navigationOption:{
      tabBarLabel: 'Core Team'
      
    }
  },
  AppTeamNumbers: {
    screen: AppTeamNumbers,
    navigationOption:{
      tabBarLabel: 'App Team'
     
      }}
  
}, {
    initialRouteName: 'Workshop',
    order: ['CoreNumbers', 'AppTeamNumbers'],
    tabBarOptions: {
      activeTintColor: 'rgba(34, 189, 239, 0.99)',
      inactiveTintColor: 'white',
      style: {
        backgroundColor: '#213368',
        borderTopWidth: 0.5
      },
      indicatorStyle: {
        height: 0
      }

    }
})
 