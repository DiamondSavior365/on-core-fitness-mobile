import React, { useRef, useEffect } from "react";
import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  Animated,
  TouchableOpacity,
  Platform,
  Dimensions,
} from "react-native";

const AnimatedImageBackground =
  Animated.createAnimatedComponent(ImageBackground);

const HomeScreen = ({ navigation }) => {
  const scaleAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: 1.1,
          duration: 4000,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 4000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [scaleAnim]);

  return (
    <View style={styles.container}>
      <AnimatedImageBackground
        source={require("../../assets/background_one.png")}
        style={[styles.background, { transform: [{ scale: scaleAnim }] }]}
        resizeMode="cover"
      />

      <View style={styles.overlay}>
        <Text style={styles.text}>Campus Events</Text>

        <TouchableOpacity onPress={() => navigation.navigate("Login_Screen")}>
          <Text style={styles.button}>Press to Enter</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// HomeScreen.navigationOptions = {
//   headerShown: false,
//   title: "Home",
// };
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
  text: {
    // fontSize: Platform.OS === "android" ? 55 : 50,
    fontSize: 45 * scale,
    color: "white",
    position: "absolute",
    top: 120,
    alignSelf: "center",
    fontWeight: "bold",
    fontFamily: "sans-serif-condensed",
    color: "#ffffff",
    letterSpacing: 3,
    textShadowColor: "#000",
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 3,
  },
  button: {
    fontSize: 45,
    fontFamily: "sans-serif-condensed",
    color: "white",
    textShadowColor: "#062838ff",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 2,
    position: "absolute",
    bottom: -350,
    alignSelf: "center",
    borderRadius: 55,
    paddingHorizontal: 24,
    paddingVertical: 8,

    //liquid glass effect
    backgroundColor: "rgba(30, 157, 185, 0.40)",
    borderWidth: 1,
    borderColor: "rgba(209, 198, 198, 0.65)",
  },
});

export default HomeScreen;
