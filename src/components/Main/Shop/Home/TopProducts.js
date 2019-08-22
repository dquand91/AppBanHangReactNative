import React, {Component} from 'react';
import {View, Text, Image, Dimensions, StyleSheet} from 'react-native';
import GridView from 'react-native-super-grid';

// Lấy ra chiều rộng của màn hình
const {width} = Dimensions.get('window');

export default class TopProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // Lấy các tấm hình từ resource ra
    // Ở đây dùng data local để demo
    const sp1 = require('../../../../assets/temp/sp1.jpeg');
    const sp2 = require('../../../../assets/temp/sp2.jpeg');
    const sp3 = require('../../../../assets/temp/sp3.jpeg');
    const sp4 = require('../../../../assets/temp/sp4.jpeg');
    const sp5 = require('../../../../assets/temp/sp5.jpeg');
    return (
      <View style={styles.wrapper}>
        <Text style={styles.textStyle}>TOP PRODUCTS</Text>
        <GridView
          // itemDimension là props của thư viện, để định min size chiều ngang or dọc cho 1 item
          itemDimension={130}
          // Danh sách items, có thể thay thế = api ở chỗ này
          items={[sp1, sp2, sp3, sp4, sp5]}
          renderItem={item => (
            <View style={styles.wrapper2}>
              <Image source={item} style={styles.imageStyle} />
              <Text style={styles.productName}>Product name</Text>
              <Text style={styles.productPrice}>400$</Text>
            </View>
          )}
        />
      </View>
    );
  }
}

//(width - 60) / 2 ý nghĩa:
//  60 là kích thước 2 cạnh bên tấm hình đến viền của View cha của nó
//  Chia 2 vì mình dùng GridView có 2 cột, nên tách ra làm 2 item mỗi dòng
const imageWidth = (width - 60) / 2;
// 361 và 452 lấy theo kích thước của tấm hình.
const imageHeight = (imageWidth / 361) * 452;

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
  wrapper2: {
    shadowColor: '#2E272B', // for ios
    shadowOffset: {width: 0, height: 3}, //for ios
    shadowOpacity: 0.2,
    borderRadius: 0,
    padding: 0,
    margin: 0,
    backgroundColor: 'white',
    elevation: 8, // shadow for android
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
  productName: {
    fontSize: 18,
    color: 'gray',
    marginLeft: 10,
  },
  productPrice: {
    fontSize: 16,
    color: 'gray',
    marginLeft: 10,
  },
});
