import {AsyncStorage} from 'react-native';

const getToken = async () => {
  try {
    const token = await AsyncStorage.getItem('@token');
    console.log('QUAN123');
    console.log(token !== null ? token : '');
    return token !== null ? token : '';
  } catch (error) {
    return '';
  }
};

export default getToken;
