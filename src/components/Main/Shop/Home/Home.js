import {createStackNavigator} from 'react-navigation';
import HomeView from './HomeView';
import ProductDetails from './ProductDetails';
import ListProducts from './ListProducts';

const stackRouteConfigs = {
  ProductDetails_Screen: {
    screen: ProductDetails,
  },
  HomeView_Screen: {
    screen: HomeView,
  },
  ListProducts_Screen: {
    screen: ListProducts,
  },
};
const stackNavigatorConfig = {
  initialRouteName: 'HomeView_Screen',
  headerMode: 'none',
};
const Home = createStackNavigator(stackRouteConfigs, stackNavigatorConfig);
export default Home;
