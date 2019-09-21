import React, { Component } from 'react'
import { 
  View, 
  Text, 
  TextInput, 
  Button,
  StyleSheet,
  ToastAndroid,
  Platform
 } 
from 'react-native'

export default class Login extends Component {

  constructor() {
    super()
    this.state = {
      login: '',
      senha: ''
    }
  }

  handleClick = () => {
    if (Platform.OS === 'ios') {
      alert('Logado!')
    } else {
      ToastAndroid.show('Logado!', ToastAndroid.LONG)
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Unipê - React Native</Text>

        <Text style={styles.label}>Login</Text>
        <TextInput 
          autoCorrect={false}
          onChangeText={(login) => this.setState({ login })}
          style={styles.input}
          value={this.state.login} 
          placeholder="Informe o login" />

        <Text style={styles.label}>Senha</Text>
        <TextInput 
          onChangeText={(senha) => this.setState({ senha })}
          secureTextEntry
          autoCorrect={false}
          style={styles.input}
          value={this.state.senha} 
          placeholder="Informe a senha" />
        <Button title="Entrar" onPress={this.handleClick} />
      </View>
    )
  }
}

const styles = StyleSheet.create({ 
  container: {
    marginTop: 30,
    backgroundColor: '#CCC',
    height: '100%',
    padding: 15
  },
  label: {
    color: '#000',
    fontSize: 18
  },
  input: {
    backgroundColor: '#FFF',
    fontSize: 18
  },
  button: {
    backgroundColor: '#5472dd'
  }
})