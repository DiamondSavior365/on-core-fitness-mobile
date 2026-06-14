// src/screens/member/sports/SportsLeagueScreen.js
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
import { TODAY_GAMES, LIVE_GAMES, UPCOMING_GAMES } from "./data/sportsData";

const BRAND_RED = "#c62828";
const SOFT_GRAY = "#BBBBBB";

const LEAGUE_TEAMS = {
  NBA: ["Lakers", "Warriors", "Celtics", "Bulls"],
  NFL: ["Cowboys", "49ers", "Chiefs", "Eagles"],
  MLB: ["Dodgers", "Padres", "Yankees", "Mets"],
  NHL: ["Kings", "Ducks", "Bruins", "Rangers"],
  Soccer: ["LAFC", "Galaxy", "Inter Miami", "Arsenal"],
  UFC: ["Main Card", "Prelims", "Rankings", "Events"],
};

const STANDINGS_PREVIEW = {
  NBA: [
    { team: "Lakers", record: "0-0" },
    { team: "Warriors", record: "0-0" },
    { team: "Celtics", record: "0-0" },
  ],
  NFL: [
    { team: "Cowboys", record: "0-0" },
    { team: "49ers", record: "0-0" },
    { team: "Chiefs", record: "0-0" },
  ],
  MLB: [
    { team: "Dodgers", record: "0-0" },
    { team: "Padres", record: "0-0" },
    { team: "Yankees", record: "0-0" },
  ],
  NHL: [
    { team: "Kings", record: "0-0" },
    { team: "Ducks", record: "0-0" },
    { team: "Bruins", record: "0-0" },
  ],
  Soccer: [
    { team: "LAFC", record: "0-0-0" },
    { team: "Galaxy", record: "0-0-0" },
    { team: "Inter Miami", record: "0-0-0" },
  ],
  UFC: [
    { team: "Upcoming Event", record: "TBD" },
    { team: "Main Card", record: "TBD" },
    { team: "Prelims", record: "TBD" },
  ],
};

function LeagueGameCard({ game, navigation }) {
  const isLive = game.status?.toLowerCase().includes("live");

  return (
    <TouchableOpacity
      style={styles.gameCard}
      activeOpacity={0.85}
      onPress={() =>
        navigation.navigate("Sports_Game_Details_Screen", {
          game,
        })
      }
    >
      <View style={styles.gameTopRow}>
        <Text style={styles.gameLeague}>{game.league}</Text>

        <View style={[styles.statusPill, isLive && styles.livePill]}>
          <Text style={styles.statusText}>{game.status}</Text>
        </View>
      </View>

      {/* <View style={styles.matchupRow}>
        <Text style={styles.teamText}>{game.awayTeam}</Text>

        <Text style={styles.vsText}>{game.score || "vs"}</Text>

        <Text style={styles.teamText}>{game.homeTeam}</Text>
      </View> */}

      <View style={styles.matchupRow}>
        <Text style={[styles.teamText, styles.awayTeamText]}>
          {game.awayTeam}
        </Text>

        <Text style={styles.vsText}>{game.score || "vs"}</Text>

        <Text style={[styles.teamText, styles.homeTeamText]}>
          {game.homeTeam}
        </Text>
      </View>

      {game.time && <Text style={styles.gameTime}>{game.time}</Text>}

      {isLive && (
        <Text style={styles.liveHint}>Tap to view live game session</Text>
      )}
    </TouchableOpacity>
  );
}
function EmptyCard({ text }) {
  return (
    <View style={styles.emptyCard}>
      <Text style={styles.emptyText}>{text}</Text>
    </View>
  );
}

