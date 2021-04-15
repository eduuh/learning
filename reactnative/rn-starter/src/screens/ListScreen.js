import React from "react"
import { View, Text, StyleSheet, FlatList } from "react-native"

const ListScreen = () => {
  const friends = [
    { name: "Friend #1", Age: "20" },
    { name: "Friend #2", Age: "45" },
    { name: "Friend #3", Age: "50" },
    { name: "Friend #4", Age: "32" },
    { name: "Friend #5", Age: "34" },
    { name: "Friend #6", Age: "34" },
    { name: "Friend #7", Age: "54" },
    { name: "Friend #8", Age: "65" },
    { name: "Friend #9", Age: "89" },
  ]
  return (
    <FlatList
      //horizontal={true}
      //showsHorizontalScollIndicator={false}
      keyExtractor={(element) => element.name}
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            {item.name} - Age {item.Age}
          </Text>
        )
      }}
    />
  )
}

const styles = StyleSheet.create({ textStyle: { marginVertical: 40 } })

export default ListScreen
