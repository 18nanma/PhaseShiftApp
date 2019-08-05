
import React, {Fragment} from 'react';
import {
  StatusBar,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


export default class Schedule extends React.Component {
  render() {
    return (
      <Fragment>
      <StatusBar barStyle="dark-content" />
        <LinearGradient colors={['#E38217','#00008B']}> //#00F5FF     

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
              justifyContent: 'center'
              }} >
                  

                <View style={{
                    paddingBottom:45
                }}>
                    <Image source={require('./src/images/schedule_2019-08-02/schedule.png')} />
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
                    color: '#fff',
                    lineHeight: 28
                    }}> Info will be updated soon......
                            
                        </Text>
                    </View>
               </View>
            </ScrollView>
          </SafeAreaView>
        </LinearGradient>
      </Fragment>
        
      
    );
  }
}