import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import SearchIcon from "../../../../assets/icons/search.svg";
import BellIcon from "../../../../assets/icons/bell.svg";
import ProfileIcon from "../../../../assets/icons/profile.svg";
import { useAuth } from "../../../auth/AuthContext";

const Header = () => {
  const { user } = useAuth();

  return (
    <View style={styles.header}>
      {/* Logo */}
      <View>
        <Text style={styles.logoLine}>
          <Text style={styles.logoOn}>ON </Text>
          <Text style={styles.logoCore}>CORE </Text>
          <Text style={styles.logoFitness}>FITNESS</Text>
        </Text>

        {user?.email && (
          <Text style={styles.welcomeText}>Welcome, {user.email}</Text>
        )}
      </View>

      {/* Icons */}
      <View style={styles.headerIcons}>
        <TouchableOpacity style={styles.iconButton}>
          <SearchIcon width={22} height={22} color="#ffffff" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconButton}>
          <BellIcon width={22} height={22} color="#ffffff" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconButton}>
          <ProfileIcon width={22} height={22} color="#ffffff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const BRAND_RED = "#c62828";
const BG_DARK = "#050505";

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 12,
    backgroundColor: BG_DARK,
  },
  logoLine: {
    fontSize: 20,
    fontWeight: "700",
  },
  logoOn: { color: "#ffffff" },
  logoCore: { color: BRAND_RED },
  logoFitness: { color: "#ffffff" },
  welcomeText: {
    marginTop: 4,
    fontSize: 12,
    color: "#BBBBBB",
  },
  headerIcons: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconButton: {
    marginLeft: 5,
    padding: 6, // makes them easier to tap and matches iOS standards
  },

  icon: { marginLeft: 14 },
});

export default Header;
