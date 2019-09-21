import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Card from './src/components/Card'

export default () => {
  return (
    <View>
      <Text style={styles.title}>Hello</Text>
      <Card name="Xuxinha" />
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    marginTop: 40
  }
})
