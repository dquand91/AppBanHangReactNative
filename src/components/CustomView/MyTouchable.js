import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export default class MyTouchable extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={() => {
          // Khi gọi cái MyTouchable này sẽ truyền vô 2 tham số 
          //     1. cái tên màn hình cần đến. (inputScreenName)
          //     2. cái navigation. (inputNavigation)
          // Mình sẽ dùng cái navigation vừa truyền vào đó để chuyển đến đúng màn hình
          this.props.inputNavigation.navigate(this.props.inputGoToScreenName);
        }}>
        <View
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            marginTop: 20,
            width: 200,
            padding: 10,
            borderRadius: 4,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'lavender',
          }}>
          {/* Mình sẽ lấy cái props tên màn hình truyền vô ra để chuyển màn hình */}
          <Text style={{color: 'black'}}>
            Go to {this.props.inputGoToScreenName}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}
