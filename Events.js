
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

export default class App extends React.Component {
  render() {
    return (
      <Fragment>
      <StatusBar barStyle="dark-content" />
      <ImageBackground source={require('./src/images/BACKG5.png')}
            style={{
              flex:1
              }}>
      <SafeAreaView>
      <ScrollView
          contentInsetAdjustmentBehavior="automatic">

              <View style={{
                alignItems:'flex-end',
                resizeMode: 'contain',
                padding:10,
                paddingRight:0,
                paddingTop:10
              }}>
                <Image source={require('./src/images/ps_logo_white_2019-07-31/ps_logo_white.png')} />
              </View>

              <View style={{
                alignItems: 'center',
                justifyContent: 'center',

              }} >


                <View style={{
                    paddingBottom:45
                }}>
                    <Image source={require('./src/images/events_2019-08-02/events.png')} />
                </View>

                <View style={{
                    padding:28,
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '80%',
                    height: '80%',
                    backgroundColor: 'rgba(0,0,0,0.4)',
                    paddingBottom: '40%',
                    paddingTop: '40%'

                }}>
                    <Text style={{
                    letterSpacing:0.16,
                    textAlign:'auto',
                    fontStyle: 'Poppins-ExtraLight',
                    paddingLeft: 9,
                    fontSize: 16,
                    color: '#fff',
                    lineHeight: 28,

                    }}> Info will be updated soon......

                        </Text>
                    </View>
               </View>


            </ScrollView>
          </SafeAreaView>
          </ImageBackground>
      </Fragment>


    );
  }
}
