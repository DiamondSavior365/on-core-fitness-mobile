import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  Alert,
} from "react-native";
// import { supabase } from "../lib/supabase/supabase";

const SignUpScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  const handleSignUp = async () => {
    setErrorMsg(null);
    if (!name || !email || !password || !age) {
      setErrorMsg("Please fill in all fields.");
      return;
    }

    try {
      setLoading(true);
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: name,
            age: age,
          },
        },
      });

      if (error) {
        setErrorMsg(error.message ?? "Failed to sign up.");
        console.error("Sign-up error", error);
      } else {
        // Show a confirmation message.
        // You might want to tell the user to check their email for confirmation.
        Alert.alert(
          "Success!",
          "Please check your email to confirm your account.",
          [{ text: "OK", onPress: () => navigation.navigate("Login_Screen") }]
        );
      }
    } catch (err) {
      console.error("Unexpected sign-up error", err);
      setErrorMsg("An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>

      <TextInput
        style={styles.input}
        placeholder="Name"
        autoCapitalize="words"
        autoCorrect={false}
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={setPassword}
      />

      <TextInput
        style={styles.input}
        placeholder="Age"
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    marginBottom: 12,
    textAlign: "center",
  },
  input: {
    marginVertical: 8,
    padding: 10,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 6,
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
  link: {
    color: "blue",
    marginTop: 12,
    textAlign: "center",
  },
  error: {
    color: "red",
    marginTop: 6,
    textAlign: "center",
  },
});

export default SignUpScreen;
