
          import React, {Fragment} from 'react';
          import {
            StatusBar,
            Dimensions,
            TouchableOpacity,
            TouchableHighlight,
            View,
            ScrollView,
            SafeAreaView,
            Image,
            ImageBackground,
            Alert,
            Button
          } from 'react-native';
          import {
            widthPercentageToDP as wp,
            heightPercentageToDP as hp,
            listenOrientationChange as loc,
            removeOrientationListener as rol
          } from 'react-native-responsive-screen';
          var { width, height } = Dimensions.get('window');

          export default class LandingPage extends React.Component {
            componentDidMount() {
              loc(this);
            }

            componentWillUnMount() {
              rol();
            }
            _simpleAlertHandler=()=>{
              //function to make simple alert
              alert('Please use screen in Portrait Mode');
            }


            render() {
              return (
                <Fragment>
                <StatusBar barStyle="dark-content" />
                <ImageBackground source={require('./assets/NNN.jpeg')}
                style={{
                  width: '100%',
                  flex:1,
                  height: '100%',
                  resizeMode: 'cover',
                  }}>
                <SafeAreaView>
                <View style={{color:'darkblue',width:wp('19%'), height: hp('3%'), borderRadius: 20}}>
                  {/*To generate simple alert*/}
                  <Button title='Alert' onPress={this._simpleAlertHandler} style={{color:'white'}}/>
                </View>


                <TouchableOpacity>
                  <View style={{paddingTop: '0%', paddingLeft: '63%'}}>
                    <View style={{backgroundColor: 'rgba(36,106,128,0.1)',  width:wp('19%'), height: hp('7%'), borderRadius: 100}}>
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity>
                  <View style={{paddingTop: '0%', paddingLeft: '10%'}}>
                    <View style={{backgroundColor: 'rgba(36,106,128,0.1)',width:wp('25%'), height: hp('15%'), borderRadius: 100}}>
                    </View>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity>
                  <View style={{ paddingLeft: '75%', paddingTop: '0%'}}>
                    <View style={{backgroundColor: 'rgba(36,106,128,0.1)', width:wp('22%'), height: hp('15%'), borderRadius: 100}}>
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity>
                  <View style={{paddingTop: '4%', paddingLeft: '4%'}}>
                    <View style={{backgroundColor: 'rgba(36,106,128,0.1)', width:wp('19%'), height: hp('15%'), borderRadius: 100}}>
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity>
                  <View style={{paddingTop: '8%', paddingLeft: '80%'}}>
                    <View style={{backgroundColor: 'rgba(36,106,128,0.1)' ,width:wp('15%'), height: hp('15%'), borderRadius: 100}}>
                    </View>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity>
                  <View style={{ paddingLeft: '4%', paddingTop: '-5%'}}>
                    <View style={{backgroundColor: 'rgba(36,106,128,0.1)', width:wp('25%'), height: hp('8%'), borderRadius: 100}}>
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity>
                  <View style={{ paddingLeft: '44%', paddingTop: '-5%'}}>
                    <View style={{backgroundColor: 'rgba(36,106,128,0.1)', width:wp('20%'), height: hp('18%'), borderRadius: 100}}>
                    </View>
                  </View>
                </TouchableOpacity>

                  </SafeAreaView>
                  </ImageBackground>

                </Fragment>


              );
            }
          }
