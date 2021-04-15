import React from "react"
import { Text, StyleSheet, Button, TouchableOpacity, View } from "react-native"

const HomeScreen = props => {
  return (
    <View>
      <Text style={styles.text}>Edwin</Text>
      <Button
        onPress={() =>
          props.navigation.navigate("Component")
        }
        title="Go to components Demo"
      />

      {/* <TouchableOpacity onPress={() => props.navigation.navigate("List")}>
        <Text>Go to List Demo</Text>
      </TouchableOpacity> */}
      <Button
        style={styles.buttonStyle}
        onPress={() => props.navigation.navigate('List')}
        title="Go to List"
      />


    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  buttonStyle: {
    marginVertical: 20
  }
})

export default HomeScreen
