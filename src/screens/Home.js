import React, { Component } from 'react'
import { View, ActivityIndicator, StyleSheet, ScrollView } from 'react-native'
import Api from '../services/Api'
import Card from '../components/Card'

export default class Home extends Component {

  constructor() {
    super()
    this.state = {
      todos: [],
      loading: true
    }
  }

  componentDidMount() {
    Api.get('/api/todos').then((res) => {
      this.setState({ todos: res.data, loading: false })
    })
  }

  render() {
    const todos = this.state.todos.map(todo => (
      <Card 
        key={todo._id} 
        description={todo.description}
        done={todo.done} />
    ))
    return (
      <ScrollView style={styles.container}>
        {this.state.loading && 
          <ActivityIndicator size="large" color="#F89F06" 
            style={{ marginTop: 300, alignItems: 'center' }} />}
        {!this.state.loading && todos}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({ 
  container: {
    padding: 15,
    backgroundColor: '#CCC',
    height: '100%'
  }
})
