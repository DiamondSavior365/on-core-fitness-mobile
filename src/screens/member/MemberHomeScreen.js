// src/screens/member/MemberHomeScreen.js
import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useAuth } from "../../auth/AuthContext";
import Header from "./member_components/Header";
import Footer from "./member_components/Footer";

// SVG icons (react-native-svg + svg transformer)
// 👉 Adjust paths/names if your files are slightly different
import HomeIcon from "../../../assets/icons/home.svg";
import ActivityIcon from "../../../assets/icons/activity.svg";
import ProgressIcon from "../../../assets/icons/history.svg";
import MealIcon from "../../../assets/icons/meal.svg";
import NutritionIcon from "../../../assets/icons/vegetable.svg";
import StoreIcon from "../../../assets/icons/store2.svg";
import SearchIcon from "../../../assets/icons/search.svg";
import DumbellIcon from "../../../assets/icons/dumbell.svg";
import BellIcon from "../../../assets/icons/bell.svg";
import ProfileIcon from "../../../assets/icons/profile.svg";
import ClipboardIcon from "../../../assets/icons/clipboard.svg";
import MembershipIcon from "../../../assets/icons/membership.svg";

export default function MemberHomeScreen() {
  const { user } = useAuth();

  return (
    <SafeAreaView style={styles.safeArea} edges={["top"]}>
      <View style={styles.container}>
        {/* -------------------- HEADER -------------------- */}

        <Header />
        {/* -------------------- MAIN CONTENT -------------------- */}
        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Top category tabs */}
          <View style={styles.categoryRow}>
            <View style={styles.categoryItem}>
              <DumbellIcon width={26} height={26} />
              <Text style={styles.categoryLabel}>Workout</Text>
            </View>

            <View style={styles.categoryItem}>
              <ClipboardIcon width={26} height={26} />
              <Text style={styles.categoryLabel}>Progress</Text>
            </View>

            <View style={styles.categoryItem}>
              <NutritionIcon width={26} height={26} />
              <Text style={styles.categoryLabel}>Nutrition</Text>
            </View>

            <View style={styles.categoryItem}>
              <MembershipIcon width={26} height={26} />
              <Text style={styles.categoryLabel}>Community</Text>
            </View>
          </View>

          {/* Recommendations header */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Recommendations</Text>
            <View style={styles.seeAllRow}>
              <Text style={styles.seeAllText}>See All</Text>
              <Text style={styles.seeAllArrow}>▸</Text>
            </View>
          </View>

          {/* Recommendation cards */}
          <View style={styles.cardRow}>
            <View style={styles.recommendationCard}>
              <Text style={styles.cardTitle}>Hello</Text>
              <Text style={styles.cardSubtitle}>Sample content</Text>
            </View>

            <View style={styles.recommendationCard}>
              <Text style={styles.cardTitle}>Hello</Text>
              <Text style={styles.cardSubtitle}>Sample content</Text>
            </View>
          </View>

          {/* Weekly Challenge */}
          <View style={styles.weeklySectionOuter}>
            <View style={styles.weeklySectionInner}>
              <Text style={styles.weeklyTitle}>Weekly{"\n"}Challenge</Text>
              <Text style={styles.weeklySubtitle}>Plank With Hip Twist</Text>
            </View>
          </View>
        </ScrollView>

        {/* -------------------- BOTTOM TAB BAR -------------------- */}
      </View>
      <Footer />
    </SafeAreaView>
  );
}

const BRAND_RED = "#c62828";
const BG_DARK = "#050505";
const CARD_DARK = "#171717";

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: BG_DARK,
  },
  container: {
    flex: 1,
    backgroundColor: BG_DARK,
  },

  // HEADER
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 4,
    paddingBottom: 12,
    backgroundColor: BG_DARK,
  },
  logoLine: {
    fontSize: 20,
    fontWeight: "700",
  },
  logoOn: {
    color: "#ffffff",
  },
  logoCore: {
    color: BRAND_RED,
  },
  logoFitness: {
    color: "#ffffff",
  },
  welcomeText: {
    marginTop: 4,
    fontSize: 12,
    color: "#BBBBBB",
  },
  headerIcons: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerIconSpacing: {
    marginLeft: 14,
  },

  // SCROLL AREA
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingBottom: 10, // space above tab bar
  },

  // Category tabs
  categoryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    marginBottom: 18,
  },
  categoryItem: {
    alignItems: "center",
    flex: 1,
  },
  categoryLabel: {
    color: "#ffffff",
    fontSize: 12,
    marginTop: 6,
  },

  // Recommendations section
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  sectionTitle: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },
  seeAllRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  seeAllText: {
    color: "#ffffff",
    fontSize: 12,
    marginRight: 4,
  },
  seeAllArrow: {
    color: BRAND_RED,
    fontSize: 14,
  },

  cardRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  recommendationCard: {
    flex: 1,
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 12,
    marginRight: 10,
  },
  cardTitle: {
    fontWeight: "600",
    fontSize: 14,
    marginBottom: 4,
    color: "#000",
  },
  cardSubtitle: {
    fontSize: 12,
    color: "#444",
  },

  // Weekly challenge section
  weeklySectionOuter: {
    backgroundColor: BRAND_RED,
    borderRadius: 0,
    paddingVertical: 18,
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  weeklySectionInner: {
    backgroundColor: CARD_DARK,
    borderRadius: 20,
    paddingVertical: 18,
    paddingHorizontal: 20,
  },
  weeklyTitle: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 6,
  },
  weeklySubtitle: {
    color: "#ffffff",
    fontSize: 14,
  },

  // Bottom tab bar
  bottomTabBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingBottom: 10,
    paddingTop: 8,
    paddingHorizontal: 10,
    backgroundColor: BRAND_RED,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  tabItem: {
    alignItems: "center",
    justifyContent: "center",
  },
  tabLabel: {
    marginTop: 4,
    fontSize: 11,
    color: "#ffffff",
  },
});
