import React, {Component} from 'react';
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator,
} from 'react-navigation';

// Nếu ở đây sửa tên file "Authencation.js" thành "index.js"
// Thì mình chỉ cần import import Authencation from './src/components/Authencation';
// Nó sẽ tự động vào thư mục ./src/components/Authencation và tìm file index.js
import Authencation from './Authentication/Authentication';
import ChangeInfo from './Info/ChangeInfo';
import Main from './Main/Main';
import Order from './Order/Order';

import {Image} from 'react-native';

import Cart from './Main/Shop/Cart/Cart';
import Search from './Main/Shop/Search/Search';
import Contact from './Main/Shop/Contact/Contact';

const myRouterConfigs = {
  Tab_Home: {
    screen: Main,
    navigationOptions: {
      tabBarLabel: 'Home',
      // Callback để xử lý hiển thị khi tab được chọn
      // Nếu đang được chọn thì show hình khác, bình thường show hình khác
      tabBarIcon: ({focused}) => {
        const icon1 = require('../assets/appIcon/home.png');
        const icon2 = require('../assets/appIcon/home0.png');

        const icon = focused ? icon1 : icon2;
        return <Image source={icon} style={{width: 25, height: 25}} />;
      },
    },
  },
  Tab_Cart: {
    screen: Cart,
    navigationOptions: {
      tabBarLabel: 'Cart',
      tabBarIcon: ({focused}) => {
        const icon1 = require('../assets/appIcon/cart.png');
        const icon2 = require('../assets/appIcon/cart0.png');

        const icon = focused ? icon1 : icon2;
        return <Image source={icon} style={{width: 25, height: 25}} />;
      },
    },
  },
  Tab_Search: {
    screen: Search,
    navigationOptions: {
      tabBarLabel: 'Search',
      tabBarIcon: ({focused}) => {
        const icon1 = require('../assets/appIcon/search.png');
        const icon2 = require('../assets/appIcon/search0.png');

        const icon = focused ? icon1 : icon2;
        return <Image source={icon} style={{width: 25, height: 25}} />;
      },
    },
  },
  Tab_Contact: {
    screen: Contact,
    navigationOptions: {
      tabBarLabel: 'Contact',
      tabBarIcon: ({focused}) => {
        const icon1 = require('../assets/appIcon/contact.png');
        const icon2 = require('../assets/appIcon/contact0.png');

        const icon = focused ? icon1 : icon2;
        return <Image source={icon} style={{width: 25, height: 25}} />;
      },
    },
  },
};

const myBottomTabNavigatorConfig = {
  tabBarOptions: {
    initialRouteName: 'Tab_Home',
    // Màu chữ khi tab được chọn
    activeTintColor: 'green',
    inactiveBackgroundColor: '',
    // Màu chữ khi tab chưa được chọn
    inactiveTintColor: 'gray',
  },
};

const myBottomTabNavigator = createBottomTabNavigator(
  myRouterConfigs,
  myBottomTabNavigatorConfig,
);

const AppContainer = createAppContainer(myBottomTabNavigator);

// const MyRouter = createStackNavigator(
//   {
//     Screen_Main: {
//       screen: Main,
//       navigationOptions: {
//         headerTitle: 'Main',
//       },
//     },
//     Screen_Authentication: {
//       screen: Authencation,
//       navigationOptions: {
//         headerTitle: 'Authencation',
//       },
//     },
//     Screen_ChangeInfo: {
//       screen: ChangeInfo,
//       navigationOptions: {
//         headerTitle: 'ChangeInfo',
//       },
//     },
//     Screen_Order: {
//       screen: Order,
//       navigationOptions: {
//         headerTitle: 'OrderHistory',
//       },
//     },
//   },
//   {
//     initialRouteName: 'Screen_Main',
//   },
// );

// const AppContainer = createAppContainer(MyRouter);

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}
