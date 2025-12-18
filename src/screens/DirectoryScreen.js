import React, { useState, useEffect, useRef } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Image,
  Dimensions,
} from "react-native";
// import { useAuthContext } from "../lib/supabase/hooks/useAuthContext";
// import { useSettingsContext } from "../lib/supabase/hooks/useSettingsContext";
// import SignOutButton from "../lib/supabase/components/SignOutButton";

const DirectoryScreen = ({ navigation }) => {
  // ------------------------------------Supabase------------------------------------------
  const [metadata, setMetadata] = useState(null);
  //   const { session } = useAuthContext();
  //   const { settings } = useSettingsContext();
  const handleSignOut = async () => {
    try {
      navigation.navigate("Home");
    } catch (error) {
      console.error("Error during sign out:", error);
    }
  };

  {
    /* <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            handleSignOut();
          }}
        >
          <SignOutButton>Sign Out</SignOutButton>
        </TouchableOpacity> */
  }

  // ---------------------------------------------------------------------------------------

  // const EventButton = ({ title, onPress }) => {
  //   return (
  //     <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
  //       <View style={styles.eventButton}>
  //         <Text style={styles.eventText}>{title}</Text>
  //       </View>
  //     </TouchableOpacity>
  //   );
  // };

  return (
    <ImageBackground
      source={require("../../assets/Background_Images/Holiday_Images/Christmas/Christmas_Five_Screenshot.jpg")}
      style={styles.background}
      resizeMode="cover"
    >
      {/* <View style={styles.titleBlock}>
        <Text style={styles.titleText}>On Core Fitness</Text>
      </View> */}
      <View style={styles.logoStack}>
        <Text style={[styles.logoBase, styles.logoOn]}>ON</Text>
        <Text style={[styles.logoBase, styles.logoCore]}>CORE</Text>
        <Text style={[styles.logoBase, styles.logoFitness]}>FITNESS</Text>
      </View>
      {/* <View>
        <Image
          source={require("../../assets/logo/kettlebell_transparent.png")}
          style={styles.kettlebell}
        />
      </View> */}

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <TouchableOpacity
          style={styles.eventButton}
          activeOpacity={0.7}
          onPress={() => navigation.navigate("Personal_Training_Screen")}
        >
          <Text style={styles.eventText}>Personal Training</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.eventButton}
          activeOpacity={0.7}
          // onPress={() => navigation.navigate("Wellness_Screen")}
          onPress={() => navigation.navigate("Wellness_Screen")}
        >
          <Text style={styles.eventText}>Wellness</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.eventButton}
          activeOpacity={0.7}
          onPress={() =>
            navigation.navigate("EventListScreen", { category: "about" })
          }
        >
          <Text style={styles.eventText}>About Us</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.eventButton}
          activeOpacity={0.7}
          onPress={() =>
            navigation.navigate("EventListScreen", { category: "pricing" })
          }
        >
          <Text style={styles.eventText}>Pricing Plans</Text>
        </TouchableOpacity>
      </ScrollView>
    </ImageBackground>
  );

  // ----------------------------------Supabase------------------------------------------
  //     {metadata ? (
  //       <Text style={styles.welcomeText}>
  //         Welcome, {metadata.full_name}. You are logged in.
  //       </Text>
  //     ) : (
  //       <View>
  //         <Text style={styles.welcomeText}>You are not logged in.</Text>
  //       </View>
  //     )}
  //   </View>
  // ); <-- just under </ImageBackground>
};

{
  /* ----------------------------------------------------------------------------------- */
}
const { width, height } = Dimensions.get("window");
const scale = width / 375;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  titleBlock: {
    height: 120,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#9AA5A9",
    marginTop: 30,
  },

  titleText: {
    fontSize: 30,
    fontWeight: "600",
    color: "#FFFFFF",
    marginTop: 20,
  },

  scrollContainer: {
    paddingVertical: 20,
    alignItems: "center",
    gap: 20,
  },

  eventButton: {
    width: 360,
    height: 140,
    backgroundColor: "rgba(0, 0, 0, 0.65)",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  eventText: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "600",
  },
  background: {
    flex: 1,
    backgroundColor: "#FFFFFF",
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
});

export default DirectoryScreen;
