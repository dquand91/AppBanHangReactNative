/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/components/App';
import {name as appName} from './app.json';
// import Authentication from './src/components/Authentication/Authentication';

AppRegistry.registerComponent(appName, () => App);
// AppRegistry.registerComponent(appName, () => Authentication);
