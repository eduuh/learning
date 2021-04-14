import React from "react"
import { Text, StyleSheet } from "react-native"

const HomeScreen = () => {
  return (
    <view>
      <Text style={styles.text}>Edwin</Text>
    </view>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
})

export default HomeScreen
