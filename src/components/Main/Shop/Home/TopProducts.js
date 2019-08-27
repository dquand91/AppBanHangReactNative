import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import GridView from 'react-native-super-grid';
import {localhost} from '../../../../api/apiAddress';
// import console = require('console');

// Lấy ra chiều rộng của màn hình
const {width} = Dimensions.get('window');

const imageUrl = `http://${localhost}/AppBanHangServer/images/product/`;

export default class TopProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <Text style={styles.textStyle}>TOP PRODUCTS</Text>
        <GridView
          // itemDimension là props của thư viện, để định min size chiều ngang or dọc cho 1 item
          itemDimension={130}
          // Danh sách items, có thể thay thế = api ở chỗ này
          items={this.props.myTopProducts}
          renderItem={({item}) => {
            console.log(item.images);
            return (
              <TouchableOpacity
                key={item.id}
                onPress={() =>
                  this.props.myNavigation.navigate('ProductDetails_Screen', {
                    product: item,
                  })
                }>
                {/* {console.log(imageUrl + item.images[0])} */}
                <View style={styles.wrapper2}>
                  <Image
                    source={{uri: imageUrl + item.images[0]}}
                    style={styles.imageStyle}
                  />
                  <Text style={styles.productName}>{item.name}</Text>
                  <Text style={styles.productPrice}>{item.price}$</Text>
                </View>
              </TouchableOpacity>
            );
          }}
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
