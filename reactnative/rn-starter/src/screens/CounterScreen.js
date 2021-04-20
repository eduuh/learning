import React, { useReducer } from "react"
import { View, Text, StyleSheet, Button } from "react-native"

const reducer = (state, action) => {
  // state { couter: number }
  //  action === {type: action_increase or action_decrease, payload: { payload : number}}
  switch (action.type) {
    case "action_increase":
      return { ...state, counter: state.counter + action.payload }
    case "action_decrease":
      return { ...state, counter: state.counter + action.payload }
    default:
      return state
  }
}
const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { counter: 0 })
  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          // dont do this
          //counter++
          dispatch({ type: "action_increase", payload: 1 })
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          dispatch({ type: "action_decrease", payload: -1 })
        }}
      />
      <Text style={style.textStyle}>Current Count - {state.counter}</Text>
    </View>
  )
}

const style = StyleSheet.create({ textStyle: { fontSize: 23 } })

export default CounterScreen
