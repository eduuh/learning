import React from "react"
import { Text, StyleSheet, Button, TouchableOpacity, View } from "react-native"

const HomeScreen = ({ navigation }) => {
  var name = "Edwin"
  return (
    <View>
      <Text style={styles.text}>Welcome {name}</Text>
      <Button
        onPress={() => navigation.navigate("Component")}
        title="Go to components Demo"
      />
      {/* <TouchableOpacity onPress={() => props.navigation.navigate("List")}>
        <Text>Go to List Demo</Text>
      </TouchableOpacity> */}
      <Button
        style={styles.buttonStyle}
        onPress={() => navigation.navigate("List")}
        title="Go to List"
      />

      <Text>edwin test</Text>
      <Button
        style={styles.buttonStyle}
        onPress={() => navigation.navigate("Image")}
        title="Go to ImageSceen"
      />
      <Button
        style={styles.buttonStyle}
        onPress={() => navigation.navigate("Counter")}
        title="Go to Counter"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  buttonStyle: {
    marginVertical: 20,
  },
})

export default HomeScreen
