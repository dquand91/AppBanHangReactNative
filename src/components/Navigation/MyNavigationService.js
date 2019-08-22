import {NavigationActions} from 'react-navigation';
import {DrawerActions} from 'react-navigation';

let navigator;

// để gán cái navigator cần sử dụng vào đây
function setTopLevelNavigator(navigatorRef) {
  navigator = navigatorRef;
}

function customNavigate(routeName, params) {
  navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    }),
  );
}

// Sử dụng cái navigator truyền vào và gọi toggleDrawer để mở Drawer
function openDrawer() {
  navigator.dispatch(DrawerActions.toggleDrawer());
}

// add other navigation functions that you need and export them

export default {
  customNavigate,
  setTopLevelNavigator,
  openDrawer,
};
