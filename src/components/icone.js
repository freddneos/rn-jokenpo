import React, {Component} from 'react';
import {Image, View,Text,StyleSheet} from 'react-native';

const  imgPedra = require('../img/pedra.png')
const  imgPapel = require('../img/papel.png')
const  imgTesoura = require('../img/tesoura.png')

class Icone extends Component{
    render(){
     
        switch (this.props.escolha) {
          case 'pedra':
              return (
                <View style={styles.viewIcone}>
                  <Text style={styles.txtJogador} >{this.props.jogador}</Text>
                  <Image source = {imgPedra} />
                </View>
              )
            break;
            case 'papel':
            return(
                <View style={styles.viewIcone}>
                  <Text style={styles.txtJogador} >{this.props.jogador}</Text>
                  <Image source = {imgPapel} />
                </View>
              )
            break;
            case 'tesoura':
            return(
              <View style={styles.viewIcone}>
                <Text style={styles.txtJogador} >{this.props.jogador}</Text>
                <Image source = {imgTesoura} />
              </View>
            )
            break;
        
            default:
                return false
              break;
        }
         
    }
  }

  
  const styles = StyleSheet.create({
    viewIcone:{
      alignItems : 'center',
      marginBottom: 10,
    },
    txtJogador: {
      fontSize: 18,
    }
  })
  export default Icone