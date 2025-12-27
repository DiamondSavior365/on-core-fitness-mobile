import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ThankYouScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Check Icon */}
      <View style={styles.iconCircle}>
        <Ionicons name="checkmark" size={42} color="#0f0" />
      </View>

      {/* Text */}
      <Text style={styles.title}>Thank you!</Text>
      <Text style={styles.subtitle}>
        We’ve received your information.
        {"\n"}Our team will contact you shortly.
      </Text>

      {/* Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: "Login_Screen" }],
          })
        }
      >
        <Text style={styles.buttonText}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0b0b1e",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  iconCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: "#3cff00",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 24,
  },
  title: {
    fontSize: 28,
    color: "#fff",
    fontWeight: "700",
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: "#bfbfd4",
    textAlign: "center",
    marginBottom: 40,
    lineHeight: 22,
  },
  button: {
    backgroundColor: "#f3c6d8",
    paddingVertical: 14,
    paddingHorizontal: 36,
    borderRadius: 30,
  },
  buttonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default ThankYouScreen;
