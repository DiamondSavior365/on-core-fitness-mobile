import React from "react";
import { View, Text, StyleSheet } from "react-native";

const StoreScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000", // optional, matches your dark theme
  },
  text: {
    fontSize: 32,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default WorkoutScreen;
