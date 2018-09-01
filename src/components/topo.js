import React, {Component} from 'react';
import {Image, View,} from 'react-native';
const imgHeader = require('../img/jokenpo.png')

class Topo extends Component{
    render(){
      return(
        <View>
          <Image source={ imgHeader }/>
        </View>
      )
    }
}
export default Topo 