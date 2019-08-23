import React, {Component} from 'react';
import {View, ScrollView} from 'react-native';
import Collection from './Collection';
import Header from '../Header';
import Category from './Category';
import TopProducts from './TopProducts';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: [],
    };
  }

  componentDidMount() {
    fetch('http://172.16.1.39:8888/AppBanHangServer')
      .then(res => res.json())
      .then(resJSON => {
        this.setState({type: resJSON.type});
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'darkgray', marginTop: 30}}>
        <Header myNavigation={this.props.navigation} />
        <ScrollView>
          <Collection />
          <Category
            myNavigation={this.props.navigation}
            type={this.state.type}
          />
          <TopProducts myNavigation={this.props.navigation} />
        </ScrollView>
      </View>
    );
  }
}
