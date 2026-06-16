// src/screens/member/sports/SportsGameDetailsScreen.js
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
  Share,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation, useRoute } from "@react-navigation/native";

const BRAND_RED = "#c62828";
const SOFT_GRAY = "#BBBBBB";

const getLeagueStatLabels = (league) => {
  switch (league) {
    case "NBA":
      return {
        control: "Projected Control",
        statOne: "Field Goals",
        statTwo: "Rebounds",
        statThree: "Turnovers",
      };

    case "NFL":
      return {
        control: "Projected Control",
        statOne: "Total Yards",
        statTwo: "First Downs",
        statThree: "Turnovers",
      };

    case "MLB":
      return {
        control: "Projected Control",
        statOne: "Hits",
        statTwo: "Runs",
        statThree: "Errors",
      };

    case "NHL":
      return {
        control: "Projected Control",
        statOne: "Shots on Goal",
        statTwo: "Power Plays",
        statThree: "Penalty Minutes",
      };

    case "Soccer":
      return {
        control: "Possession",
        statOne: "Shots",
        statTwo: "Corners",
        statThree: "Fouls",
      };

    case "UFC":
      return {
        control: "Fight Control",
        statOne: "Significant Strikes",
        statTwo: "Takedowns",
        statThree: "Submission Attempts",
      };

    default:
      return {
        control: "Projected Control",
        statOne: "Attempts",
        statTwo: "Key Plays",
        statThree: "Momentum",
      };
  }
};
const getLeagueInsightText = (league) => {
  switch (league) {
    case "NBA":
      return {
        momentum:
          "AI momentum tracking will analyze scoring runs, shooting efficiency, turnovers, and late-game pressure.",
        prediction:
          "Future NBA predictions can include projected winner, confidence rating, pace, bench impact, and matchup advantages.",
        betting:
          "Long term, this can track spread trends, totals, player impact, and algorithm success rate.",
      };

    case "NFL":
      return {
        momentum:
          "AI momentum tracking will analyze drives, turnovers, field position, red zone performance, and time of possession.",
        prediction:
          "Future NFL predictions can include projected winner, confidence rating, offensive efficiency, and defensive matchup advantages.",
        betting:
          "Long term, this can track spread movement, totals, injury impact, and algorithm success rate.",
      };

    case "MLB":
      return {
        momentum:
          "AI momentum tracking will analyze pitching changes, inning pressure, runners on base, hits, and scoring chances.",
        prediction:
          "Future MLB predictions can include projected winner, confidence rating, pitching matchup, bullpen strength, and hitting trends.",
        betting:
          "Long term, this can track moneyline trends, run totals, pitcher impact, and algorithm success rate.",
      };

    case "NHL":
      return {
        momentum:
          "AI momentum tracking will analyze shots on goal, power plays, penalty minutes, goalie pressure, and scoring chances.",
        prediction:
          "Future NHL predictions can include projected winner, confidence rating, goalie matchup, power play strength, and team pace.",
        betting:
          "Long term, this can track puck line trends, totals, goalie impact, and algorithm success rate.",
      };

    case "Soccer":
      return {
        momentum:
          "AI momentum tracking will analyze possession, shots, corners, fouls, attacks, and pressure in the final third.",
        prediction:
          "Future soccer predictions can include projected winner, draw probability, confidence rating, possession trends, and scoring chances.",
        betting:
          "Long term, this can track moneyline trends, totals, both-teams-to-score signals, and algorithm success rate.",
      };

    case "UFC":
      return {
        momentum:
          "AI momentum tracking will analyze striking volume, takedowns, control time, damage, submission threats, and round-by-round pressure.",
        prediction:
          "Future UFC predictions can include projected winner, confidence rating, fighting style matchup, cardio edge, and finish probability.",
        betting:
          "Long term, this can track odds movement, method-of-victory trends, fighter history, and algorithm success rate.",
      };

    default:
      return {
        momentum:
          "AI momentum tracking will analyze live game flow, key stats, and possible turning points.",
        prediction:
          "Future predictions can include projected winner, confidence rating, matchup advantages, and algorithm success rate.",
        betting:
          "Long term, this section can provide data-driven trends, matchup analysis, and risk-aware betting insights.",
      };
  }
};
const getLeaguePlayByPlayText = (league) => {
  switch (league) {
    case "NBA":
      return {
        first:
          "Scoring runs, fouls, substitutions, timeouts, and quarter-by-quarter updates will appear here.",
        second:
          "Live feed updates can track lead changes, fast breaks, turnovers, and clutch-time momentum.",
        third:
          "AI notes can summarize key scoring stretches, defensive pressure, and late-game turning points.",
      };

    case "NFL":
      return {
        first:
          "Drives, touchdowns, field goals, penalties, sacks, and possession changes will appear here.",
        second:
          "Live feed updates can track field position, red zone trips, turnovers, and time-of-possession swings.",
        third:
          "AI notes can summarize drive efficiency, defensive stops, and key momentum-changing plays.",
      };

    case "MLB":
      return {
        first:
          "Inning-by-inning updates, runs, hits, pitching changes, and scoring chances will appear here.",
        second:
          "Live feed updates can track runners on base, bullpen moves, strikeouts, and pressure situations.",
        third:
          "AI notes can summarize pitching momentum, batting trends, and late-inning turning points.",
      };

    case "NHL":
      return {
        first:
          "Goals, shots on goal, penalties, power plays, saves, and period updates will appear here.",
        second:
          "Live feed updates can track puck control, goalie pressure, penalty kills, and scoring chances.",
        third:
          "AI notes can summarize momentum swings, power-play impact, and defensive pressure.",
      };

    case "Soccer":
      return {
        first:
          "Goals, shots, corners, fouls, substitutions, cards, and possession swings will appear here.",
        second:
          "Live feed updates can track attacking pressure, final-third chances, set pieces, and match tempo.",
        third:
          "AI notes can summarize possession trends, scoring chances, and tactical momentum.",
      };

    case "UFC":
      return {
        first:
          "Round-by-round updates, significant strikes, takedowns, control time, and submission attempts will appear here.",
        second:
          "Live feed updates can track damage, pressure, grappling control, cardio changes, and fighter momentum.",
        third:
          "AI notes can summarize round winners, style advantages, finish threats, and momentum shifts.",
      };

    default:
      return {
        first:
          "Game updates, scoring plays, substitutions, and momentum shifts will appear here once live data is connected.",
        second:
          "This section will later refresh with real-time events from the sports API.",
        third:
          "Future AI summaries can highlight key plays, team momentum, and possible turning points.",
      };
  }
};

