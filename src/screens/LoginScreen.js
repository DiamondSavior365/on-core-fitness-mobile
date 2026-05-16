import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Image,
  ImageBackground,
  Dimensions,
} from "react-native";
import { CommonActions } from "@react-navigation/native";
import { useAuth } from "../auth/AuthContext"; // New Authentication handling
// import { supabase } from "../lib/supabase/supabase"; // Old Authentication handling
// import { useAuthContext } from "../lib/supabase/hooks/useAuthContext"; // Old Authentication handling
import { Video } from "expo-av";

const LoginScreen = ({ navigation }) => {
  const { signInWithPassword } = useAuth(); // New Authentication Member

  //   const { isLoading: authLoading } = useAuthContext(); // optional: read global loading
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  const handleSignIn = async () => {
    setErrorMsg(null);

    if (!email || !password) {
      setErrorMsg("Please enter both email and password.");
      return;
    }

    setLoading(true);

    const { error } = await signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      setErrorMsg(error.message);
    }
    // ✅ no navigation here — AuthProvider + navigator handle it
  };

  // const handleSignIn = async () => {
  //   setErrorMsg(null);
  //   if (!email || !password) {
  //     setErrorMsg("Please enter both email and password.");
  //     return;
  //   }

  //   try {
  //     setLoading(true);
  //     const { data, error } = await supabase.auth.signInWithPassword({
  //       email,
  //       password,
  //     });

  //     if (error) {
  //       setErrorMsg(error.message ?? "Failed to sign in.");
  //       console.error("Sign-in error", error);
  //     } else {
  //       // Signed in — session will be available via AuthProvider's onAuthStateChange.
  //       // navigates the user to directory screen upon login:
  //       // const resetAction = StackActions.reset({
  //       //   index: 0,
  //       //   actions: [
  //       //     NavigationActions.navigate({ routeName: "Directory_Screen" }),
  //       //   ],
  //       // });
  //       // navigation.dispatch(resetAction);
  //       navigation.dispatch(
  //         CommonActions.reset({
  //           index: 0,
  //           routes: [{ name: "Directory_Screen" }],
  //         })
  //       );
  //     }
  //   } catch (err) {
  //     console.error("Unexpected sign-in error", err);
  //     setErrorMsg("An unexpected error occurred.");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    <View style={styles.container}>
      {/* -------------------------------------VIDEO------------------------------------- */}

      {/* <Video
        source={require("../../assets/Background_Videos/Fitness_Video_Five.mp4")}
        style={StyleSheet.absoluteFill}
        shouldPlay
        isLooping
        isMuted
        resizeMode="cover"
      /> */}

      {/* ---------------------------------------------------------------------------------- */}
      {/* ----------------------------------------IMAGES------------------------------------- */}
      <ImageBackground
        // source={require("../../assets/Background_Images/Holiday_Images/Christmas/Christmas_One_ScreenShot1.jpg")}
        // source={require("../../assets/Background_Images/Season_Images/Winter/winter_image_1.jpeg")}
        // source={require("../../assets/Background_Images/Season_Images/Spring/spring_image_2.png")}
        source={require("../../assets/Background_Images/Season_Images/Summer/summer_image_2.png")}
        style={styles.background}
        resizeMode="cover"
      ></ImageBackground>
      {/* ---------------------------------------------------------------------------------- */}
      {/* --------------------------------------------LOGO---------------------------------- */}
      <View style={styles.logoStack}>
        <Text style={[styles.logoBase, styles.logoOn]}>ON</Text>
        <Text style={[styles.logoBase, styles.logoCore]}>CORE</Text>
        <Text style={[styles.logoBase, styles.logoFitness]}>FITNESS</Text>
        {/* <Image
          source={require("/Users/oscarlazo/Documents/Client_Deliverables/On_Core_Fitness/assets/logo/kettlebell_transparent.png")}
          style={styles.kettlebell}
        /> */}
      </View>
      {/* ---------------------------------------------------------------------------------- */}
      {/* <Image
        source={require("../../assets/login-icon.png")}
        style={styles.logoImage}
      /> */}
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        // placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        value={email}
        placeholder="Email"
        onChangeText={(newValue) => setEmail(newValue)}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        // placeholder="Password"
        onChangeText={(newValue) => setPassword(newValue)}
      />

      {errorMsg ? <Text style={styles.error}>{errorMsg}</Text> : null}

      <TouchableOpacity
        style={[styles.button, loading && styles.buttonDisabled]}
        onPress={handleSignIn}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator />
        ) : (
          <Text style={styles.buttonText}>Sign in</Text>
        )}
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Sign_Up_Screen")}>
        <Text style={styles.link}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Directory_Screen")}>
        <Text style={styles.guest}>Continue as guest</Text>
      </TouchableOpacity>
      {/* </View> */}

      {/* <Text>Your email is: {email}</Text>
      <Text>
        Your password is: {password ? "●".repeat(password.length) : ""}
      </Text> */}
    </View>
  );
};

// LoginScreen.navigationOptions = {
//   headerShown: true, // Show the header
//   title: "Login",
// };
const { width, height } = Dimensions.get("window");
const scale = width / 375;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    paddingBottom: "12%",
  },
  input: {
    height: 48,
    width: "95%",
    alignSelf: "center",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 12,
    backgroundColor: "#fff",
  },
  logoImage: {
    width: 200,
    height: 200,
    resizeMode: "cover",
    alignSelf: "center",
  },
  button: {
    backgroundColor: "#0382A5",
    width: "95%",
    paddingVertical: 14,
    borderRadius: 32,
    alignSelf: "center",
    alignItems: "left",
    marginTop: 8,
    marginBottom: 6,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    paddingLeft: "5%",
  },
  signUp: {
    justifyContent: "center",
    color: "#fff",
    paddingLeft: "3%",
    paddingTop: 4,
    fontSize: 15,
  },
  guest: {
    color: "blue",
    marginTop: 12,
    textAlign: "center",
  },
  button: {
    marginTop: 12,
    backgroundColor: "#2b8aef",
    padding: 12,
    borderRadius: 6,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
  },
  link: {
    color: "blue",
    marginTop: 12,
    textAlign: "center",
  },
  error: {
    textAlign: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 24,
    paddingBottom: 12,
    marginTop: 190,
    color: "#ffffff",
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
export default LoginScreen;
