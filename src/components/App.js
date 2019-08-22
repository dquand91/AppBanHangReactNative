import React, {Component} from 'react';
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator,
  createDrawerNavigator,
} from 'react-navigation';

import MyNavigationService from './Navigation/MyNavigationService';

// Nếu ở đây sửa tên file "Authencation.js" thành "index.js"
// Thì mình chỉ cần import import Authencation from './src/components/Authencation';
// Nó sẽ tự động vào thư mục ./src/components/Authencation và tìm file index.js
// import Authencation from './Authentication/Authentication';
// import Main from './Main/Main';
import ChangeInfo from './Info/ChangeInfo';
import Order from './Order/Order';

import {Image, Dimensions} from 'react-native';

import Home from './Main/Shop/Home/Home';
import Cart from './Main/Shop/Cart/Cart';
import Search from './Main/Shop/Search/Search';
import Contact from './Main/Shop/Contact/Contact';
import SignOut from './Authentication/Signout/SignOut';
import Login from './Authentication/Login/Login';
import CustomDrawerContentComponent from './CustomView/CustomDrawerContentComponent';

const {width} = Dimensions.get('window');

const myRouterConfigs = {
  Tab_Home: {
    screen: Home,
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

// Drawer Config vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
const myDrawerRouteConfigs = {
  Home_Screen: {
    screen: myBottomTabNavigator,
  },
  Order_Screen: {
    screen: Order,
  },
  ChangeInfo_Screen: {
    screen: ChangeInfo,
  },
  SignOut_Screen: {
    screen: SignOut,
  },
  Login_Screen: {
    screen: Login,
  },
};

const myDrawerNavigatorConfig = {
  initialRouteName: 'Home_Screen',
  // chiều rộng của drawer sẽ là phần nũa chiều rộng màn hình
  drawerWidth: width / 2,
  // drawer sẽ chạy từ trái ra
  drawerPosition: 'left',
  // headerMode - Specifies how the header should be rendered:
  // float - Render a single header that stays at the top and animates as screens are changed. This is a common pattern on iOS.
  // screen - Each screen has a header attached to it and the header fades in and out together with the screen. This is a common pattern on Android.
  // none - No header will be rendered.
  headerMode: 'screen',
  drawerBackgroundColor: 'white',
  useNativeAnimations: 'true',
  contentComponent: CustomDrawerContentComponent,
  contentOptions: {
    activeTintColor: 'red',
  },
};

const myDrawerNavigator = createDrawerNavigator(
  myDrawerRouteConfigs,
  myDrawerNavigatorConfig,
);
// Drawer Config ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// Stack Navigator Config vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
const myStackRouteConfigs = {
  DrawerNavigator_Name: {
    screen: myDrawerNavigator,
  },
};

const myStackNavigatorCofig = {
  initialRouteName: 'DrawerNavigator_Name',
  headerMode: 'none',
};

const MyStackNavigator = createStackNavigator(
  myStackRouteConfigs,
  myStackNavigatorCofig,
);
// Stack Navigator Config ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

const AppContainer = createAppContainer(MyStackNavigator);

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
    return (
      <AppContainer
        // Dùng cách này để truyền được cái navigator vô trong MyNavigationService của mình
        // Rồi mình dùng cái navigator đó điều khiển đóng mở Drawer
        ref={navigatorRef => {
          MyNavigationService.setTopLevelNavigator(navigatorRef);
        }}
      />
    );
  }
}
