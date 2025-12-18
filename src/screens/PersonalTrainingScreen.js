import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  Dimentions,
  TouchableOpacity,
} from "react-native";

const { width, height } = Dimensions.get("window");

const PersonalTrainingScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoStack}>
        <Text style={[styles.logoBase, styles.logoOn]}>ON</Text>
        <Text style={[styles.logoBase, styles.logoCore]}>CORE</Text>
        <Text style={[styles.logoBase, styles.logoFitness]}>FITNESS</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Image
          source={require("../../assets/On_Core_Fitness_Images/on_core_fitness_image_1.png")}
          style={styles.heroImage}
        />
        <Text style={styles.sectionTextOne}>PERSONAL TRAINING!</Text>
        <Text style={styles.sectionTextTwo}>
          TRANSFORM YOUR BODY WITH PERSONAL TRAINING
        </Text>
        <Text style={styles.sectionTextThree}>
          At On Core Fitness, our Personal Training Program is designed to
          deliver real results through customized workouts, expert coaching, and
          consistent motivation. Whether you're new to fitness or looking to
          break through a plateau, our certified trainers create tailored plans
          that align with your goals - be it weight loss, muscle gain, improved
          mobility, or overall wellness. Located in Orange, CA, we provide a
          supportive, high-energy environment where every session is focused on
          you. Experience accountability, progress, and transformation—one
          personalized session at a time.
        </Text>
        <TouchableOpacity style={styles.contactButton} activeOpacity={0.85}>
          <Text style={styles.contactLabel}>CONTACT</Text>
          <View style={styles.contactArrowCircle}>
            <Text style={styles.contactArrow}>↗</Text>
          </View>
        </TouchableOpacity>

        <Image
          source={require("../../assets/On_Core_Fitness_Images/on_core_fitness_image_2.png")}
          style={{
            width: "100%",
            height: Math.round(width * 1),
            resizeMode: "contain",
            marginTop: 10,
          }}
        />
        <View style={styles.sectionTextFiveStack}>
          <Text style={styles.sectionTextFour}>TRAIN </Text>
          <Text style={styles.sectionTextFour}>SMARTER. </Text>
          <Text style={styles.sectionTextFour}>GET </Text>
          <Text style={styles.sectionTextFive}>STRONGER. </Text>
        </View>
        <Text style={styles.sectionTextSix}>
          At On Core Fitness in Orange, CA, our expert trainers create custom
          workout plans tailored to your goals. One-on-one coaching, real
          accountability, and visible progress.
        </Text>
        <Text style={styles.sectionTextOne}>PERSONAL TRAINING PRICING</Text>
        <Text style={styles.sectionTextSix}>
          Strength, Functional, & General Fitness
        </Text>
        <View style={styles.pricingGrid}>
          <PricingCard
            title="1 SESSION"
            price="$100"
            subtitle="$100 · One Session Only"
          />

          <PricingCard
            title="8 SESSIONS"
            price="$760"
            subtitle="$95 × 8 sessions"
          />

          <PricingCard
            title="12 SESSIONS"
            price="$1,080"
            subtitle="$90 × 12 sessions"
          />

          <PricingCard
            title="24 SESSIONS"
            price="$2,040"
            subtitle="$85 × 24 sessions"
          />
        </View>
      </ScrollView>
    </View>
  );
};
const PricingCard = ({ title, price, subtitle }) => (
  <View style={styles.cardWrapper}>
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardPrice}>{price}</Text>
      <Text style={styles.cardSubtitle}>{subtitle}</Text>
    </View>

    <TouchableOpacity style={styles.signupButton} activeOpacity={0.85}>
      <Text style={styles.signupText}>SIGN UP →</Text>
    </TouchableOpacity>
  </View>
);

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

  sectionTextTwo: {
    paddingTop: 12,
    color: "#fff",
    fontSize: 16,
    lineHeight: 22,
    // fontWeight: "600", // semi-bold
    fontFamily: "RussoOne",
    textAlign: "center",
  },

  sectionTextThree: {
    paddingTop: 9,
    color: "#fff",
    fontSize: 15,
    lineHeight: 21,
    fontWeight: "400", // regular
    // fontFamily: "RussoOne",
    paddingBottom: 5,
  },
  sectionTextFour: {
    paddingTop: 9,
    color: "#fff",
    fontSize: 20,
    lineHeight: 21,
    fontWeight: "400", // regular
    // fontFamily: "RussoOne",
    fontFamily: "BlackOpsOne",
    textAlign: "center",
  },
  sectionTextFive: {
    paddingTop: 20,
    color: "#fff",
    fontSize: 30,
    lineHeight: 21,
    fontWeight: "400", // regular
    // fontFamily: "RussoOne",
    fontFamily: "BlackOpsOne",
    textAlign: "center",
    color: "#c62828", // brand red
  },
  sectionTextFiveStack: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  sectionTextSix: {
    // paddingTop: 9,
    color: "#fff",
    fontSize: 15,
    lineHeight: 21,
    fontWeight: "400", // regular
    // fontFamily: "RussoOne",
    justifyContent: "center",
    textAlign: "center",
  },
  logoBase: {
    fontSize: 33 * scale,
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
  kettlebell: {
    width: 50 * scale,
    height: 50 * scale,
    marginTop: 2,

    // shadow to match logo text
    shadowColor: "#000",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.7,
    shadowRadius: 3,
    elevation: 8, // Android
    alignSelf: "center",
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
  contactButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    alignSelf: "center",
    width: "80%",
    paddingVertical: 14,
    paddingHorizontal: 26,
    marginVertical: 24,
    borderWidth: 1.5,
    borderColor: "#fff",
    borderRadius: 999,
  },

  contactLabel: {
    color: "#fff",
    fontSize: 16,
    letterSpacing: 2,
    fontFamily: "RussoOne",
  },

  contactArrowCircle: {
    width: 44,
    height: 44,
    borderRadius: 999,
    borderWidth: 1.5,
    borderColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  contactArrow: {
    color: "#fff",
    fontSize: 20,
  },
  pricingGrid: {
    gap: 30,
    marginTop: 30,
  },

  cardWrapper: {
    alignItems: "center",
  },

  card: {
    width: "120%",
    backgroundColor: "#f2f2f2",
    borderRadius: 28,
    padding: 24,
    alignItems: "center",
  },

  cardTitle: {
    color: "#c62828",
    fontSize: 25,
    fontWeight: "700",
    letterSpacing: 1.5,
    marginBottom: 8,
    fontFamily: "RussoOne",
  },

  cardPrice: {
    fontSize: 36,
    fontWeight: "900",
    color: "#000",
    marginBottom: 10,
  },

  cardSubtitle: {
    fontSize: 14,
    color: "#333",
  },

  signupButton: {
    marginTop: 14,
    backgroundColor: "#8b1e16",
    paddingVertical: 12,
    paddingHorizontal: 26,
    borderRadius: 6,
  },

  signupText: {
    color: "#fff",
    fontSize: 14,
    letterSpacing: 1.5,
    fontFamily: "RussoOne",
  },
});

export default PersonalTrainingScreen;
