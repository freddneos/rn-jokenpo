/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry,Platform,Button, Image, Text, View,StyleSheet} from 'react-native';
import Topo from './src/components/topo'
import Icone from './src/components/icone'

class  app3 extends Component{

  constructor(props){
    super(props)

    this.state = {
      escolhaUsuario: '',
      escolhaComputador: '',
      resultado: '',
    }

  }

  Jokenpo(escolhaUsuario){
    const opcoes = ['pedra' , 'papel','tesoura']
    const escolhaComputador = opcoes[Math.floor(Math.random() * opcoes.length)]
    let resultado = '';

    if(escolhaComputador == 'pedra'){
      if(escolhaUsuario == 'pedra'){
        resultado = 'Empate';
      }

      if(escolhaUsuario == 'papel'){
        resultado = 'Você ganhou';
      }

      if(escolhaUsuario == 'tesoura'){
        resultado = 'Você perdeu';
      }
    }

    if(escolhaComputador == 'papel'){
      if(escolhaUsuario == 'papel'){
        resultado = 'Empate';
      }

      if(escolhaUsuario == 'tesoura'){
        resultado = 'Você ganhou';
      }

      if(escolhaUsuario == 'pedra'){
        resultado = 'Você perdeu';
      }
    }

    if(escolhaComputador == 'tesoura'){
      if(escolhaUsuario == 'tesoura'){
        resultado = 'Empate';
      }

      if(escolhaUsuario == 'pedra'){
        resultado = 'Você ganhou';
      }

      if(escolhaUsuario == 'papel'){
        resultado = 'Você perdeu';
      }
    }
    this.setState( {
      escolhaUsuario : escolhaUsuario,
      escolhaComputador : escolhaComputador,
      resultado: resultado ,
    })
  }
  render(){
    return(
      <View style={styles.viewPai}>
        <Topo></Topo>
            <View style={styles.painelAcoes}>
              <View style={styles.btnEscolha}>
                  <Button  title='Pedra'   onPress={ ()=>this.Jokenpo('pedra')} />
              </View>
              <View style={styles.btnEscolha}>
                <Button title='Papel'   onPress={ ()=>this.Jokenpo('papel')}/>
              </View>
              <View style={styles.btnEscolha}>
                <Button title='Tesoura' onPress={ ()=>this.Jokenpo('tesoura')}/> 
              </View>
            </View>
            <View style={styles.palco}>    
              <Icone jogador='Computador' escolha={this.state.escolhaComputador}/>
              <Icone jogador='Jogador'    escolha={this.state.escolhaUsuario}/>
              <Text style={styles.txtResultado} >{this.state.resultado}</Text>
            </View>
      </View>
        
    )
  } 
}

const styles = StyleSheet.create({
  btnEscolha: {
    width: 90
  },
  painelAcoes:{
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  palco:{
    alignItems: 'center',
    marginTop: 10,
  },
  txtResultado:{
    fontSize: 25,
    fontWeight: 'bold',
    color: 'red',
    height: 60,
  },
  viewPai:{
    backgroundColor : 'white',
    flex: 1,
  }

})
export default app3
AppRegistry.registerComponent('app3',() => app3);

