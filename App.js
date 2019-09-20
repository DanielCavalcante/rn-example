import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Card from './src/components/Card'

export default App = props => {
  return (
    <View>
      <Text style={styles.title}>Hello</Text>
      <Card />
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    marginTop: 40
  }
})
