import React, { useState } from "react"
import { View, Text, StyleSheet, TextInput } from "react-native"

const TextScreen = () => {
  const [name, setName] = useState("")
  return (
    <View>
      <Text>Enter Name</Text>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={style.input}
        value={name}
        onChangeText={(newvalue) => setName(newvalue)}
      />
      <Text>My name is {name}</Text>
    </View>
  )
}

const style = StyleSheet.create({
  input: { margin: 15, borderColor: "black", borderWidth: 1 },
})

export default TextScreen
