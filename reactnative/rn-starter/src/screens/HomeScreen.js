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
        title="Go to ImageSceen: ReusablComponents"
      />
      <Button
        style={styles.buttonStyle}
        onPress={() => navigation.navigate("Counter")}
        title="Go to Counter: State"
      />

      <Button
        style={styles.buttonStyle}
        onPress={() => navigation.navigate("Color")}
        title="Go to ColorScreen:State"
      />

      <Button
        style={styles.buttonStyle}
        onPress={() => navigation.navigate("Square")}
        title="Go to Square:State,props,RC"
      />

      <Button
        style={styles.buttonStyle}
        onPress={() => navigation.navigate("SquareWR")}
        title="Go to SquareWR:State,props,RC"
      />

      <Button
        style={styles.buttonStyle}
        onPress={() => navigation.navigate("TextInput")}
        title="Go to Text InputScreen"
      />
      <Button
        style={styles.buttonStyle}
        onPress={() => navigation.navigate("TextValidation")}
        title="Go to text With Validation"
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
