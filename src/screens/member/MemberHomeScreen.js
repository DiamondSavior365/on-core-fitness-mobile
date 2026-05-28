// src/screens/member/MemberHomeScreen.js
import React, { useState, useRef, useEffect } from "react";

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Animated,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

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
import ArticleCard from "./member_components/ArticleCard";
import { fetchHealthArticles } from "../../services/ArticlesService";

// ------------------------------- WEEKLY CHALLENGES ---------------------
const WEEKLY_CHALLENGES = [
  {
    title: "Bench Press Power",
    subtitle: "Heavy Barbell Strength",
    image: require("../../../assets/Member_Recommendation_Images/bench_press_2.jpg"),
  },
  {
    title: "Bicep Builder",
    subtitle: "EZ Bar Curl Blast",
    image: require("../../../assets/Member_Recommendation_Images/bicep_curl_1.jpg"),
  },
  {
    title: "Kettlebell Control",
    subtitle: "Overhead Tricep Extension",
    image: require("../../../assets/Member_Recommendation_Images/kettlebell.jpg"),
  },
  {
    title: "Pull-Up Strength",
    subtitle: "Back & Grip Challenge",
    image: require("../../../assets/Member_Recommendation_Images/pullup_3.jpg"),
  },
];
// ----------------------------- Articles and Tips ------------------------

const ARTICLES = [
  {
    title: "Supplement Guide for Beginners",
    image: require("../../../assets/Articles_Tips_Images/supplement_2.png"),
  },
  {
    title: "Healthy Eating Essentials",
    image: require("../../../assets/Articles_Tips_Images/salad_1.png"), // ← your image
  },
];

