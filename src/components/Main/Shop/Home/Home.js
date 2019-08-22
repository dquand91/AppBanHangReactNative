import React, {Component} from 'react';
import {View, ScrollView, Platform} from 'react-native';
import Collection from './Collection';
import Header from '../Header';
import Category from './Category';
import TopProducts from './TopProducts';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          flex: 1,
          backgroundColor: 'darkgray',
          marginTop: Platform.OS === 'ios' ? 30 : 0,
        }}>
        <Header myNavigation={this.props.navigation} />
        <ScrollView>
          <Collection />
          <Category />
          <TopProducts />
        </ScrollView>
      </View>
    );
  }
}
