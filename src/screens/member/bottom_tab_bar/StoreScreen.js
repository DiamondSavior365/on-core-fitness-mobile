import React from "react";
import { Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function StoreScreen() {
  return (
    <LinearGradient
      colors={["#4b0f1b", "#1a0509", "#000000"]}
      locations={[0, 0.35, 1]}
      style={styles.container}
    >
      <Text style={styles.text}>Hello World</Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 32,
    color: "#fff",
    fontWeight: "bold",
  },
});
