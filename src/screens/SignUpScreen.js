import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  Alert,
  ImageBackground,
} from "react-native";
import { useAuth } from "../auth/AuthContext"; // New Authentication Handling
import backgroundImg from "../../assets/Background_Images/sign_up_screen/background_1.png";

// import { supabase } from "../lib/supabase/supabase"; // Old Authentication Handling

const SignUpScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const { signUp } = useAuth();

  const handleSignUp = async () => {
    setErrorMsg(null);

    if (!name || !email || !password || !age || !phone) {
      setErrorMsg("Please fill in all fields.");
      return;
    }

    setLoading(true);

    const { error } = await signUp({
      email,
      password,
      options: {
        data: {
          full_name: name,
          age,
          phone,
        },
      },
    });

    setLoading(false);

    if (error) {
      setErrorMsg(error.message);
      return;
    }

    Alert.alert("Success", "Check your email to confirm your account.");
  };

  return (
    <ImageBackground
      source={backgroundImg}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.title}>Create Account</Text>

        <TextInput
          style={styles.input}
          placeholder="Name"
          placeholderTextColor="#999"
          autoCapitalize="words"
          autoCorrect={false}
          value={name}
          onChangeText={setName}
        />

        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#999"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          placeholderTextColor="#999"
          keyboardType="phone-pad"
          autoCapitalize="none"
          autoCorrect={false}
          value={phone}
          onChangeText={setPhone}
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#999"
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
          value={password}
          onChangeText={setPassword}
        />

        <TextInput
          style={styles.input}
          placeholder="Age"
          placeholderTextColor="#999"
          autoCapitalize="none"
          autoCorrect={false}
          value={age}
          onChangeText={setAge}
        />

        {errorMsg ? <Text style={styles.error}>{errorMsg}</Text> : null}

        <TouchableOpacity
          style={[styles.button, loading && styles.buttonDisabled]}
          onPress={handleSignUp}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator />
          ) : (
            <Text style={styles.buttonText}>Sign Up</Text>
          )}
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Login_Screen")}>
          <Text style={styles.link}>Already have an account? Sign In</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    // backgroundColor: "#0f0f0f", // or "#111", "#121212", "#1a1a1a"
  },
  // title: {
  //   fontSize: 28,
  //   marginBottom: 12,
  //   textAlign: "center",
  // },
  title: {
    fontSize: 28,
    marginBottom: 12,
    textAlign: "center",
    color: "white",
  },

  // input: {
  //   marginVertical: 8,
  //   padding: 10,
  //   borderColor: "black",
  //   borderWidth: 1,
  //   borderRadius: 6,
  // },
  // input: {
  //   marginVertical: 8,
  //   padding: 10,
  //   borderColor: "#444",
  //   borderWidth: 1,
  //   borderRadius: 6,
  //   color: "white",
  // },
  input: {
    marginVertical: 8,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 8,
    color: "#111",
    fontSize: 16,

    // subtle depth
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 2,
    elevation: 2, // Android
  },

  button: {
    marginTop: 12,
    backgroundColor: "#2b8aef",
    padding: 12,
    borderRadius: 6,
    alignItems: "center",
  },
  buttonDisabled: {
    opacity: 0.6,
  },
  buttonText: {
    color: "white",
    fontWeight: "600",
  },
  // link: {
  //   color: "blue",
  //   marginTop: 12,
  //   textAlign: "center",
  // },
  link: {
    color: "#4da3ff",
    marginTop: 12,
    textAlign: "center",
  },
  error: {
    color: "red",
    marginTop: 6,
    textAlign: "center",
  },
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
  },
});

export default SignUpScreen;
