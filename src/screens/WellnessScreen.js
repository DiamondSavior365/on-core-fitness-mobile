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

const WellnessScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoStack}>
        <Text style={[styles.logoBase, styles.logoOn]}>ON</Text>
        <Text style={[styles.logoBase, styles.logoCore]}>CORE</Text>
        <Text style={[styles.logoBase, styles.logoFitness]}>FITNESS</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Image
          source={require("../../assets/On_Core_Fitness_Images/on_core_fitness_image_3.png")}
          style={styles.heroImage}
        />
        {/* ------------------------------------------------------------------------------------ */}
        <Text style={styles.sectionTextOne}>RED LIGHT THERAPY</Text>
        {/* <Text style={styles.sectionTextTwo}>LIGHT UP YOUR RECOVERY</Text> */}
        {/* <Text style={styles.sectionTextTwo}>BETTER RECOVERY STARTS HERE</Text> */}
        <Text style={styles.sectionTextTwo}>SCIENCE SUPPORTED RECOVERY</Text>
        <Text style={styles.sectionTextThree}>
          Red Light Therapy is a non-invasive treatment that uses low-level red
          and near-infrared light to stimulate cellular repair, reduce
          inflammation, and accelerate recovery. At On Core Fitness, it’s a
          powerful tool to support muscle healing, joint health, and skin
          rejuvenation. Whether you're recovering from intense workouts or
          looking to improve overall wellness, Red Light Therapy helps you
          recover faster and feel stronger.
        </Text>
        <Image
          source={require("../../assets/On_Core_Fitness_Images/on_core_fitness_image_5.png")}
          style={styles.heroImage}
        />
        <TouchableOpacity
          style={styles.contactButton}
          activeOpacity={0.85}
          onPress={() => navigation.navigate("Contact_Us_Screen")}
        >
          {/* <Text style={styles.contactLabel}>CHECK IT OUT? GIVE US A CALL.</Text> */}
          {/* <Text style={styles.contactLabel}>BOOK A SESSION</Text> */}
          <Text style={styles.contactLabel}>FIND YOUR RECOVERY</Text>
          <View style={styles.contactArrowCircle}>
            <Text style={styles.contactArrow}>↗</Text>
          </View>
        </TouchableOpacity>
        {/* ------------------------------------------------------------------------------------ */}
        {/* ------------------------------------------------------------------------------------ */}
        <Text style={styles.sectionTextOne}>BEMER CIRCULATION THERAPY</Text>
        {/* <Text style={styles.sectionTextTwo}>
          REVIVE YOUR LEGS. RECHARGE YOUR LIFE.
        </Text> */}
        {/* <Text style={styles.sectionTextTwo}>SUPPORT HEALTHY CIRCULATION</Text> */}
        <Text style={styles.sectionTextTwo}>ADVANCED CIRCULATION SUPPORT</Text>
        {/* <Text style={styles.sectionTextThree}>
          Experience next-level recovery with the Normatec 3 Legs at On Core
          Fitness. This dynamic air compression system is designed to enhance
          circulation, reduce muscle soreness, and speed up recovery after
          workouts or long days on your feet. Whether you're an athlete, a
          fitness enthusiast, or simply looking to feel better and move easier,
          Normatec delivers targeted leg compression therapy that helps you
          bounce back faster. Book your session today and give your legs the
          recovery they deserve.
        </Text> */}
        <Text style={styles.sectionTextThree}>
          BEMER Circulation Therapy uses low level electromagnetic signals to
          support healthy blood flow and improve microcirculation throughout the
          body. At On Core Fitness, it is used to aid recovery, reduce muscle
          tension, and support overall wellness after training or long periods
          of activity. Whether you are focused on performance or daily recovery,
          BEMER provides a comfortable and restorative experience designed to
          help you feel better and move with greater ease.
        </Text>

        <Image
          source={require("../../assets/On_Core_Fitness_Images/on_core_fitness_image_6.png")}
          style={{
            width: "100%",
            height: Math.round(width * 1),
            resizeMode: "contain",
            marginTop: 10,
          }}
        />
        <TouchableOpacity
          style={styles.contactButton}
          activeOpacity={0.85}
          onPress={() => navigation.navigate("Contact_Us_Screen")}
        >
          {/* <Text style={styles.contactLabel}>CHECK IT OUT? GIVE US A CALL.</Text> */}
          {/* <Text style={styles.contactLabel}>LEARN MORE</Text> */}
          {/* <Text style={styles.contactLabel}>DISCOVER BEMER</Text> */}
          <Text style={styles.contactLabel}>SCHEDULE A SESSION</Text>
          <View style={styles.contactArrowCircle}>
            <Text style={styles.contactArrow}>↗</Text>
          </View>
        </TouchableOpacity>
        {/* ------------------------------------------------------------------------------------ */}

        {/* ------------------------------------------------------------------------------------ */}
        <Text style={styles.sectionTextOne}>INFRARED SAUNA</Text>
        {/* <Text style={styles.sectionTextTwo}>DETOX. RELAX. RESTORE.</Text> */}
        <Text style={styles.sectionTextTwo}>RESTORATIVE HEAT THERAPY</Text>

        {/* <Text style={styles.sectionTextThree}>
          Unwind, detoxify, and recharge in our state-of-the-art Infrared Sauna
          at On Core Fitness. Using gentle infrared heat, this therapy
          penetrates deep into your muscles and joints to promote circulation,
          reduce inflammation, and support natural detoxification. Whether
          you're recovering from a tough workout or looking to boost your
          overall wellness, our infrared sauna offers a relaxing and restorative
          experience that helps you feel refreshed from the inside out.
        </Text> */}
        <Text style={styles.sectionTextThree}>
          Our Infrared Sauna uses gentle radiant heat to support relaxation,
          circulation, and muscle recovery in a calm and controlled environment.
          Unlike traditional saunas, infrared heat warms the body more
          comfortably, helping reduce muscle tension and promote overall
          wellness. Whether you are winding down after training or prioritizing
          recovery, the infrared sauna offers a restorative experience designed
          to help you feel relaxed and refreshed.
        </Text>

        <Image
          source={require("../../assets/On_Core_Fitness_Images/on_core_fitness_image_7.png")}
          style={{
            width: "100%",
            height: Math.round(width * 1),
            resizeMode: "contain",
            marginTop: 10,
          }}
        />
        <TouchableOpacity
          style={styles.contactButton}
          activeOpacity={0.85}
          onPress={() => navigation.navigate("Contact_Us_Screen")}
        >
          {/* <Text style={styles.contactLabel}>CHECK IT OUT? GIVE US A CALL.</Text> */}
          <Text style={styles.contactLabel}>PRIORITIZE RECOVERY</Text>
          <View style={styles.contactArrowCircle}>
            <Text style={styles.contactArrow}>↗</Text>
          </View>
        </TouchableOpacity>
        {/* ------------------------------------------------------------------------------------ */}

        {/* ------------------------------------------------------------------------------------ */}
        <Text style={styles.sectionTextOne}>INBODY MEASUREMENT SCAN</Text>
        {/* <Text style={styles.sectionTextTwo}>DATA THAT DRIVES RESULTS..</Text> */}
        <Text style={styles.sectionTextTwo}>INSIGHT THAT DRIVES PROGRESS</Text>

        {/* <Text style={styles.sectionTextThree}>
          The InBody Result Sheet delivers your body composition measurements in
          a clear, easy-to-read format, providing an effective overview that
          helps you quickly understand your physical health and track progress
          with confidence. Every InBody Test includes a full-page Result Sheet
          printout that details muscle, fat, and water measurements and
          highlights specific areas to focus on.
        </Text> */}
        <Text style={styles.sectionTextThree}>
          The InBody Measurement Scan provides a clear and detailed view of your
          body composition, helping you understand key metrics such as muscle
          mass, body fat, and water distribution. Each scan includes a
          comprehensive results report that highlights areas of strength and
          opportunities for improvement, giving you reliable data to track
          progress and guide smarter training and recovery decisions.
        </Text>

        <Image
          source={require("../../assets/On_Core_Fitness_Images/on_core_fitness_image_8.png")}
          style={{
            width: "100%",
            height: Math.round(width * 1),
            resizeMode: "contain",
            marginTop: 10,
          }}
        />
        <TouchableOpacity
          style={styles.contactButton}
          activeOpacity={0.85}
          onPress={() => navigation.navigate("Contact_Us_Screen")}
        >
          {/* <Text style={styles.contactLabel}>TEST IT OUT? LET US KNOW</Text> */}
          {/* <Text style={styles.contactLabel}>VIEW YOUR RESULTS</Text> */}
          {/* <Text style={styles.contactLabel}>DISCOVER INBODY</Text> */}
          <Text style={styles.contactLabel}>SCHEDULE A SCAN</Text>
          <View style={styles.contactArrowCircle}>
            <Text style={styles.contactArrow}>↗</Text>
          </View>
        </TouchableOpacity>
        {/* ------------------------------------------------------------------------------------ */}

        {/* <Image
          source={require("../../assets/On_Core_Fitness_Images/on_core_fitness_image_2.png")}
          style={{
            width: "100%",
            height: Math.round(width * 1),
            resizeMode: "contain",
            marginTop: 10,
          }}
        /> */}
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

export default WellnessScreen;
