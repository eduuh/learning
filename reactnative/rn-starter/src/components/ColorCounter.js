import React from "react"
import { View, Text, StyleSheet, Button } from "react-native"

const ColorCounter = ({ Color, onIncrease, onDecrease }) => {
  return (
    <View>
      <Text>{Color}</Text>
      <Button title={`Increase ${Color}`} onPress={() => onIncrease()} />
      <Button title={`Decrease ${Color}`} onPress={() => onDecrease()} />
    </View>
  )
}

const style = StyleSheet.create({})
export default ColorCounter
