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

const TODAY_GAMES = [
  {
    id: "1",
    league: "NBA",
    awayTeam: "Lakers",
    homeTeam: "Warriors",
    time: "7:30 PM",
    status: "Upcoming",
  },
  {
    id: "2",
    league: "NFL",
    awayTeam: "Cowboys",
    homeTeam: "49ers",
    time: "5:20 PM",
    status: "Upcoming",
  },
];

const LIVE_GAMES = [
  {
    id: "1",
    league: "MLB",
    awayTeam: "Dodgers",
    homeTeam: "Padres",
    score: "3 - 2",
    status: "Live • 6th Inning",
  },
];

const UPCOMING_GAMES = [
  {
    id: "1",
    league: "NHL",
    awayTeam: "Kings",
    homeTeam: "Ducks",
    time: "Tomorrow • 6:00 PM",
    status: "Scheduled",
  },
  {
    id: "2",
    league: "Soccer",
    awayTeam: "LAFC",
    homeTeam: "Galaxy",
    time: "Sat • 7:00 PM",
    status: "Scheduled",
  },
];

function GameCard({ game, isLive = false }) {
  return (
    <TouchableOpacity style={styles.gameCard} activeOpacity={0.85}>
      <View style={styles.gameTopRow}>
        <Text style={styles.gameLeague}>{game.league}</Text>

        <View style={[styles.statusPill, isLive && styles.livePill]}>
          <Text style={styles.statusText}>{game.status}</Text>
        </View>
      </View>

      <View style={styles.matchupRow}>
        <Text style={styles.teamText}>{game.awayTeam}</Text>

        <Text style={styles.vsText}>{isLive ? game.score : "vs"}</Text>

        <Text style={styles.teamText}>{game.homeTeam}</Text>
      </View>

      {!isLive && <Text style={styles.gameTime}>{game.time}</Text>}

      {isLive && (
        <Text style={styles.liveHint}>Tap to view live game session</Text>
      )}
    </TouchableOpacity>
  );
}

export default function SportsScreen() {
  const navigation = useNavigation();

  return (
    <LinearGradient
      colors={["#4b0f1b", "#1a0509", "#000000"]}
      locations={[0, 0.4, 1]}
      style={styles.gradient}
    >
      {/* FIXED SPORTS HEADER */}
      <View style={styles.fixedSportsHeader}>
        <View style={styles.sportsTopRow}>
          <TouchableOpacity
            style={styles.sportsBackButton}
            activeOpacity={0.8}
            // onPress={() => navigation.navigate("Member_Home")}
            onPress={() =>
              navigation.navigate("Member_Root", { screen: "Member_Home" })
            }
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
        {/* <Text style={styles.heroTitle}>Sports Center</Text>
        <Text style={styles.heroSubtitle}>
          Follow scores, schedules, stats, and live games.
        </Text> */}

        <View style={styles.heroCard}>
          <Text style={styles.heroLabel}>LIVE SPORTS HUB</Text>

          <Text style={styles.heroTitle}>Sports Center</Text>

          <Text style={styles.heroSubtitle}>
            Follow scores, schedules, stats, and live game sessions across your
            favorite leagues.
          </Text>

          <View style={styles.heroStatsRow}>
            <View style={styles.heroMiniStat}>
              <Text style={styles.heroMiniNumber}>6</Text>
              <Text style={styles.heroMiniLabel}>Leagues</Text>
            </View>

            <View style={styles.heroMiniStat}>
              <Text style={styles.heroMiniNumber}>Live</Text>
              <Text style={styles.heroMiniLabel}>Games</Text>
            </View>

            <View style={styles.heroMiniStat}>
              <Text style={styles.heroMiniNumber}>Stats</Text>
              <Text style={styles.heroMiniLabel}>Coming</Text>
            </View>
          </View>
        </View>

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

        {/* <View style={styles.infoCard}>
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
        </View> */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Today’s Games</Text>
          <TouchableOpacity>
            <Text style={styles.seeAllText}>See All ▸</Text>
          </TouchableOpacity>
        </View>

        {TODAY_GAMES.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Live Games</Text>
          <TouchableOpacity>
            <Text style={styles.seeAllText}>See All ▸</Text>
          </TouchableOpacity>
        </View>

        {LIVE_GAMES.map((game) => (
          <GameCard key={game.id} game={game} isLive />
        ))}

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Upcoming Games</Text>
          <TouchableOpacity>
            <Text style={styles.seeAllText}>See All ▸</Text>
          </TouchableOpacity>
        </View>

        {UPCOMING_GAMES.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
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

  // sectionHeader: {
  //   marginBottom: 12,
  // },

  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
    marginTop: 4,
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

  // leagueCard: {
  //   width: "48%",
  //   backgroundColor: "rgba(17,17,17,0.9)",
  //   borderRadius: 18,
  //   paddingVertical: 22,
  //   alignItems: "center",
  //   borderWidth: 1,
  //   borderColor: "rgba(255,255,255,0.08)",
  // },
  leagueCard: {
    width: "48%",
    backgroundColor: "rgba(0,0,0,0.55)",
    borderRadius: 18,
    paddingVertical: 22,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "rgba(198,40,40,0.35)",
  },

  // leagueText: {
  //   color: "#ffffff",
  //   fontSize: 18,
  //   fontWeight: "900",
  // },
  leagueText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "900",
    letterSpacing: 0.5,
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

  // --------------------------

  heroCard: {
    backgroundColor: "rgba(0,0,0,0.55)",
    borderRadius: 24,
    padding: 18,
    marginBottom: 22,
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

  heroStatsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
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

  // -----------------
  seeAllText: {
    color: "#d7d7d7",
    fontSize: 13,
    fontWeight: "700",
  },

  gameCard: {
    backgroundColor: "rgba(0,0,0,0.55)",
    borderRadius: 18,
    padding: 16,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.10)",
  },

  gameTopRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 14,
  },

  gameLeague: {
    color: BRAND_RED,
    fontSize: 13,
    fontWeight: "900",
    letterSpacing: 0.8,
  },

  statusPill: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 999,
    backgroundColor: "rgba(255,255,255,0.08)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.10)",
  },

  livePill: {
    backgroundColor: "rgba(198,40,40,0.25)",
    borderColor: "rgba(198,40,40,0.75)",
  },

  statusText: {
    color: "#ffffff",
    fontSize: 11,
    fontWeight: "800",
  },

  matchupRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  teamText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "900",
    flex: 1,
  },

  vsText: {
    color: SOFT_GRAY,
    fontSize: 15,
    fontWeight: "900",
    marginHorizontal: 12,
  },

  gameTime: {
    color: SOFT_GRAY,
    fontSize: 13,
    fontWeight: "600",
  },

  liveHint: {
    color: SOFT_GRAY,
    fontSize: 12,
    fontWeight: "600",
    marginTop: 2,
  },
});
