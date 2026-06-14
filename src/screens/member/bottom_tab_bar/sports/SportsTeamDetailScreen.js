// src/screens/member/sports/SportsTeamDetailsScreen.js
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation, useRoute } from "@react-navigation/native";

const BRAND_RED = "#c62828";
const SOFT_GRAY = "#BBBBBB";

export default function SportsTeamDetailsScreen() {
  const navigation = useNavigation();
  const route = useRoute();

  const league = route.params?.league || "League";
  const team = route.params?.team || "Team";

  return (
    <LinearGradient
      colors={["#4b0f1b", "#1a0509", "#000000"]}
      locations={[0, 0.4, 1]}
      style={styles.gradient}
    >
      <View style={styles.fixedSportsHeader}>
        <View style={styles.sportsTopRow}>
          <TouchableOpacity
            style={styles.sportsBackButton}
            activeOpacity={0.8}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.sportsBackIcon}>‹</Text>
          </TouchableOpacity>

          <Text style={styles.sportsLogoText}>
            ON <Text style={styles.sportsLogoCore}>CORE</Text> FITNESS
          </Text>

          <View style={styles.sportsHeaderPlaceholder} />
        </View>
      </View>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.heroCard}>
          <Text style={styles.heroLabel}>{league} TEAM CENTER</Text>

          <Text style={styles.heroTitle}>{team}</Text>

          <Text style={styles.heroSubtitle}>
            Team schedule, recent results, roster, stats, and live game updates
            will appear here.
          </Text>

          <View style={styles.heroStatsRow}>
            <View style={styles.heroMiniStat}>
              <Text style={styles.heroMiniNumber}>0-0</Text>
              <Text style={styles.heroMiniLabel}>Record</Text>
            </View>

            <View style={styles.heroMiniStat}>
              <Text style={styles.heroMiniNumber}>Next</Text>
              <Text style={styles.heroMiniLabel}>Game</Text>
            </View>

            <View style={styles.heroMiniStat}>
              <Text style={styles.heroMiniNumber}>Stats</Text>
              <Text style={styles.heroMiniLabel}>Soon</Text>
            </View>
          </View>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.cardTitle}>Upcoming Games</Text>
          <Text style={styles.cardText}>
            Upcoming {team} games will appear here once the sports API is
            connected.
          </Text>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.cardTitle}>Recent Results</Text>
          <Text style={styles.cardText}>
            Final scores and recent performance will appear here.
          </Text>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.cardTitle}>Team Stats</Text>
          <Text style={styles.cardText}>
            League-specific team stats will be added here later.
          </Text>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },

  fixedSportsHeader: {
    paddingTop: 75,
    paddingHorizontal: 16,
    paddingBottom: 0,
  },

  sportsTopRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  sportsBackButton: {
    width: 42,
    height: 42,
    borderRadius: 14,
    backgroundColor: "rgba(0,0,0,0.45)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.10)",
    alignItems: "center",
    justifyContent: "center",
  },

  sportsBackIcon: {
    color: "#fff",
    fontSize: 38,
    fontWeight: "600",
    marginTop: -4,
  },

  sportsLogoText: {
    color: "#fff",
    fontSize: 22,
    fontFamily: "BlackOpsOne",
    letterSpacing: 1,
  },

  sportsLogoCore: {
    color: BRAND_RED,
  },

  sportsHeaderPlaceholder: {
    width: 42,
    height: 42,
  },

  scroll: {
    flex: 1,
  },

  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 18,
    paddingBottom: 100,
  },

  heroCard: {
    backgroundColor: "rgba(0,0,0,0.55)",
    borderRadius: 24,
    padding: 18,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.10)",
  },

  heroLabel: {
    color: BRAND_RED,
    fontSize: 11,
    fontWeight: "900",
    letterSpacing: 1.3,
    marginBottom: 8,
  },

  heroTitle: {
    color: "#ffffff",
    fontSize: 36,
    fontWeight: "900",
    marginBottom: 8,
  },

  heroSubtitle: {
    color: SOFT_GRAY,
    fontSize: 14,
    lineHeight: 21,
  },

  heroStatsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 18,
  },

  heroMiniStat: {
    width: "31%",
    backgroundColor: "rgba(17,17,17,0.9)",
    borderRadius: 16,
    paddingVertical: 12,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.08)",
  },

  heroMiniNumber: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "900",
  },

  heroMiniLabel: {
    color: SOFT_GRAY,
    fontSize: 11,
    marginTop: 4,
  },

  infoCard: {
    backgroundColor: "rgba(0,0,0,0.55)",
    borderRadius: 18,
    padding: 16,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: "rgba(198,40,40,0.35)",
  },

  cardTitle: {
    color: BRAND_RED,
    fontSize: 17,
    fontWeight: "900",
    marginBottom: 8,
  },

  cardText: {
    color: "#ffffff",
    fontSize: 14,
    lineHeight: 20,
  },
});
