import React, {Fragment} from 'react';
import {
  StatusBar,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Image,
  ImageBackground,
  Dimensions
} from 'react-native';
var { width, height } = Dimensions.get('window');

export default class AboutUs extends React.Component {
  render() {
    return (
      <Fragment>
      <StatusBar barStyle="dark-content" />

      <SafeAreaView>

          <View>
          <Image source={require('./assets/shaft_6.gif')}
        style={{width: width, height:height }} />
          </View>



</SafeAreaView>

</Fragment>


);
}
}
