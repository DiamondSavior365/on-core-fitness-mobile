// src/screens/member/sports/SportsScreen.js
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const BRAND_RED = "#c62828";
const CARD_DARK = "#111111";
const SOFT_GRAY = "#BBBBBB";

const LEAGUES = ["NBA", "NFL", "MLB", "NHL", "Soccer", "UFC"];

export default function SportsScreen() {
  const navigation = useNavigation();

  return (
    <LinearGradient
      colors={["#4b0f1b", "#1a0509", "#000000"]}
      locations={[0, 0.4, 1]}
      style={styles.gradient}
    >
      {/* <View style={styles.topRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backText}>‹ Back</Text>
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Sports</Text>

        <View style={styles.placeholder} />
      </View> */}
      {/* FIXED SPORTS HEADER */}
      <View style={styles.fixedSportsHeader}>
        <View style={styles.sportsTopRow}>
          <TouchableOpacity
            style={styles.sportsBackButton}
            activeOpacity={0.8}
            onPress={() => navigation.navigate("Member_Home")}
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
        <Text style={styles.heroTitle}>Sports Center</Text>
        <Text style={styles.heroSubtitle}>
          Follow scores, schedules, stats, and live games.
        </Text>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Leagues</Text>
        </View>

        <View style={styles.leagueGrid}>
          {LEAGUES.map((league) => (
            <TouchableOpacity key={league} style={styles.leagueCard}>
              <Text style={styles.leagueText}>{league}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.cardTitle}>Today’s Games</Text>
          <Text style={styles.cardText}>
            Upcoming schedules and live scores will appear here.
          </Text>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.cardTitle}>Live Game Sessions</Text>
          <Text style={styles.cardText}>
            Live score tracking, game clocks, team stats, and play-by-play will
            be added later.
          </Text>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.cardTitle}>Upcoming Features</Text>
          <Text style={styles.cardText}>
            Team pages, player stats, favorite teams, schedules, and live game
            updates.
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

  topRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingTop: 52,
    paddingBottom: 14,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255,255,255,0.08)",
  },

  backText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "700",
  },

  headerTitle: {
    color: "#ffffff",
    fontSize: 22,
    fontWeight: "900",
  },

  placeholder: {
    width: 52,
  },

  scroll: {
    flex: 1,
  },

  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 18,
    paddingBottom: 100,
  },

  heroTitle: {
    color: "#ffffff",
    fontSize: 32,
    fontWeight: "900",
    marginBottom: 6,
  },

  heroSubtitle: {
    color: SOFT_GRAY,
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 22,
  },

  sectionHeader: {
    marginBottom: 12,
  },

  sectionTitle: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "900",
  },

  leagueGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    rowGap: 12,
    marginBottom: 20,
  },

  leagueCard: {
    width: "48%",
    backgroundColor: "rgba(17,17,17,0.9)",
    borderRadius: 18,
    paddingVertical: 22,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.08)",
  },

  leagueText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "900",
  },

  infoCard: {
    backgroundColor: "rgba(17,17,17,0.9)",
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
    color: "#c62828",
  },

  sportsHeaderPlaceholder: {
    width: 42,
    height: 42,
  },
});
