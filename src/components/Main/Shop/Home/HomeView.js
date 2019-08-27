import React, {Component} from 'react';
import {View, ScrollView} from 'react-native';
import Collection from './Collection';
import Header from '../Header';
import Category from './Category';
import TopProducts from './TopProducts';
import Global from '../../../Global';
import {withNavigationFocus} from 'react-navigation';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: [],
      topProducts: [],
    };
  }
  // http://172.16.1.39:8888/AppBanHangServer/

  // {
  //   "type": [
  //     {
  //       "id": "4",
  //       "name": "Maxi Dress",
  //       "image": "maxi.jpg"
  //     },
  //     {
  //       "id": "5",
  //       "name": "Party Dress",
  //       "image": "party.jpg"
  //     },
  //     {
  //       "id": "6",
  //       "name": "Mini Dress",
  //       "image": "mini.jpg"
  //     },
  //     {
  //       "id": "7",
  //       "name": "Rompers",
  //       "image": "rompers.jpg"
  //     }
  //   ],
  //   "product": [
  //     {
  //       "id": "30",
  //       "name": "contrast embro",
  //       "idType": "4",
  //       "nameType": "Maxi Dress",
  //       "price": "121",
  //       "color": "Fuchsia",
  //       "material": "leather",
  //       "description": "Take your vacay-ready style to the next level with the bold personality of this embroidered maxi dress. With casually elegant details like a tassel-tie plunging neckline and hi-lo hem, it promises to be a total head-turner with heels.",
  //       "images": [
  //         "56.jpeg",
  //         "57.jpeg"
  //       ]
  //     },
  //     {
  //       "id": "31",
  //       "name": "floral print t",
  //       "idType": "4",
  //       "nameType": "Maxi Dress",
  //       "price": "133",
  //       "color": "LimeGreen",
  //       "material": "cotton",
  //       "description": "Looking for that next great dress to take on summer getaways or just out to weekend brunch? We've got you covered with this breezy, floral print maxi. Flirty ruffles dance along the skirt, while soft tassel-kissed straps tie the look together.",
  //       "images": [
  //         "58.jpeg",
  //         "59.jpeg"
  //       ]
  //     },
  //     {
  //       "id": "32",
  //       "name": "star maxi dres",
  //       "idType": "4",
  //       "nameType": "Maxi Dress",
  //       "price": "143",
  //       "color": "Wheat",
  //       "material": "fur",
  //       "description": "Command attention wherever you go in this dramatic maxi dress. A charming star design adds out-of-this-world appeal to your look, while a voluminous skirt sways with your every move.",
  //       "images": [
  //         "60.jpeg",
  //         "61.jpeg"
  //       ]
  //     },
  //     {
  //       "id": "34",
  //       "name": "high neck gode",
  //       "idType": "4",
  //       "nameType": "Maxi Dress",
  //       "price": "135",
  //       "color": "DarkGreen",
  //       "material": "wool",
  //       "description": "A sexy, plunging neckline, open back and godet detailing on a flowing skirt...aka all the makings of our new favorite dress. Whisper-light with silky lining, this knockout number puts you at the center of attention every time. Be you, be fabulous.",
  //       "images": [
  //         "64.jpeg",
  //         "65.jpeg"
  //       ]
  //     },
  //     {
  //       "id": "38",
  //       "name": "floral print s",
  //       "idType": "4",
  //       "nameType": "Maxi Dress",
  //       "price": "146",
  //       "color": "DarkGoldenRod",
  //       "material": "silk",
  //       "description": "Let your shoulder steal the show in this sweet and sultry maxi dress featuring a smocked bodice and flowing skirt. The soft, stretchy fabric offers a perfectly comfortable fit every time, while a bold print keeps eyes on you.",
  //       "images": [
  //         "72.jpeg",
  //         "73.jpeg"
  //       ]
  //     },
  //     {
  //       "id": "43",
  //       "name": "strappy cut-ou",
  //       "idType": "4",
  //       "nameType": "Maxi Dress",
  //       "price": "117",
  //       "color": "Green",
  //       "material": "fur",
  //       "description": "Weddings or red carpets, this dress is ready for anything. With plunging keyhole cut-outs and skin-baring strappy sides, less is more when it comes to this dramatic look. Add a fabulous heel, and you've got effortlessly glamorous style on lock.",
  //       "images": [
  //         "82.jpeg",
  //         "83.jpeg"
  //       ]
  //     }
  //   ]
  // }

  componentDidMount() {
    fetch('http://172.16.1.39:8888/AppBanHangServer')
      .then(res => res.json())
      .then(resJSON => {
        console.log(resJSON);
        console.log(resJSON.product[0].images);
        this.setState({
          type: resJSON.type,
          topProducts: resJSON.product,
        });
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
            myType={this.state.type}
          />
          <TopProducts
            myNavigation={this.props.navigation}
            myTopProducts={this.state.topProducts}
          />
        </ScrollView>
      </View>
    );
  }
}