export default function MemberHomeScreen() {
  const navigation = useNavigation();
  const { user } = useAuth();

  const [index, setIndex] = React.useState(0);
  const fadeAnim = React.useRef(new Animated.Value(1)).current;
  const slideAnim = useRef(new Animated.Value(0)).current; // 0 = centered
  const slide = useRef(new Animated.Value(0)).current; // -1 → 0 → 1 positions
  const opacity = useRef(new Animated.Value(1)).current;
  const [homeArticles, setHomeArticles] = useState(ARTICLES);
  useEffect(() => {
    async function loadHomeArticles() {
      try {
        const fetchedArticles = await fetchHealthArticles();

        if (fetchedArticles.length > 0) {
          setHomeArticles(fetchedArticles.slice(0, 2));
        }
      } catch (err) {
        console.log("Using home fallback articles:", err);
      }
    }

    loadHomeArticles();
  }, []);

  // -------------------------- Fade Out Animation -----------------------
  // Auto-rotate every 4 seconds
  // React.useEffect(() => {
  //   const interval = setInterval(() => {
  //     // Fade OUT first
  //     Animated.timing(fadeAnim, {
  //       toValue: 0,
  //       duration: 300,
  //       useNativeDriver: true,
  //     }).start(() => {
  //       // Switch to the next slide while invisible
  //       setIndex((prev) => (prev + 1) % WEEKLY_CHALLENGES.length);

  //       // Fade IN after switching
  //       Animated.timing(fadeAnim, {
  //         toValue: 1,
  //         duration: 300,
  //         useNativeDriver: true,
  //       }).start();
  //     });
  //   }, 4000);

  //   return () => clearInterval(interval);
  // }, []);
  // -----------------------------------------------------------------

  useEffect(() => {
    const interval = setInterval(() => {
      // Slide left + fade out
      Animated.parallel([
        Animated.timing(slide, {
          toValue: -1,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start(() => {
        // Move to next challenge
        setIndex((prev) => (prev + 1) % WEEKLY_CHALLENGES.length);

        // Reset instantly (but off-screen)
        slide.setValue(1); // start RIGHT side out of view
        opacity.setValue(0);

        // Slide in + fade in
        Animated.parallel([
          Animated.timing(slide, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
          }),
          Animated.timing(opacity, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
          }),
        ]).start();
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <SafeAreaView style={styles.safeArea} edges={[]}>
      <View style={styles.container}>
        {/* -------------------- HEADER -------------------- */}

        {/* <Header /> */}
        {/* -------------------- MAIN CONTENT -------------------- */}
        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Top category tabs */}
          <View style={styles.categoryRow}>
            <TouchableOpacity
              style={styles.categoryItem}
              onPress={() => navigation.navigate("Workout_Screen")}
            >
              <DumbellIcon width={36} height={36} />
              <Text style={styles.categoryLabel}>Workout</Text>
            </TouchableOpacity>

            <View style={styles.divider} />

            <TouchableOpacity style={styles.categoryItem}>
              <ClipboardIcon width={36} height={36} />
              <Text style={styles.categoryLabel}>Progress</Text>
            </TouchableOpacity>

            <View style={styles.divider} />

            <TouchableOpacity style={styles.categoryItem}>
              <NutritionIcon width={36} height={36} />
              <Text style={styles.categoryLabel}>Nutrition</Text>
            </TouchableOpacity>

            <View style={styles.divider} />

            <TouchableOpacity style={styles.categoryItem}>
              <MembershipIcon width={36} height={36} />
              <Text style={styles.categoryLabel}>Community</Text>
            </TouchableOpacity>
          </View>

          {/* Recommendations header */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Recommendations</Text>
            <TouchableOpacity
              style={styles.seeAllRow}
              onPress={() => console.log("See All Recommendations")}
            >
              <Text style={styles.seeAllText}>See All</Text>
              <Text style={styles.seeAllArrow}>▸</Text>
            </TouchableOpacity>
          </View>

          {/* Recommendation cards */}
          <View style={styles.cardRow}>
            <TouchableOpacity style={styles.recommendationCard}>
              <Image
                source={require("../../../assets/Member_Recommendation_Images/plank.jpeg")}
                style={styles.cardImage}
              />

              {/* Text section */}
              <View style={styles.cardTextContainer}>
                <Text style={styles.cardTitle}>Plank Exercise</Text>

                <View style={styles.cardStatsRow}>
                  <Text style={styles.cardStat}>12 min</Text>
                  <Text style={styles.cardStat}>120 kcal</Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.recommendationCard}>
              <Image
                source={require("../../../assets/Member_Recommendation_Images/ropes.jpeg")}
                style={styles.cardImage}
              />

              <View style={styles.cardTextContainer}>
                <Text style={styles.cardTitle}>Ropes Exercise</Text>

                <View style={styles.cardStatsRow}>
                  <Text style={styles.cardStat}>10 min</Text>
                  <Text style={styles.cardStat}>95 kcal</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>

          {/* Weekly Challenge */}
          {/* <View style={styles.weeklySectionOuter}>
            <TouchableOpacity style={styles.weeklySectionInner}>
              <View style={styles.weeklyTextContainer}>
                <Text style={styles.weeklyTitle}>Weekly{"\n"}Challenge</Text>
                <Text style={styles.weeklySubtitle}>Plank With Hip Twist</Text>
              </View>

              <Image
                source={require("../../../assets/Member_Recommendation_Images/pushup.jpg")}
                style={styles.weeklyImage}
              />
            </TouchableOpacity>
          </View> */}
          <View style={styles.weeklySectionOuter}>
            <TouchableOpacity style={styles.weeklySectionInner}>
              <Animated.View
                style={{
                  flexDirection: "row",
                  flex: 1,
                  opacity: opacity, // NEW
                  alignItems: "center",
                  transform: [
                    {
                      translateX: slide.interpolate({
                        inputRange: [-1, 0, 1],
                        outputRange: [-40, 0, 40], // slide left, center, right
                      }),
                    },
                  ],
                }}
              >
                {/* Left Side: Text */}
                <View style={styles.weeklyTextContainer}>
                  <Text style={styles.weeklyTitle}>
                    {WEEKLY_CHALLENGES[index].title}
                  </Text>
                  <Text style={styles.weeklySubtitle}>
                    {WEEKLY_CHALLENGES[index].subtitle}
                  </Text>
                </View>

                {/* Right Side: Image */}
                <Image
                  source={WEEKLY_CHALLENGES[index].image}
                  style={styles.weeklyImage}
                />
              </Animated.View>
            </TouchableOpacity>
          </View>

          {/* Articles & Tips */}
          <View style={{ marginBottom: 20 }}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Articles & Tips</Text>

              <TouchableOpacity
                style={styles.seeAllRow}
                onPress={() => navigation.navigate("Articles_Tips_Screen")}
              >
                <Text style={styles.seeAllText}>See All</Text>
                <Text style={styles.seeAllArrow}>▸</Text>
              </TouchableOpacity>
            </View>

            {/* <View style={styles.articleRow}>
              {ARTICLES.map((item, i) => (
                <TouchableOpacity key={i} style={styles.articleCard}>
                  <Image source={item.image} style={styles.articleImage} />

                  <View style={styles.articleTextWrap}>
                    <Text style={styles.articleTitle} numberOfLines={2}>
                      {item.title}
                    </Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View> */}
            <View style={styles.articleRow}>
              {homeArticles.map((item, i) => (
                <ArticleCard
                  key={i}
                  title={item.title}
                  image={item.image}
                  imageUrl={item.imageUrl}
                  compact={true}
                  onPress={() =>
                    navigation.navigate("Article_Details_Screen", {
                      article: item,
                    })
                  }
                />
              ))}
            </View>
          </View>
        </ScrollView>

        {/* -------------------- BOTTOM TAB BAR -------------------- */}
      </View>
      {/* <Footer /> */}
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
    width: "48%",
    backgroundColor: "#0D0D0D", // darker card bg for clean contrast
    borderRadius: 16,
    overflow: "hidden",
  },

  cardImage: {
    width: "100%",
    height: 140,
    resizeMode: "cover",
  },

  cardTextContainer: {
    padding: 10,
  },

  cardTitle: {
    fontWeight: "700",
    fontSize: 14,
    marginBottom: 6,
    color: "#ffffff", // white text for dark background
  },

  cardStatsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 2,
  },

  cardStat: {
    fontSize: 12,
    color: "#BBBBBB", // soft gray like the header welcome text
  },

  // Weekly challenge section
  weeklySectionOuter: {
    backgroundColor: BRAND_RED,
    borderRadius: 0,
    paddingVertical: 14,
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  // weeklySectionInner: {
  //   backgroundColor: CARD_DARK,
  //   borderRadius: 20,
  //   paddingVertical: 30,
  //   paddingHorizontal: 20,
  // },
  weeklySectionInner: {
    backgroundColor: CARD_DARK,
    borderRadius: 20,
    overflow: "hidden",
    paddingVertical: 18,
    // paddingHorizontal: 20,
    paddingLeft: 20,
    paddingRight: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 140, // optional
  },

  weeklyTextContainer: {
    flex: 1,
    paddingRight: 6,
  },
  weeklyImage: {
    width: 175,
    height: 120,
    borderRadius: 12,
    resizeMode: "cover",
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
  divider: {
    width: 1,
    height: 40, // tall like screenshot
    backgroundColor: "#ffffff",
    opacity: 0.22, // light gray/white
    marginHorizontal: 18,
  },
  // Articles Section
  articleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
