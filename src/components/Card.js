import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default class Card extends Component {

  constructor() {
    super()
    this.state = {
      status: 'Inativo'  
    }
  }

  handleClick = () => {
    this.setState({ status: 'Ativo' }) 
  }

  render() {
    return (
      <View>
        <TouchableOpacity onPress={this.handleClick}>
          <Text>{this.state.status}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
