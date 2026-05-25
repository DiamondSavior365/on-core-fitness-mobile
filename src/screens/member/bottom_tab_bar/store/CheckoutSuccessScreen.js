import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

export default function CheckoutSuccessScreen() {
  const navigation = useNavigation();

  return (
    <LinearGradient
      colors={["#4b0f1b", "#1a0509", "#000000"]}
      style={styles.container}
    >
      <Text style={styles.title}>Payment Successful</Text>
      <Text style={styles.message}>Thank you! Your order has been placed.</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Store_Screen")}
      >
        <Text style={styles.buttonText}>Back to Store</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "900",
    marginBottom: 12,
  },
  message: {
    color: "#d0d0d0",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 24,
  },
  button: {
    backgroundColor: "#c62828",
    paddingHorizontal: 22,
    paddingVertical: 14,
    borderRadius: 16,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "900",
    fontSize: 16,
  },
});
