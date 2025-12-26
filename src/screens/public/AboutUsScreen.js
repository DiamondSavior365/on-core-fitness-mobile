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
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

const AboutUsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoStack}>
        <Text style={[styles.logoBase, styles.logoOn]}>ON</Text>
        <Text style={[styles.logoBase, styles.logoCore]}>CORE</Text>
        <Text style={[styles.logoBase, styles.logoFitness]}>FITNESS</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* ---------------------- Scroll View Section One ---------------------------- */}
        <Image
          source={require("../../../assets/On_Core_Fitness_Images/on_core_fitness_image_9.png")}
          style={styles.heroImage}
        />
        <Text style={styles.sectionTextOne}>TRAINING WITH PURPOSE</Text>
        {/* <Text style={styles.sectionTextOne}>PERSONALIZED PERFORMANCE</Text> */}
        {/* <Text style={styles.sectionTextTwo}>TRANSFORM YOUR BODY TODAY</Text> */}
        <Text style={styles.sectionTextTwo}>
          Built for Strength, Confidence, and Longevity
        </Text>
        {/* <Text style={styles.sectionTextTwo}>
          Your Goals. Your Journey. Our Commitment.
        </Text> */}
        {/* <Text style={styles.sectionTextThree}>
          Joining On Core Fitness in Orange, CA, is more than just signing up
          for a gym membership; it’s stepping into a thriving fitness community
          built on family values and a commitment to excellence. As a
          family-owned gym, On Core Fitness prioritizes personalized attention
          and genuine care for each member, ensuring a welcoming and supportive
          environment for all fitness levels. Our goal is not just to help you
          achieve your fitness objectives but also to foster meaningful
          connections and friendships within our community. With
          state-of-the-art equipment, expert trainers, and fun classes, On Core
          Fitness offers a holistic approach to health and wellness. Whether
          you’re a seasoned athlete or new to fitness, join us and experience
          the difference of a high-quality fitness community dedicated to
          helping you reach your goals.
        </Text> */}
        <Text style={styles.sectionTextThree}>
          Joining On Core Fitness in Orange, CA is more than joining a gym it’s
          becoming part of a supportive, results-driven community built on
          family values and excellence. As a family-owned training facility, we
          focus on personalized coaching, genuine relationships, and an
          environment where every member feels welcomed and supported.
        </Text>

        <Text style={[styles.sectionTextSeven]}>
          Our mission is to help you move better, feel stronger, and build
          confidence that lasts. With expert trainers, modern equipment, and
          thoughtfully designed programs, we take a holistic approach to fitness
          that adapts to you. Whether you’re just starting out or refining your
          performance, On Core Fitness is here to help you reach your goals and
          enjoy the journey along the way.
        </Text>

        <TouchableOpacity
          style={styles.contactButton}
          activeOpacity={0.85}
          onPress={() => navigation.navigate("Contact_Us_Screen")}
        >
          <Text style={styles.contactLabel}>START YOUR JOURNEY</Text>
          <View style={styles.contactArrowCircle}>
            <Text style={styles.contactArrow}>↗</Text>
          </View>
        </TouchableOpacity>
        {/* ---------------------- Scroll View Section Two ---------------------------- */}
        <Image
          source={require("../../../assets/On_Core_Fitness_Images/on_core_fitness_image_10.png")}
          style={{
            width: "100%",
            height: Math.round(width * 1),
            resizeMode: "contain",
            marginTop: 10,
            marginBottom: -30,
          }}
        />
        <Text style={styles.sectionTextTwo}>
          Where Community Meets Performance
        </Text>

        <Text style={styles.sectionTextThree}>
          Our group fitness classes combine expert coaching, intentional
          programming, and a supportive environment that keeps you motivated and
          accountable. Designed for all fitness levels, each class challenges
          you to move better, build strength, and push past limits while
          training alongside a community that supports your progress every step
          of the way.
        </Text>
        <Text style={styles.sectionTextThree}>
          <Text style={styles.sectionTextThree}>
            Led by experienced coaches, every session emphasizes proper
            movement, steady progression, and training with intention.
          </Text>
        </Text>
        <TouchableOpacity
          style={styles.contactButton}
          activeOpacity={0.85}
          onPress={() => navigation.navigate("Contact_Us_Screen")}
        >
          <Text style={styles.contactLabel}>FIND YOUR COMMUNITY</Text>
          <View style={styles.contactArrowCircle}>
            <Text style={styles.contactArrow}>↗</Text>
          </View>
        </TouchableOpacity>

        {/* ---------------------- Scroll View Section Three ---------------------------- */}
        <Image
          source={require("../../../assets/On_Core_Fitness_Images/on_core_fitness_image_11.png")}
          style={{
            width: "100%",
            height: Math.round(width * 1),
            resizeMode: "contain",
            marginTop: 10,
            marginBottom: -30,
          }}
        />
        <Text style={styles.sectionTextTwo}>Cardio With Intention</Text>

        <Text style={styles.sectionTextThree}>
          Our cardio sessions combine structured conditioning, expert coaching,
          and purposeful movement to improve endurance and elevate overall
          energy. Designed for all fitness levels, each class challenges you to
          move with efficiency, build stamina, and maintain proper form while
          training in a motivating group environment that encourages consistency
          and progress.
        </Text>

        <Text style={styles.sectionTextThree}>
          Fast paced sessions that challenge your limits while emphasizing
          proper movement, consistency, and sustainable progress.
        </Text>

        <TouchableOpacity
          style={styles.contactButton}
          activeOpacity={0.85}
          onPress={() => navigation.navigate("Contact_Us_Screen")}
        >
          {/* <Text style={styles.contactLabel}>BUILD YOUR ENDURANCE</Text> */}
          <Text style={styles.contactLabel}>ELEVATE YOUR ENERGY</Text>
          <View style={styles.contactArrowCircle}>
            <Text style={styles.contactArrow}>↗</Text>
          </View>
        </TouchableOpacity>

        {/* ---------------------- Scroll View Section Five ---------------------------- */}
        <Image
          source={require("../../../assets/On_Core_Fitness_Images/on_core_fitness_image_12.png")}
          style={{
            width: "100%",
            height: Math.round(width * 1),
            resizeMode: "contain",
            marginTop: 10,
            marginBottom: -30,
          }}
        />
        <Text style={styles.sectionTextTwo}>
          Purpose Driven Strength Training
        </Text>
        {/* <Text style={styles.sectionTextTwo}>Strength Built With Purpose</Text> */}

        <Text style={styles.sectionTextThree}>
          Our weight room sessions focus on proper form, progressive loading,
          and intentional strength training under the guidance of experienced
          coaches. Designed for all fitness levels, each session helps you build
          strength, refine technique, and develop confidence through structured
          training in a focused and supportive environment.
        </Text>

        <Text style={styles.sectionTextThree}>
          Every lift is coached with close attention to detail, safety, and
          consistent long term progress, ensuring each session is purposeful and
          results driven.
        </Text>

        <TouchableOpacity
          style={styles.contactButton}
          activeOpacity={0.85}
          onPress={() => navigation.navigate("Contact_Us_Screen")}
        >
          <Text style={styles.contactLabel}>BUILD REAL STRENGTH</Text>
          <View style={styles.contactArrowCircle}>
            <Text style={styles.contactArrow}>↗</Text>
          </View>
        </TouchableOpacity>

        {/* ---------------------- Scroll View Section Six ---------------------------- */}

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
// const PricingCard = ({ title, price, subtitle }) => (
//   <View style={styles.cardWrapper}>
//     <View style={styles.card}>
//       <Text style={styles.cardTitle}>{title}</Text>
//       <Text style={styles.cardPrice}>{price}</Text>
//       <Text style={styles.cardSubtitle}>{subtitle}</Text>
//     </View>

//     <TouchableOpacity style={styles.signupButton} activeOpacity={0.85}>
//       <Text style={styles.signupText}>SIGN UP →</Text>
//     </TouchableOpacity>
//   </View>
// );
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

  sectionTextTwo: {
    paddingTop: 0,
    color: "#fff",
    fontSize: 16,
    lineHeight: 22,
    // fontWeight: "600", // semi-bold
    fontFamily: "RussoOne",
    textAlign: "center",
  },

  sectionTextThree: {
    // paddingTop: 9,
    color: "#fff",
    fontSize: 15,
    lineHeight: 21,
    fontWeight: "400", // regular
    // fontFamily: "RussoOne",
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
  sectionTextSeven: {
    paddingTop: -5,
    color: "#fff",
    fontSize: 15,
    lineHeight: 21,
    fontWeight: "400", // regular
    // fontFamily: "RussoOne",
    paddingBottom: 5,
  },
  sectionTextEight: {
    paddingTop: -5,
    color: "#fff",
    fontSize: 15,
    lineHeight: 21,
    fontWeight: "400", // regular
    // fontFamily: "RussoOne",
    paddingBottom: 5,
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
    marginVertical: 10,
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

export default AboutUsScreen;
