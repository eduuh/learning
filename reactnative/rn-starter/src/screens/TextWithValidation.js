import React, { useState } from "react"
import { View, Text, StyleSheet, TextInput } from "react-native"

const TextScreenWithValidation = () => {
  const [password, setPassword] = useState("")
  return (
    <View>
      <Text>Enter Password:</Text>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={style.input}
        value={password}
        onChangeText={(newvalue) => setPassword(newvalue)}
      />
      {password.length > 5 ? null : (
        <Text>Password should be greater than 5</Text>
      )}
    </View>
  )
}

const style = StyleSheet.create({
  input: { margin: 15, borderColor: "black", borderWidth: 1 },
})

export default TextScreenWithValidation
