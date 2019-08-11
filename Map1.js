
import React, { Component } from 'react';


import { StyleSheet, View, Modal, Image } from 'react-native';

import ImageViewer from 'react-native-image-zoom-viewer';
//import ImageViewer which will help to get zoom Image

export default class Map1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModelVisible: true,
    };
  }
  ShowModalFunction(visible) {
    this.setState({ isModelVisible: false });
  }

  render() {

    const images = [{url: 'https://i.ibb.co/ZxpMmTW/map.jpg',},];
    return (


      <View style={styles.MainContainer}>

        <Modal
          visible={this.state.isModelVisible}
          transparent={false}
          onRequestClose={() => this.ShowModalFunction()}>
          <ImageViewer imageUrls={images} />
        </Modal>

      </View>

    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    alignItems: 'center',
  },
});
