import React, { useReducer } from "react"
import { View, Text, StyleSheet } from "react-native"
import ColorCounter from "../components/ColorCounter"

const reducer = (state, action) => {
  // state => {red: number, green: number, blue: number}
  // action === {colortoChange: 'red' or 'blue' or 'green' , amount : 15 ||-15}
  switch (action.colortoChange) {
    case "red":
      return state.red + action.amount > 255 || state.red + action.amount < 0
        ? state
        : { ...state, red: state.red + action.amount }
    case "blue":
      return state.blue + action.amount > 255 || state.blue + action.amount < 0
        ? state
        : { ...state, blue: state.blue + action.amount }
    case "green":
      return state.green + action.amount > 255 ||
        state.green + action.amount < 0
        ? state
        : { ...state, green: state.green + action.amount }
    default:
      return state
  }
}

const SquareScreenWithReducer = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, blue: 0, green: 0 })
  return (
    <View>
      <ColorCounter
        onIncrease={() => dispatch({ colortoChange: "red", amount: 15 })}
        onDecrease={() => dispatch({ colortoChange: "red", amount: -15 })}
        Color="Red"
      />
      <ColorCounter
        onIncrease={() => dispatch({ colortoChange: "blue", amount: 15 })}
        onDecrease={() => dispatch({ colortoChange: "blue", amount: -15 })}
        Color="Blue"
      />
      <ColorCounter
        onIncrease={() => dispatch({ colortoChange: "green", amount: 15 })}
        onDecrease={() => dispatch({ colortoChange: "green", amount: -15 })}
        Color="Green"
      />

      <View
        style={{
          height: 150,
          width: 150,
          background: `rgb(${state.red}, ${state.green}, ${state.blue})`,
        }}
      />
    </View>
  )
}

const style = StyleSheet.create({})
export default SquareScreenWithReducer
