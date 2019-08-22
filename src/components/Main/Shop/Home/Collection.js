import React, {Component} from 'react';
import {View, Text, Image, Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get('window');

export default class Collection extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <Text style={styles.textStyle}>SPRING COLLECTION</Text>
        <Image
          source={require('../../../../assets/temp/banner.jpg')}
          style={styles.imageStyle}
        />
      </View>
    );
  }
}

// width - 30: 30 ở đây là khoảng cách 2 cạnh bên của hình so với viền điện thoại
//933 x 465 là kích thước của tấm hình
const imageWidth = width - 30;
const imageHeight = (width / 933) * 465;

const styles = StyleSheet.create({
  wrapper: {
    //   Để chỉnh độ đổ bóng của View
    shadowColor: '#2E272B',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.2,

    // Bo viền của View
    borderRadius: 6,
    padding: 10,
    margin: 5,
    backgroundColor: 'white',
  },
  imageStyle: {
    width: imageWidth,
    height: imageHeight,
    alignSelf: 'center',
  },
  textStyle: {
    color: 'gray',
    marginBottom: 10,
    fontSize: 20,
  },
});
