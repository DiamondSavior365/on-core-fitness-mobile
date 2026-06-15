// src/screens/member/sports/SportsGameDetailsScreen.js
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

export default function SportsGameDetailsScreen() {
  const navigation = useNavigation();
  const route = useRoute();

  const game = route.params?.game;

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
        {/* <View style={styles.heroCard}>
          <Text style={styles.heroLabel}>
            {game?.league || "LIVE GAME SESSION"}
          </Text>

          <Text style={styles.matchupTitle}>
            {game?.awayTeam || "Away Team"} vs {game?.homeTeam || "Home Team"}
          </Text>

          <Text style={styles.gameStatus}>
            {game?.status || "Game details coming soon"}
          </Text>

          <View style={styles.scoreBox}>
            <Text style={styles.scoreText}>{game?.score || "Preview"}</Text>
          </View>
        </View> */}
        <View style={styles.heroCard}>
          <View style={styles.heroTopRow}>
            <Text style={styles.heroLabel}>
              {game?.league || "LIVE GAME SESSION"}
            </Text>

            <View style={styles.statusPill}>
              <Text style={styles.statusText}>{game?.status || "Preview"}</Text>
            </View>
          </View>

          <View style={styles.scoreboardRow}>
            <View style={styles.teamBlock}>
              <Text style={styles.teamName}>{game?.awayTeam || "Away"}</Text>
              <Text style={styles.teamLabel}>Away</Text>
            </View>

            <View style={styles.centerScoreBlock}>
              <Text style={styles.scoreText}>{game?.score || "vs"}</Text>
              <Text style={styles.gameTimeText}>
                {game?.time || "Game Session"}
              </Text>
            </View>

            <View style={styles.teamBlock}>
              <Text style={[styles.teamName, styles.homeTeamName]}>
                {game?.homeTeam || "Home"}
              </Text>
              <Text style={[styles.teamLabel, styles.homeTeamName]}>Home</Text>
            </View>
          </View>

          <Text style={styles.heroSubtitle}>
            Live score tracking, team stats, play-by-play, and AI insights will
            appear here.
          </Text>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.cardTitle}>Game Overview</Text>
          <Text style={styles.cardText}>
            Live score, game clock, team stats, and play-by-play will appear
            here once the sports API is connected.
          </Text>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.cardTitle}>Team Stats</Text>
          <Text style={styles.cardText}>
            Shooting, possession, yards, hits, shots, or league-specific stats
            will be shown here.
          </Text>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.cardTitle}>Play-by-Play</Text>
          <Text style={styles.cardText}>
            Live game events and updates will be added in a later version.
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

  // matchupTitle: {
  //   color: "#ffffff",
  //   fontSize: 28,
  //   fontWeight: "900",
  //   marginBottom: 8,
  // },

  // gameStatus: {
  //   color: SOFT_GRAY,
  //   fontSize: 14,
  //   marginBottom: 16,
  // },

  // scoreBox: {
  //   backgroundColor: "rgba(17,17,17,0.9)",
  //   borderRadius: 18,
  //   paddingVertical: 18,
  //   alignItems: "center",
  //   borderWidth: 1,
  //   borderColor: "rgba(198,40,40,0.45)",
  // },

  // scoreText: {
  //   color: "#ffffff",
  //   fontSize: 34,
  //   fontWeight: "900",
  // },

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

  // ----------------------------------
  heroTopRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 18,
  },

  statusPill: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
    backgroundColor: "rgba(198,40,40,0.25)",
    borderWidth: 1,
    borderColor: "rgba(198,40,40,0.75)",
  },

  statusText: {
    color: "#ffffff",
    fontSize: 11,
    fontWeight: "900",
  },

  scoreboardRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 18,
  },

  teamBlock: {
    flex: 1,
  },

  teamName: {
    color: "#ffffff",
    fontSize: 22,
    fontWeight: "900",
  },

  homeTeamName: {
    textAlign: "right",
  },

  teamLabel: {
    color: SOFT_GRAY,
    fontSize: 12,
    fontWeight: "700",
    marginTop: 4,
  },

  centerScoreBlock: {
    width: 90,
    alignItems: "center",
  },

  gameTimeText: {
    color: SOFT_GRAY,
    fontSize: 11,
    fontWeight: "700",
    marginTop: 4,
    textAlign: "center",
  },

  heroSubtitle: {
    color: SOFT_GRAY,
    fontSize: 14,
    lineHeight: 21,
  },
  scoreText: {
    color: "#ffffff",
    fontSize: 30,
    fontWeight: "900",
  },
});