export default function SportsGameDetailsScreen() {
  const navigation = useNavigation();
  const route = useRoute();

  const game = route.params?.game;
  const statLabels = getLeagueStatLabels(game?.league);
  const insightText = getLeagueInsightText(game?.league);
  const playByPlayText = getLeaguePlayByPlayText(game?.league);

  const isLiveGame = game?.status?.toLowerCase().includes("live");
  const centerDisplay = isLiveGame && game?.score ? game.score : "VS";
  const gameTimeDisplay = game?.time || game?.status || "Game Session";

  const [isFollowing, setIsFollowing] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const handleComingSoon = (feature) => {
    Alert.alert(
      `${feature} Coming Soon`,
      "This feature will be available once live sports data and member sports tools are connected."
    );
  };
  const handleFollowGame = () => {
    setIsFollowing((currentValue) => !currentValue);

    Alert.alert(
      isFollowing ? "Game Unfollowed" : "Game Followed",
      isFollowing
        ? "You are no longer following this game."
        : "You will be able to receive game updates once notifications are connected."
    );
  };
  const handleSaveMatchup = () => {
    setIsSaved((currentValue) => !currentValue);

    Alert.alert(
      isSaved ? "Matchup Removed" : "Matchup Saved",
      isSaved
        ? "This matchup has been removed from your saved games."
        : "This matchup will be available in your saved games once account saving is connected."
    );
  };
  const handleViewPrediction = () => {
    const awayTeam = game?.awayTeam || "Away Team";
    const homeTeam = game?.homeTeam || "Home Team";

    Alert.alert(
      "AI Prediction Preview",
      `${awayTeam} vs ${homeTeam}\n\nFuture prediction tools will show projected winner, confidence rating, momentum trends, matchup advantages, and algorithm success rate.`
    );
  };
  const handleShareGame = async () => {
    try {
      const awayTeam = game?.awayTeam || "Away Team";
      const homeTeam = game?.homeTeam || "Home Team";
      const league = game?.league || "Sports";
      const status = game?.status || "Preview";
      const scoreOrTime =
        game?.score || game?.time || "Game details coming soon";

      await Share.share({
        message: `Check out this ${league} matchup on On Core Fitness: ${awayTeam} vs ${homeTeam} • ${status} • ${scoreOrTime}`,
      });
    } catch (error) {
      Alert.alert("Share Failed", "Unable to share this game right now.");
    }
  };

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

            {/* <View style={styles.statusPill}>
              <Text style={styles.statusText}>{game?.status || "Preview"}</Text>
            </View> */}
            <View
              style={[styles.statusPill, isLiveGame && styles.liveStatusPill]}
            >
              <Text
                style={[styles.statusText, isLiveGame && styles.liveStatusText]}
              >
                {game?.status || "Preview"}
              </Text>
            </View>
          </View>

          <View style={styles.scoreboardRow}>
            <View style={styles.teamBlock}>
              <Text style={styles.teamName}>{game?.awayTeam || "Away"}</Text>
              <Text style={styles.teamLabel}>Away</Text>
            </View>

            <View style={styles.centerScoreBlock}>
              {/* <Text style={styles.scoreText}>{game?.score || "vs"}</Text>
              <Text style={styles.gameTimeText}>
                {game?.time || "Game Session"}
              </Text> */}
              <Text style={styles.scoreText}>{centerDisplay}</Text>
              <Text style={styles.gameTimeText}>{gameTimeDisplay}</Text>
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

          <View style={styles.overviewRow}>
            <Text style={styles.overviewLabel}>League</Text>
            <Text style={styles.overviewValue}>{game?.league || "Sports"}</Text>
          </View>

          <View style={styles.overviewRow}>
            <Text style={styles.overviewLabel}>Status</Text>
            <Text style={styles.overviewValue}>
              {game?.status || "Preview"}
            </Text>
          </View>

          <View style={styles.overviewRow}>
            <Text style={styles.overviewLabel}>Start Time</Text>
            <Text style={styles.overviewValue}>{game?.time || "TBD"}</Text>
          </View>

          <View style={styles.overviewRow}>
            <Text style={styles.overviewLabel}>Matchup</Text>
            <Text style={styles.overviewValue}>
              {game?.awayTeam || "Away"} vs {game?.homeTeam || "Home"}
            </Text>
          </View>
        </View>

        <View style={styles.infoCard}>
          <View style={styles.cardHeaderRow}>
            <Text style={styles.cardTitle}>AI Game Insights</Text>
            <Text style={styles.cardBadge}>Member Preview</Text>
          </View>

          <View style={styles.insightCard}>
            <Text style={styles.insightLabel}>Momentum</Text>
            <Text style={styles.insightText}>{insightText.momentum}</Text>
          </View>

          <View style={styles.insightCard}>
            <Text style={styles.insightLabel}>Prediction Model</Text>
            {/* <Text style={styles.insightText}>
              Future predictions can include projected winner, confidence
              rating, and algorithm success rate.
            </Text> */}
            <Text style={styles.insightText}>{insightText.prediction}</Text>
          </View>

          <View style={styles.insightCard}>
            <Text style={styles.insightLabel}>Betting Insights</Text>
            {/* <Text style={styles.insightText}>
              Long term, this section can provide data-driven trends, matchup
              analysis, and risk-aware betting insights.
            </Text> */}
            <Text style={styles.insightText}>{insightText.betting}</Text>
          </View>
        </View>

        {/* <View style={styles.infoCard}>
          <Text style={styles.cardTitle}>Team Stats</Text>
          <Text style={styles.cardText}>
            Shooting, possession, yards, hits, shots, or league-specific stats
            will be shown here.
          </Text>
        </View> */}
        <View style={styles.infoCard}>
          <Text style={styles.cardTitle}>Team Stats</Text>

          <View style={styles.statRow}>
            <Text style={styles.statTeam}>{game?.awayTeam || "Away"}</Text>
            <Text style={styles.statLabel}>Possession</Text>
            <Text style={styles.statTeamRight}>{game?.homeTeam || "Home"}</Text>
          </View>

          <View style={styles.statBarRow}>
            <View style={[styles.statBar, { flex: 0.48 }]} />
            <View style={styles.statBarDivider} />
            <View style={[styles.statBar, { flex: 0.52 }]} />
          </View>

          <View style={styles.statRow}>
            <Text style={styles.statValue}>48%</Text>
            {/* <Text style={styles.statLabel}>Projected Control</Text> */}
            <Text style={styles.statLabel}>{statLabels.control}</Text>
            <Text style={styles.statValueRight}>52%</Text>
          </View>

          <View style={styles.statRow}>
            <Text style={styles.statValue}>--</Text>
            {/* <Text style={styles.statLabel}>Shots / Attempts</Text> */}
            <Text style={styles.statLabel}>{statLabels.statOne}</Text>
            <Text style={styles.statValueRight}>--</Text>
          </View>

          <View style={styles.statRow}>
            <Text style={styles.statValue}>--</Text>
            {/* <Text style={styles.statLabel}>Key Plays</Text> */}
            <Text style={styles.statLabel}>{statLabels.statTwo}</Text>
            <Text style={styles.statValueRight}>--</Text>
          </View>

          <View style={styles.statRow}>
            <Text style={styles.statValue}>--</Text>
            <Text style={styles.statLabel}>{statLabels.statThree}</Text>
            <Text style={styles.statValueRight}>--</Text>
          </View>
        </View>
        {/* <View style={styles.infoCard}>
          <Text style={styles.cardTitle}>Play-by-Play</Text>
          <Text style={styles.cardText}>
            Live game events and updates will be added in a later version.
          </Text>
        </View> */}
        <View style={styles.infoCard}>
          <View style={styles.cardHeaderRow}>
            <Text style={styles.cardTitle}>Play-by-Play</Text>
            <Text style={styles.cardBadge}>Coming Soon</Text>
          </View>

          <View style={styles.playRow}>
            <View style={styles.playDot} />
            <View style={styles.playTextBlock}>
              <Text style={styles.playTime}>Pregame</Text>
              {/* <Text style={styles.playText}>
                Game updates, scoring plays, substitutions, and momentum shifts
                will appear here once live data is connected.
              </Text> */}
              <Text style={styles.playText}>{playByPlayText.first}</Text>
            </View>
          </View>

          <View style={styles.playRow}>
            <View style={styles.playDotMuted} />
            <View style={styles.playTextBlock}>
              <Text style={styles.playTime}>Live Feed</Text>
              {/* <Text style={styles.playText}>
                This section will later refresh with real-time events from the
                sports API.
              </Text> */}
              <Text style={styles.playText}>{playByPlayText.second}</Text>
            </View>
          </View>

          <View style={styles.playRow}>
            <View style={styles.playDotMuted} />
            <View style={styles.playTextBlock}>
              <Text style={styles.playTime}>AI Notes</Text>
              {/* <Text style={styles.playText}>
                Future AI summaries can highlight key plays, team momentum, and
                possible turning points.
              </Text> */}
              <Text style={styles.playText}>{playByPlayText.third}</Text>
            </View>
          </View>
        </View>
        <View style={styles.actionCard}>
          <Text style={styles.cardTitle}>Game Actions</Text>

          <View style={styles.actionGrid}>
            <TouchableOpacity
              style={[
                styles.actionButton,
                isFollowing && styles.actionButtonActive,
              ]}
              activeOpacity={0.85}
              onPress={handleFollowGame}
            >
              <Text style={styles.actionButtonText}>
                {isFollowing ? "Following" : "Follow Game"}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.actionButton,
                isSaved && styles.actionButtonActive,
              ]}
              activeOpacity={0.85}
              onPress={handleSaveMatchup}
            >
              <Text style={styles.actionButtonText}>
                {isSaved ? "Saved" : "Save Matchup"}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.actionButton}
              activeOpacity={0.85}
              onPress={handleViewPrediction}
            >
              <Text style={styles.actionButtonText}>View Prediction</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.actionButton}
              activeOpacity={0.85}
              onPress={handleShareGame}
            >
              <Text style={styles.actionButtonText}>Share Game</Text>
            </TouchableOpacity>
          </View>
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

  // ----------------Top Card Styling ------------------

  heroTopRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 18,
  },

  // statusPill: {
  //   paddingHorizontal: 12,
  //   paddingVertical: 6,
  //   borderRadius: 999,
  //   backgroundColor: "rgba(198,40,40,0.25)",
  //   borderWidth: 1,
  //   borderColor: "rgba(198,40,40,0.75)",
  // },
  statusPill: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
    backgroundColor: "rgba(255,255,255,0.08)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.14)",
  },

  // statusText: {
  //   color: "#ffffff",
  //   fontSize: 11,
  //   fontWeight: "900",
  // },
  statusText: {
    color: SOFT_GRAY,
    fontSize: 11,
    fontWeight: "900",
  },
  liveStatusPill: {
    backgroundColor: "rgba(198,40,40,0.28)",
    borderColor: "rgba(198,40,40,0.85)",
  },

  liveStatusText: {
    color: "#ffffff",
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
    fontSize: 28,
    fontWeight: "900",
    letterSpacing: 1,
  },

  // -------------- Game Overview Card Styling --------------------
  overviewRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255,255,255,0.06)",
  },

  overviewLabel: {
    color: SOFT_GRAY,
    fontSize: 13,
    fontWeight: "700",
  },

  overviewValue: {
    color: "#ffffff",
    fontSize: 13,
    fontWeight: "900",
    textAlign: "right",
    flex: 1,
    marginLeft: 12,
  },

  // -------------- AI Game Insights Card Styling --------------------
  insightCard: {
    backgroundColor: "rgba(17,17,17,0.85)",
    borderRadius: 16,
    padding: 14,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.08)",
  },

  insightLabel: {
    color: BRAND_RED,
    fontSize: 13,
    fontWeight: "900",
    marginBottom: 6,
  },

  insightText: {
    color: SOFT_GRAY,
    fontSize: 13,
    lineHeight: 19,
  },
  // -------------- Team Stats Card Styling --------------------

  statRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 8,
  },

  statTeam: {
    color: "#ffffff",
    fontSize: 13,
    fontWeight: "900",
    flex: 1,
  },

  statTeamRight: {
    color: "#ffffff",
    fontSize: 13,
    fontWeight: "900",
    flex: 1,
    textAlign: "right",
  },

  statLabel: {
    color: SOFT_GRAY,
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
    flex: 1.2,
  },

  statValue: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "800",
    flex: 1,
  },

  statValueRight: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "800",
    flex: 1,
    textAlign: "right",
  },

  statBarRow: {
    flexDirection: "row",
    height: 8,
    borderRadius: 999,
    overflow: "hidden",
    backgroundColor: "rgba(255,255,255,0.08)",
    marginVertical: 8,
  },

  statBar: {
    backgroundColor: "rgba(198,40,40,0.75)",
  },

  statBarDivider: {
    width: 2,
    backgroundColor: "#000000",
  },

  // -------------- Play-by-Play Card Styling --------------------

  cardHeaderRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
  },

  cardBadge: {
    color: "#ffffff",
    fontSize: 11,
    fontWeight: "900",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 999,
    backgroundColor: "rgba(198,40,40,0.25)",
    borderWidth: 1,
    borderColor: "rgba(198,40,40,0.65)",
  },

  playRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    paddingVertical: 10,
  },

  playDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: BRAND_RED,
    marginTop: 5,
    marginRight: 12,
  },

  playDotMuted: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "rgba(255,255,255,0.25)",
    marginTop: 5,
    marginRight: 12,
  },

  playTextBlock: {
    flex: 1,
  },

  playTime: {
    color: "#ffffff",
    fontSize: 13,
    fontWeight: "900",
    marginBottom: 4,
  },

  playText: {
    color: SOFT_GRAY,
    fontSize: 13,
    lineHeight: 19,
  },

  // -------------- Game Actions Card Styling --------------------

  actionCard: {
    backgroundColor: "rgba(0,0,0,0.55)",
    borderRadius: 18,
    padding: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.10)",
  },

  actionGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    rowGap: 12,
    marginTop: 4,
  },

  actionButton: {
    width: "48%",
    backgroundColor: "rgba(198,40,40,0.22)",
    borderRadius: 16,
    paddingVertical: 14,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "rgba(198,40,40,0.55)",
  },

  actionButtonText: {
    color: "#ffffff",
    fontSize: 13,
    fontWeight: "900",
  },
  actionButtonActive: {
    backgroundColor: "rgba(255,255,255,0.12)",
    borderColor: "rgba(255,255,255,0.35)",
  },
});
