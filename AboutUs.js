
import React, {Fragment} from 'react';
import {
  StatusBar,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ImageBackground
} from 'react-native';

export default class AboutUs extends React.Component {
  render() {
    return (
      <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
      <ScrollView
          contentInsetAdjustmentBehavior="automatic">
            <ImageBackground source={require('./src/images/BACKG2.png')} 
            style={{
              width: '100%',
              flex:1,
              height: '100%',
              resizeMode: 'cover',
              }}>

              <View style={{
                alignItems:'flex-end',
                resizeMode: 'contain',
                padding:10,
                paddingRight:0,
                paddingTop:3
              }}>
                <Image source={require('./src/images/ps_logo_white_2019-07-31/ps_logo_white.png')} />
              </View>
              
              <View style={{
                alignItems: 'center',
              justifyContent: 'center'
              }} >
                  

                <View style={{
                    paddingBottom:45
                }}>
                    <Image source={require('./src/images/about_us_2019-07-31/about_us.png')} />
                </View>

                <View style={{
                    padding:28,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Text style={{
                    letterSpacing:0.16,
                    textAlign:'auto',
                    fontStyle: 'Poppins-ExtraLight',
                    paddingLeft: 9,
                    fontSize: 18,
                    color: '#fff'
                    }}>
                            Phase Shift is an annual tech 
                            symposium of BMS College Of 
                            Engineering and is one of the 
                            largest of its kind in South India. 
                            It encourages budding 
                            engineering students to exhibit 
                            their talents and demonstrate 
                            skills through competitions and 
                            workshops. It aims to coalesce 
                            ideas from industry in order to 
                            achieve high level of skill to help 
                            the students emerge as globally 
                            competent professionals. 
                            Participation of many industry 
                            experts and professionals 
                            creates a congenial 
                            atmosphere that knits learning
                            and fun.

                        </Text>
                  </View>
                </View>
                    <View style={{
                              padding:35,
                              flex: 1,
                              flexWrap: 'wrap', 
                              justifyContent:'space-between', 
                              flexDirection:'row',
                        }}>
                          <View>
                            <TouchableOpacity onPress={() => Linking.openURL('https://www.google.com/')}>
                                <Image source={require('./src/images/button_cta_2019-07-31/button_cta.png')} 
                                      style={{alignSelf: 'flex-start'}} />
                            </TouchableOpacity>
                          </View>
                    
                          <View>
                            <TouchableOpacity onPress={() => Linking.openURL('https://www.google.com/')}>
                                <Image source={require('./src/images/button_cta_2019-07-312/button_cta.png')} 
                                      style={{alignSelf: 'flex-end'}} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>
        </ScrollView>
        </SafeAreaView>
      </Fragment>
        
      
    );
  }
}
