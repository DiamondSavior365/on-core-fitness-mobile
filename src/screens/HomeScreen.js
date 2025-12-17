import React, { useRef, useEffect } from "react";
import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  // Animated,
  TouchableOpacity,
  Platform,
  Dimensions,
  Image,
} from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/Background_Images/home_screen/background_3.jpg")}
        style={styles.background}
        resizeMode="cover"
      ></ImageBackground>

      <View style={styles.overlay}>
        <View style={styles.logoStack}>
          <Text style={[styles.logoBase, styles.logoOn]}>ON</Text>
          <Text style={[styles.logoBase, styles.logoCore]}>CORE</Text>
          <Text style={[styles.logoBase, styles.logoFitness]}>FITNESS</Text>
          <Image
            source={require("../../assets/logo/kettlebell_transparent.png")}
            style={styles.kettlebell}
          />
        </View>

        <TouchableOpacity onPress={() => navigation.navigate("Login_Screen")}>
          <Text style={styles.button}>Press to Enter</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const { width, height } = Dimensions.get("window");
const scale = width / 375;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    ...StyleSheet.absoluteFillObject,
  },
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logoStack: {
    position: "absolute",
    top: 120,
    alignSelf: "center",
    alignItems: "center",
  },
  logoBase: {
    fontSize: 60 * scale,
    fontWeight: "bold",
    letterSpacing: 3,
    textAlign: "center",
    // textShadowColor: "#000",
    // textShadowOffset: { width: 3, height: 3 },
    // textShadowRadius: 3,

    // textShadowColor: "rgba(0,0,0,0.9)",
    // textShadowOffset: { width: 4, height: 5 },
    // textShadowRadius: 6,

    // textShadowColor: "#000",
    // textShadowOffset: { width: 5, height: 6 },
    // textShadowRadius: 8,

    textShadowColor: "#000",
    textShadowOffset: { width: 6, height: 7 },
    textShadowRadius: 10,
    fontFamily: "BlackOpsOne",
    // fontFamily: "sans-serif-condensed",
    // fontFamily: "DarkUnderground",
    // fontFamily: "RussoOne",
    // fontFamily: "ScratchedLetters",
    // fontFamily: "SquadaOne",
    // fontFamily: "Staatliches",
  },
  logoOn: {
    color: "#ffffff",
  },

  logoCore: {
    color: "#c62828", // brand red
    marginVertical: 4,
  },

  logoFitness: {
    color: "#ffffff",
  },
  button: {
    marginTop: height * 0.65,
    fontSize: 45,
    fontFamily: "sans-serif-condensed",
    color: "white",
    textShadowColor: "#062838ff",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 2,
    borderRadius: 55,
    paddingHorizontal: 24,
    paddingVertical: 8,
    backgroundColor: "rgba(185, 71, 30, 0.2)",
    borderWidth: 1,
    borderColor: "rgba(209, 198, 198, 0.68)",
  },
  kettlebell: {
    width: 104 * scale,
    height: 104 * scale,
    marginTop: 2,

    // shadow to match logo text
    shadowColor: "#000",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.7,
    shadowRadius: 3,

    elevation: 8, // Android
  },
});

export default HomeScreen;
