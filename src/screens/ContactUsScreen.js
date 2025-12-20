import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

const ContactUsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoStack}>
        <Text style={[styles.logoBase, styles.logoOn]}>ON</Text>
        <Text style={[styles.logoBase, styles.logoCore]}>CORE</Text>
        <Text style={[styles.logoBase, styles.logoFitness]}>FITNESS</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Image
          source={require("../../assets/On_Core_Fitness_Images/on_core_fitness_image_15.png")}
          style={styles.heroImage}
        />
        <Text style={[styles.sectionTextOne, styles.logoCore]}>CONTACT US</Text>
        <Text style={styles.sectionTextTwo}>
          We're here to support your fitness journey - reach out and connect
          with our team.
        </Text>
        <Text style={styles.sectionTextTwo}>
          2688 Santiago Blvd., Orange, CA 92867
        </Text>
        <Text style={styles.sectionTextTwo}>Everyday from 4AM – 11PM</Text>
        <Text style={styles.sectionTextTwo}>Phone: 714-988-7987</Text>
      </ScrollView>
    </View>
  );
};
const PricingCard = ({ title, price, subtitle }) => {
  const navigation = useNavigation(); // Use hook here since PricingCard is not a screen component

  return (
    <View style={styles.cardWrapper}>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardPrice}>{price}</Text>
        <Text style={styles.cardSubtitle}>{subtitle}</Text>
      </View>

      <TouchableOpacity
        style={styles.signupButton}
        activeOpacity={0.85}
        onPress={() => navigation.navigate("Contact_Us_Screen")}
      >
        <Text style={styles.signupText}>SIGN UP →</Text>
      </TouchableOpacity>
    </View>
  );
};
const scale = width / 375;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },

  /* HERO */
  heroContainer: {
    width: "100%",
    position: "relative",
  },

  heroImage: {
    width: width,
    height: Math.round(width * 0.45),

    resizeMode: "cover",
  },
  content: {
    padding: 20,
    backgroundColor: "#000",
  },

  sectionTextOne: {
    paddingTop: 15,
    color: "#fff",
    fontSize: 25,
    lineHeight: 26,
    fontWeight: "800", // max bold
    fontFamily: "RussoOne",
    textAlign: "center",
  },

  // sectionTextTwo: {
  //   paddingTop: 12,
  //   color: "#fff",
  //   fontSize: 16,
  //   lineHeight: 22,
  //   // fontWeight: "600", // semi-bold
  //   fontFamily: "RussoOne",
  //   textAlign: "center",
  // },

  sectionTextTwo: {
    marginVertical: -5,
    paddingHorizontal: 5,
    color: "#fff",
    fontSize: 15,
    lineHeight: 21,
    fontWeight: "400", // regular
    alignItems: "center",
    textAlign: "center",
  },
  logoBase: {
    fontSize: 33 * scale,
    fontWeight: "bold",
    letterSpacing: 3,
    textAlign: "center",

    textShadowColor: "#000",
    textShadowOffset: { width: 6, height: 7 },
    textShadowRadius: 10,
    fontFamily: "BlackOpsOne",
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
  logoStack: {
    flexDirection: "row", // 👈 THIS is the key
    alignItems: "center",
    justifyContent: "center",
    marginTop: 110,
    gap: 8, // spacing between words (RN 0.71+)
  },
  scrollContainer: {
    paddingVertical: 20,
    alignItems: "center",
    gap: 20,
  },
});

export default ContactUsScreen;
