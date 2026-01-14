import React, { useState } from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import SearchIcon from "../../../../assets/icons/search.svg";
import BellIcon from "../../../../assets/icons/bell.svg";
import ProfileIcon from "../../../../assets/icons/profile.svg";
import { useAuth } from "../../../auth/AuthContext";

const Header = () => {
  const { user, signOut } = useAuth();
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <View style={styles.headerWrapper}>
      <View style={styles.header}>
        {/* Logo */}
        <View>
          <Text style={styles.logoLine}>
            <Text style={styles.logoOn}>ON </Text>
            <Text style={styles.logoCore}>CORE </Text>
            <Text style={styles.logoFitness}>FITNESS</Text>
          </Text>

          {user && (
            <Text style={styles.welcomeText}>
              Welcome, {user.user_metadata?.full_name ?? user.email}
            </Text>
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

          {/* Profile Icon + Dropdown */}
          <View style={{ position: "relative" }}>
            <TouchableOpacity
              style={styles.iconButton}
              onPress={() => setMenuVisible((prev) => !prev)}
            >
              <ProfileIcon width={22} height={22} color="#ffffff" />
            </TouchableOpacity>

            {menuVisible && (
              <View style={styles.dropdownMenu}>
                <TouchableOpacity
                  onPress={() => {
                    setMenuVisible(false);
                    signOut(); // ← This logs out AND triggers navigation switch
                  }}
                >
                  <Text style={styles.dropdownText}>Logout</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
      </View>
    </View>
  );
};

const BRAND_RED = "#c62828";
const BG_DARK = "#050505";

const styles = StyleSheet.create({
  headerWrapper: {
    zIndex: 50, // ensures dropdown stays above everything
  },
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
    padding: 6,
  },

  /* DROPDOWN MENU */
  dropdownMenu: {
    position: "absolute",
    top: 40,
    right: 0,
    backgroundColor: "#1A1A1A",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 6,
    width: 120,
  },
  dropdownItem: {
    paddingVertical: 6,
  },
  dropdownText: {
    color: "#ffffff",
    fontSize: 14,
  },
});

export default Header;
