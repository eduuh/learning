import React from "react"
import { View, Text, StyleSheet, Image } from "react-native"

const ImageDetail = ({ imageSource, title, Score }) => {
  return (
    <View>
      <Image source={imageSource} />
      <Text style={style.textStyle}>{title}</Text>
      <Text>Image Score - {Score}</Text>
    </View>
  )
}

const style = StyleSheet.create({ textStyle: { fontSize: 30 } })

export default ImageDetail
