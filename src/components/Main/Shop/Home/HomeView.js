import React, {Component} from 'react';
import {View, ScrollView} from 'react-native';
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
      <View style={{flex: 1, backgroundColor: 'darkgray', marginTop: 30}}>
        <Header myNavigation={this.props.navigation} />
        <ScrollView>
          <Collection />
          <Category myNavigation={this.props.navigation} />
          <TopProducts myNavigation={this.props.navigation} />
        </ScrollView>
      </View>
    );
  }
}
