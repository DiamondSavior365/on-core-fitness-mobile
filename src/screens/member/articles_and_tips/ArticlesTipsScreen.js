import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ArticleCard from "../member_components/ArticleCard";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { fetchCuratedArticles } from "../../../services/ArticlesService";

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
  const navigation = useNavigation();
  const [articles, setArticles] = useState(TEMP_ARTICLES);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadArticles() {
      try {
        setLoading(true);
        setError(null);

        // const fetchedArticles = await fetchHealthArticles();
        const fetchedArticles = await fetchCuratedArticles();

        if (fetchedArticles.length > 0) {
          setArticles(fetchedArticles);
        }
      } catch (err) {
        console.log("Using temporary articles for now:", err);
        setError("Unable to load live articles right now.");
      } finally {
        setLoading(false);
      }
    }

    loadArticles();
  }, []);

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

        {/* ---------------------------------------- */}
        {loading && <Text style={styles.statusText}>Loading articles...</Text>}

        {error && !loading && (
          <Text style={styles.errorText}>
            Unable to load curated articles. Showing saved articles for now.
          </Text>
        )}

        {!loading && articles.length === 0 && (
          <Text style={styles.emptyText}>No articles available yet.</Text>
        )}
        {/* ---------------------------------------- */}

        {articles.length > 0 && (
          <View style={styles.articleList}>
            {articles.map((item, index) => (
              <ArticleCard
                key={item.id || index}
                title={item.title}
                image={item.image}
                imageUrl={item.imageUrl}
                category={item.category}
                description={item.description}
                onPress={() =>
                  navigation.navigate("Article_Details_Screen", {
                    article: item,
                  })
                }
              />
            ))}
          </View>
        )}
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
  // ------------------ Loading Styles --------------------------
  statusText: {
    color: "#BBBBBB",
    fontSize: 13,
    marginBottom: 12,
  },

  errorText: {
    color: "#BBBBBB",
    fontSize: 13,
    marginBottom: 12,
  },

  emptyText: {
    color: "#BBBBBB",
    fontSize: 14,
    marginTop: 12,
  },
});
