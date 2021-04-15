import React from "react"
import { Text, StyleSheet, View } from "react-native"

const ComponentScreen = () => {
  let name = "Edwin"
  return (
    <View>
      <Text style={styles.textStyle}>Getting Started With React</Text>
      <Text style={styles.subheading}>My name is {name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45,
  },
  subheading: {
    fontSize: 20,
  },
})

export default ComponentScreen
