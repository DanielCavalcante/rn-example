import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default class Card extends Component {

  constructor(props) {
    super(props)
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
        <Text>{this.props.name}</Text> 
        <TouchableOpacity onPress={this.handleClick}>
          <Text>{this.state.status}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
