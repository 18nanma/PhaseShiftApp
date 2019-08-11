import React, {Fragment} from 'react';
import {
  StatusBar,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ImageBackground,
  Animated,
  TouchableWithoutFeedback,
  StyleSheet
} from 'react-native';

import {Header,Left,Right,Icon} from 'native-base';

export default class AboutUs extends React.Component {
  constructor(props){
    super(props);

    this.handlePressIn = this.handlePressIn.bind(this);
    this.handlePressOut = this.handlePressOut.bind(this);
  }
  componentWillMount(){
    this.animatedValue = new Animated.Value(1);
  }
  handlePressIn(){
    Animated.spring(this.animatedValue, {
      toValue: .5
    }).start()
  }
  handlePressOut(){
    Animated.spring(this.animatedValue, {
      toValue: 1,
      friction: 3,
      tension: 40
    }).start()
  }
  render() {
    const animatedStyle = {
      transform: [{scale:this.animatedValue}]
    }
    return (
      <Fragment>
      <StatusBar barStyle="dark-content" />
      <ImageBackground source={require('./assets/BG_2.png')}
      style={{
        width: '100%',
        flex:1,
        height: '100%',
        resizeMode: 'cover',
        }}>
      <SafeAreaView>
      <ScrollView
          contentInsetAdjustmentBehavior="automatic">




              <View style={{

                flex:1,
                padding:15,

                paddingTop:10,
                paddingBottom: 0,
                flexDirection:'row'
              }}>

                <View style={{flex:1,alignItems:'flex-start'}}>
                <Icon name="menu" style={{color:'#fff'}} onPress= {()=>this.props.navigation.openDrawer()}/>

                </View>

                <View style={{flex:1,alignItems:'flex-end'}}>
                <Image source={require('./assets/ps_logo_white_2019-07-31/ps_logo_white.png')}  />

                </View>


              </View>

              <View style={{
                  flex:3,
                  alignItems: 'center',
                  justifyContent: 'center'
              }} >


                <View style={{
                    paddingBottom:20,
                    paddingTop:0
                }}>
                    <Image source={require('./assets/about_us_2019-07-31/about_us.png')} />
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
                    lineHeight:28
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
                          <TouchableWithoutFeedback onPressIn={this.handlePressIn} onPressOut={this.handlePressOut}>
                            <Animated.View style={animatedStyle}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('AboutTheme')}>
                                <Image source={require('./assets/button_cta_2019-07-31/button_cta.png')}
                                      style={{alignSelf: 'flex-start'}} />
                            </TouchableOpacity>
                            </Animated.View>
                            </TouchableWithoutFeedback>
                          </View>

                          <View>
                          <TouchableWithoutFeedback onPressIn={this.handlePressIn} onPressOut={this.handlePressOut}>
                            <Animated.View style={animatedStyle}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('AboutBMSCE')}>
                                <Image source={require('./assets/button_cta_2019-07-312/button_cta.png')}
                                      style={{alignSelf: 'flex-end'}} />
                            </TouchableOpacity>
                            </Animated.View>
                            </TouchableWithoutFeedback>
                        </View>
                    </View>
        </ScrollView>
        </SafeAreaView>
        </ImageBackground>

      </Fragment>


    );
  }
}
