import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
// import { useAuth } from "../../auth/AuthContext";
import { useAuth } from "../auth/AuthContext";

export default function MemberHomeScreen() {
  const { user, signOut } = useAuth();

  return (
    <View style={styles.text}>
      <Text>Welcome: {user?.email}</Text>

      <TouchableOpacity
        onPress={signOut}
        style={{ marginTop: 16, padding: 14 }}
      >
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    marginTop: 80,
    padding: 20,
  },
});
