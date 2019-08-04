
import React, {Fragment} from 'react';
import {
  StatusBar,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Image,
  ImageBackground,
  TouchableOpacity,
  Modal
} from 'react-native';

export default class TeamPage extends React.Component {
constructor(){
  super()
  this.state={
    showMe: true
  }
}

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
                    <Image source={require('./src/images/team_2019-08-04/team.png')} />
                </View>

             <View style={{
                alignItems: 'center',
              justifyContent: 'center'
              }}>   
              <Modal visible={this.state.showMe}
              onRequestClose={() => console.warn("this is a close request")}>
                <View>
                  <TouchableOpacity onPress={()=>{
                    this.setState({
                      showMe: true
                    })
                  }}>
                    <Text style={{
                      fontColor: 'white',
                      backgroundColor:'#213368',
                      borderRadius:8,
                      padding:7
                    }}>Core Committee</Text>
                  </TouchableOpacity>
                  <View style={{
                    backgroundColor: '#213368',
                    flex:1,
                    borderRadius:9,
                    padding:20,
                    paddingBottom:30,
                    color:'white'
                  }}>
                    <Text>members</Text>
                    
                  </View>
                </View>
              </Modal>
                <View>
                  <TouchableOpacity  onPress={()=>{
                    this.setState({
                      showMe: false
                    })
                  }}>>
                    <Text style={{
                      fontColor: 'white',
                      backgroundColor:'#213368',
                      borderRadius:8,
                      padding:7,
                      color:'white'
                    }}>App Team</Text>
                  </TouchableOpacity>
                </View>
                <View style={{
                    backgroundColor: '#213368',
                    flex:1,
                    borderRadius:9,
                    padding:20,
                    paddingBottom:30,
                    color:'white'
                  }}>
                    <Text>Prajwal
                      Nanma
                    </Text>
                    
                  </View>
               
              </View>
                
               </View>

                </ImageBackground>
        </ScrollView>
        </SafeAreaView>
      </Fragment>
        
      
    );
  }
}