import React, {Component} from 'react';
import {Text, View} from 'react-native';

export default class Order extends Component {
  render() {
    return (
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          flex: 1,
          backgroundColor: 'saddlebrown',
        }}>
        <Text>Order</Text>
      </View>
    );
  }
}
