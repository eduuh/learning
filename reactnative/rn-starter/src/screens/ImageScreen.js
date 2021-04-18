import React from "react"
import { View, Text, StyleSheet } from "react-native"
import ImageDetail from "../components/ImageDetail"

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail
        title="Forest"
        imageSource={require("../../assets/mountain.jpg")}
        Score={9}
      />
      <ImageDetail
        title="Beach"
        imageSource={require("../../assets/beach.jpg")}
        Score={8}
      />
      <ImageDetail
        title="Mountain"
        imageSource={require("../../assets/forest.jpg")}
        Score="7"
      />
      <ImageDetail
        title="Terain"
        imageSource={require("../../assets/mountain.jpg")}
        Score={9}
      />
    </View>
  )
}

const style = StyleSheet.create({ textStyle: { fontSize: 30 } })

export default ImageScreen
