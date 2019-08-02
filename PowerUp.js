
import React, {Fragment} from 'react';
import {
  StatusBar,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Image,
  ImageBackground
} from 'react-native';

export default class PowerUp extends React.Component {
  render() {
    return (
      <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
      <ScrollView
          contentInsetAdjustmentBehavior="automatic">
            <ImageBackground source={require('./src/images/PowerUp/BACKG3.png')} 
            style={{
              width: '100%',
              flex:1,
              height: '100%',
              resizeMode: 'cover',
              }}>

              <View style={{
                alignItems:'center',
                justifyContent: 'center',
                resizeMode: 'contain',
                padding:10,
                paddingRight:0,
                paddingTop:10
              }}>
                <Image source={require('./src/images/PowerUp/adtl_logo_white_2019-08-01/adtl_logo_white.png')} />
              </View>
              
              <View style={{
                alignItems: 'center',
              justifyContent: 'center'
              }} >
                  

                <View style={{
                    paddingBottom:20
                }}>
                    <Image source={require('./src/images/PowerUp/ps_logo_white_2019-08-01/ps_logo_white.png')} />
                </View>
                <View style={{
                    paddingBottom:10
                }}>
                    <Image source={require('./src/images/PowerUp/phase_shift_2019_2019-08-01/phase_shift_2019.png')} />
                </View>
                <View style={{
                    paddingBottom:18
                }}>
                    <Image source={require('./src/images/PowerUp/september_14_th_15_th_2019-08-01/september_14_th_15_th.png')} />
                </View>
                <View style={{
                    paddingBottom:29
                }}>
                    <Image source={require('./src/images/PowerUp/energy_sustainability_2019-08-01/energy_sustainability.png')} />
                </View>
                //
                <View style={{
                    paddingBottom:45
                }}>
                    <Image source={require('./src/images/PowerUp/button_cta_2019-08-01/button_cta.png')} />
                </View>
              </View>

                
                </ImageBackground>
        </ScrollView>
        </SafeAreaView>
      </Fragment>
        
      
    );
  }
}