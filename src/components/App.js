import React, {Component} from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';

// Nếu ở đây sửa tên file "Authencation.js" thành "index.js"
// Thì mình chỉ cần import import Authencation from './src/components/Authencation';
// Nó sẽ tự động vào thư mục ./src/components/Authencation và tìm file index.js
import Authencation from './Authentication/Authentication';
import ChangeInfo from './Info/ChangeInfo';
import Main from './Main/Main';
import Order from './Order/Order';

const MyRouter = createStackNavigator(
  {
    Screen_Main: {
      screen: Main,
      navigationOptions: {
        headerTitle: 'Main',
      },
    },
    Screen_Authentication: {
      screen: Authencation,
      navigationOptions: {
        headerTitle: 'Authencation',
      },
    },
    Screen_ChangeInfo: {
      screen: ChangeInfo,
      navigationOptions: {
        headerTitle: 'ChangeInfo',
      },
    },
    Screen_Order: {
      screen: Order,
      navigationOptions: {
        headerTitle: 'OrderHistory',
      },
    },
  },
  {
    initialRouteName: 'Screen_Main',
  },
);

const AppContainer = createAppContainer(MyRouter);

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}
