import React from "react";
import { TouchableOpacity, Image, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function ChatbotFloatingButton() {
  const navigation = useNavigation();

  return (
    <View style={styles.wrapper} pointerEvents="box-none">
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.85}
        onPress={() => navigation.navigate("Chatbot_Screen")}
      >
        <Image
          source={require("../../../../assets/Chatbot_Images/chatbot_button_image_2.png")}
          style={styles.robotImage}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    right: 20,
    bottom: 30,
    zIndex: 50,
  },

  button: {
    width: 66,
    height: 66,
    borderRadius: 33,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0D0D0D",
    shadowColor: "#c62828",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.45,
    shadowRadius: 10,
    elevation: 10,
  },

  robotImage: {
    width: 66,
    height: 66,
    borderRadius: 33,
    resizeMode: "contain",
  },
});