export default function SportsLeagueScreen() {
  const navigation = useNavigation();
  const route = useRoute();

  const league = route.params?.league || "League";

  const allGames = [...TODAY_GAMES, ...LIVE_GAMES, ...UPCOMING_GAMES];

  const leagueGames = allGames.filter((game) => game.league === league);

  const leagueTeams = LEAGUE_TEAMS[league] || [];

  const standings = STANDINGS_PREVIEW[league] || [];

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
          <Text style={styles.heroLabel}>LEAGUE CENTER</Text>
          <Text style={styles.heroTitle}>{league}</Text>
          <Text style={styles.heroSubtitle}>
            Schedules, scores, standings, team stats, and live game sessions
            will appear here.
          </Text>

          <View style={styles.heroStatsRow}>
            <View style={styles.heroMiniStat}>
              <Text style={styles.heroMiniNumber}>{leagueGames.length}</Text>
              <Text style={styles.heroMiniLabel}>Games</Text>
            </View>

            <View style={styles.heroMiniStat}>
              <Text style={styles.heroMiniNumber}>{leagueTeams.length}</Text>
              <Text style={styles.heroMiniLabel}>Teams</Text>
            </View>

            <View style={styles.heroMiniStat}>
              <Text style={styles.heroMiniNumber}>Live</Text>
              <Text style={styles.heroMiniLabel}>Soon</Text>
            </View>
          </View>
        </View>

        {/* <View style={styles.infoCard}>
          <Text style={styles.cardTitle}>Today’s {league} Games</Text>
          <Text style={styles.cardText}>
            League-specific game data will be connected here later.
          </Text>
        </View> */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>{league} Games</Text>
          <TouchableOpacity>
            <Text style={styles.seeAllText}>See All ▸</Text>
          </TouchableOpacity>
        </View>

        {leagueGames.length > 0 ? (
          leagueGames.map((game) => (
            <LeagueGameCard key={game.id} game={game} navigation={navigation} />
          ))
        ) : (
          <EmptyCard text={`No ${league} games are available yet.`} />
        )}

        {/* <View style={styles.infoCard}>
          <Text style={styles.cardTitle}>{league} Standings</Text>
          <Text style={styles.cardText}>
            Team rankings and records will appear here once the sports API is
            connected.
          </Text>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.cardTitle}>Live {league} Sessions</Text>
          <Text style={styles.cardText}>
            Live scores, clocks, stats, and play-by-play will be added in a
            later version.
          </Text>
        </View> */}

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Standings Preview</Text>
        </View>

        <View style={styles.standingsCard}>
          {standings.map((item, index) => (
            <View key={item.team} style={styles.standingRow}>
              <Text style={styles.standingRank}>{index + 1}</Text>
              <Text style={styles.standingTeam}>{item.team}</Text>
              <Text style={styles.standingRecord}>{item.record}</Text>
            </View>
          ))}
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Featured Teams</Text>
        </View>

        {/* <View style={styles.teamGrid}>
          {leagueTeams.map((team) => (
            <TouchableOpacity
              key={team}
              style={styles.teamCard}
              activeOpacity={0.85}
            >
              <Text style={styles.teamCardText}>{team}</Text>
            </TouchableOpacity>
          ))}
        </View> */}

        <View style={styles.teamGrid}>
          {leagueTeams.map((team) => (
            <TouchableOpacity
              key={team}
              style={styles.teamCard}
              activeOpacity={0.85}
              onPress={() =>
                navigation.navigate("Sports_Team_Details_Screen", {
                  league,
                  team,
                })
              }
            >
              <Text style={styles.teamCardText}>{team}</Text>
            </TouchableOpacity>
          ))}
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
    fontSize: 34,
    fontWeight: "900",
    marginBottom: 6,
  },

  heroSubtitle: {
    color: SOFT_GRAY,
    fontSize: 14,
    lineHeight: 20,
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
  // -----------------------------------
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
  // -------------------
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
    marginTop: 4,
  },

  sectionTitle: {
    color: "#ffffff",
    fontSize: 24,
    fontWeight: "900",
  },

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

  // matchupRow: {
  //   flexDirection: "row",
  //   alignItems: "center",
  //   justifyContent: "space-between",
  //   marginBottom: 10,
  // },

  // teamText: {
  //   color: "#ffffff",
  //   fontSize: 18,
  //   fontWeight: "900",
  //   flex: 1,
  // },

  // vsText: {
  //   color: SOFT_GRAY,
  //   fontSize: 15,
  //   fontWeight: "900",
  //   marginHorizontal: 12,
  // },

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

  awayTeamText: {
    // textAlign: "left",
    textAlign: "center",
  },

  homeTeamText: {
    // textAlign: "right",
    textAlign: "center",
  },

  vsText: {
    color: SOFT_GRAY,
    fontSize: 15,
    fontWeight: "900",
    width: 42,
    textAlign: "center",
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

  emptyCard: {
    backgroundColor: "rgba(0,0,0,0.45)",
    borderRadius: 18,
    padding: 16,
    marginBottom: 18,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.08)",
  },

  emptyText: {
    color: SOFT_GRAY,
    fontSize: 14,
    lineHeight: 20,
  },
  // --------------------------------
  standingsCard: {
    backgroundColor: "rgba(0,0,0,0.55)",
    borderRadius: 18,
    padding: 16,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: "rgba(198,40,40,0.35)",
  },

  standingRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255,255,255,0.06)",
  },

  standingRank: {
    color: BRAND_RED,
    fontSize: 15,
    fontWeight: "900",
    width: 30,
  },

  standingTeam: {
    color: "#ffffff",
    fontSize: 15,
    fontWeight: "800",
    flex: 1,
  },

  standingRecord: {
    color: SOFT_GRAY,
    fontSize: 14,
    fontWeight: "700",
  },

  teamGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    rowGap: 12,
    marginBottom: 20,
  },

  teamCard: {
    width: "48%",
    backgroundColor: "rgba(0,0,0,0.55)",
    borderRadius: 18,
    paddingVertical: 20,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "rgba(198,40,40,0.35)",
  },

  teamCardText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "900",
  },
});
