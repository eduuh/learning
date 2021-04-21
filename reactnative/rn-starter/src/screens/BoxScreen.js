import React from "react"
import { View, StyleSheet } from "react-native"

const BoxScreen = () => {
  return (
    <View style={style.ParentStyle}>
      <View style={style.viewOneStyle}>Child #1</View>
      <View style={style.viewtwoStyle}>Child #2</View>
      <View style={style.viewthreeStyle}>Child #3</View>
    </View>
  )
}

const style = StyleSheet.create({
  ParentStyle: {
    borderWidth: 3,
    borderColor: "black",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  viewOneStyle: {
    borderWidth: 4,
    backgroundColor: "orange",
    borderColor: "red",
    height: 100,
    width: 100,
  },
  viewtwoStyle: {
    borderWidth: 4,
    backgroundColor: "green",
    borderColor: "green",
    height: 100,
    top: 100,
    width: 100,
  },
  viewthreeStyle: {
    borderWidth: 4,
    backgroundColor: "red",
    height: 100,
    width: 100,
    borderColor: "red",
  },
})

export default BoxScreen
/*
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,


    same as  above
...StyleSheet.absoluteFillObject
*/
