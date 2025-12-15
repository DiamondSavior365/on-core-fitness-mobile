import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from "react-native";
import { CommonActions } from "@react-navigation/native";
// import { supabase } from "../lib/supabase/supabase";
// import { useAuthContext } from "../lib/supabase/hooks/useAuthContext";
import { Video } from "expo-av";

const LoginScreen = ({ navigation }) => {
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

    try {
      setLoading(true);
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        setErrorMsg(error.message ?? "Failed to sign in.");
        console.error("Sign-in error", error);
      } else {
        // Signed in — session will be available via AuthProvider's onAuthStateChange.
        // navigates the user to directory screen upon login:
        // const resetAction = StackActions.reset({
        //   index: 0,
        //   actions: [
        //     NavigationActions.navigate({ routeName: "Directory_Screen" }),
        //   ],
        // });
        // navigation.dispatch(resetAction);
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{ name: "Directory_Screen" }],
          })
        );
      }
    } catch (err) {
      console.error("Unexpected sign-in error", err);
      setErrorMsg("An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Video
        source={require("../../assets/Background_Videos/seal_video_2.mp4")}
        style={StyleSheet.absoluteFill}
        shouldPlay
        isLooping
        isMuted
        resizeMode="cover"
      />

      <Image
        source={require("../../assets/login-icon.png")}
        style={styles.logoImage}
      />
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
  },
});
export default LoginScreen;
