import React, {Component} from 'react';
import {Text, View, Platform} from 'react-native';
import MyTouchable from '../CustomView/MyTouchable';
export default class Main extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          flex: 1,
          backgroundColor: 'lightskyblue',
          marginTop: Platform.OS === 'ios' ? 30 : 0,
        }}>
        <View>
          <Text style={{color: '#ff0080'}}> Main component </Text>
          {/* MyTouchable là do mình custom, cần 2 props (tham số)
          inputNavigation: để chứa cái navigation
          inputScreenName: để chứa cái tên màn hình muốn tới  */}
          <MyTouchable
            inputNavigation={navigation}
            inputGoToScreenName="Screen_Authentication"
          />
          <MyTouchable
            inputNavigation={navigation}
            inputGoToScreenName="Screen_Order"
          />
          <MyTouchable
            inputNavigation={navigation}
            inputGoToScreenName="Screen_ChangeInfo"
          />
        </View>
      </View>
    );
  }
}
