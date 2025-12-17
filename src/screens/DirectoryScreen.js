import React, { useState, useEffect, useRef } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
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

  const EventButton = ({ title, onPress }) => {
    return (
      <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
        <View style={styles.eventButton}>
          <Text style={styles.eventText}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleBlock}>
        <Text style={styles.titleText}>On Core Fitness</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <EventButton
          title="Personal Training"
          onPress={() =>
            navigation.navigate("EventListScreen", { category: "halloween" })
          }
        />

        <EventButton
          title="Wellness"
          onPress={() =>
            navigation.navigate("EventListScreen", { category: "wellness" })
          }
        />

        <EventButton
          title="About Us"
          onPress={() =>
            navigation.navigate("EventListScreen", { category: "about" })
          }
        />

        <EventButton
          title="Pricing Plans"
          onPress={() =>
            navigation.navigate("EventListScreen", { category: "pricing" })
          }
        />
      </ScrollView>

      {/* ----------------------------------Supabase------------------------------------------ */}
      {metadata ? (
        <Text style={styles.welcomeText}>
          Welcome, {metadata.full_name}. You are logged in.
        </Text>
      ) : (
        <View>
          <Text style={styles.welcomeText}>You are not logged in.</Text>
        </View>
      )}
    </View>
  );
};

{
  /* ----------------------------------------------------------------------------------- */
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  titleBlock: {
    height: 90,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9AA5A9",
  },

  titleText: {
    fontSize: 30,
    fontWeight: "600",
    color: "#FFFFFF",
    marginTop: 10,
  },

  scrollContainer: {
    paddingVertical: 20,
    alignItems: "center",
    gap: 20,
  },

  eventButton: {
    width: 360,
    height: 140,
    backgroundColor: "#000000",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  eventText: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "600",
  },
});

export default DirectoryScreen;
