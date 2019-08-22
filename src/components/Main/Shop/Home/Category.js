import React, {Component} from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import Swiper from 'react-native-swiper';

// Để lấy được kích thước của màn hình hiển thị
const {width} = Dimensions.get('window');
// Hình theo tỉ lệ 16/9 (16div9)
const imageWidth = width - 30;
const imageHeight = imageWidth / (16 / 9);

export default class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <Text style={styles.textStyle}>LIST OF CATEGORY</Text>
        {/* Sử dụng thư viện react-native-swiper */}
        {/* Sẽ tạo ra 1 slideShow image */}
        {/* Có thể thêm các thuộc tính khác cho cái Swiper đây, hiện tại chỉ set 3 thuộc tính cơ bản */}
        <Swiper width={imageWidth} height={imageHeight} autoplay={true}>
          <ImageBackground
            source={require('../../../../assets/temp/fit.jpg')}
            style={styles.imageStyle}>
            <Text style={styles.textStyle2}>Fit Dress</Text>
          </ImageBackground>
          <ImageBackground
            source={require('../../../../assets/temp/little.jpg')}
            style={styles.imageStyle}>
            <Text style={styles.textStyle2}>Little Dress</Text>
          </ImageBackground>
          <ImageBackground
            source={require('../../../../assets/temp/maxi.jpg')}
            style={styles.imageStyle}>
            <Text style={styles.textStyle2}>Maxi Dress</Text>
          </ImageBackground>
          <ImageBackground
            source={require('../../../../assets/temp/midi.jpg')}
            style={styles.imageStyle}>
            <Text style={styles.textStyle2}>Midi Dress</Text>
          </ImageBackground>
          <ImageBackground
            source={require('../../../../assets/temp/mini.jpg')}
            style={styles.imageStyle}>
            <Text style={styles.textStyle2}>Mini Dress</Text>
          </ImageBackground>
          <ImageBackground
            source={require('../../../../assets/temp/party.jpg')}
            style={styles.imageStyle}>
            <Text style={styles.textStyle2}>Party Dress</Text>
          </ImageBackground>
        </Swiper>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    shadowColor: '#2E272B',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.2,
    borderRadius: 6,
    padding: 10,
    margin: 5,
    backgroundColor: 'white',
  },
  imageStyle: {
    width: imageWidth,
    height: imageHeight,
    // Để canh image ở giữa so với cái view cha của nó
    alignSelf: 'center',

    // Để canh các item con bên trong tấm hình ở giữa
    // Ví dụ: chữ bên trong tấm hình
    justifyContent: 'center',
  },
  textStyle: {
    color: 'gray',
    marginBottom: 10,
    fontSize: 20,
  },
  textStyle2: {
    color: 'gray',
    fontSize: 20,
    alignSelf: 'center',
  },
});
