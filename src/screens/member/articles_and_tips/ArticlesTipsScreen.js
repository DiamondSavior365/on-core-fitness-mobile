import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const BRAND_RED = "#c62828";
const BG_DARK = "#050505";
const CARD_DARK = "#0D0D0D";

const TEMP_ARTICLES = [
  {
    title: "Supplement Guide for Beginners",
    category: "Supplements",
    description:
      "Learn the basics of supplements and how they support training.",
    image: require("../../../../assets/Articles_Tips_Images/supplement_1.png"),
  },
  {
    title: "Healthy Eating Essentials",
    category: "Nutrition",
    description: "Simple nutrition habits to support your fitness goals.",
    image: require("../../../../assets/Articles_Tips_Images/salad_1.png"),
  },
  {
    title: "Recovery Tips After Training",
    category: "Recovery",
    description:
      "Improve recovery with hydration, sleep, stretching, and rest.",
    image: require("../../../../assets/Articles_Tips_Images/supplement_2.png"),
  },
];

export default function ArticlesTipsScreen() {
  return (
    <SafeAreaView style={styles.safeArea} edges={[]}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.headerSection}>
          <Text style={styles.screenTitle}>Articles & Tips</Text>
          <Text style={styles.screenSubtitle}>
            Health, nutrition, recovery, and fitness content to support your
            goals.
          </Text>
        </View>

        <View style={styles.articleList}>
          {TEMP_ARTICLES.map((item, index) => (
            <TouchableOpacity key={index} style={styles.articleCard}>
              <Image source={item.image} style={styles.articleImage} />

              <View style={styles.articleContent}>
                <Text style={styles.categoryText}>{item.category}</Text>
                <Text style={styles.articleTitle}>{item.title}</Text>
                <Text style={styles.articleDescription} numberOfLines={2}>
                  {item.description}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: BG_DARK,
  },

  container: {
    flex: 1,
    backgroundColor: BG_DARK,
  },

  scrollContent: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },

  headerSection: {
    marginTop: 12,
    marginBottom: 18,
  },

  screenTitle: {
    color: "#ffffff",
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 6,
  },

  screenSubtitle: {
    color: "#BBBBBB",
    fontSize: 13,
    lineHeight: 19,
  },

  articleList: {
    gap: 14,
  },

  articleCard: {
    backgroundColor: CARD_DARK,
    borderRadius: 16,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.08)",
  },

  articleImage: {
    width: "100%",
    height: 170,
    resizeMode: "cover",
  },

  articleContent: {
    padding: 12,
  },

  categoryText: {
    color: BRAND_RED,
    fontSize: 12,
    fontWeight: "700",
    marginBottom: 5,
    textTransform: "uppercase",
  },

  articleTitle: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 6,
  },

  articleDescription: {
    color: "#BBBBBB",
    fontSize: 13,
    lineHeight: 18,
  },
});
