import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRoute, useNavigation } from "@react-navigation/native";

const BRAND_RED = "#c62828";
const BG_DARK = "#050505";
const CARD_DARK = "#171717";

export default function ArticleDetailsScreen() {
  const route = useRoute();
  const navigation = useNavigation();

  const { article } = route.params || {};

  if (!article) {
    return (
      <SafeAreaView style={styles.safeArea} edges={[]}>
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>Article not found.</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea} edges={[]}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backText}>‹ Back</Text>
        </TouchableOpacity>

        <Image source={article.image} style={styles.articleImage} />

        <View style={styles.contentCard}>
          {article.category && (
            <Text style={styles.categoryText}>{article.category}</Text>
          )}

          <Text style={styles.title}>{article.title}</Text>

          {article.description && (
            <Text style={styles.description}>{article.description}</Text>
          )}

          <Text style={styles.bodyText}>
            This section will later display more article details from the health
            and fitness API. For now, this screen confirms that article
            navigation is working correctly.
          </Text>
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

  backButton: {
    marginTop: 10,
    marginBottom: 14,
  },

  backText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },

  articleImage: {
    width: "100%",
    height: 230,
    resizeMode: "cover",
    borderRadius: 18,
    marginBottom: 16,
  },

  contentCard: {
    backgroundColor: CARD_DARK,
    borderRadius: 18,
    padding: 16,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.08)",
  },

  categoryText: {
    color: BRAND_RED,
    fontSize: 12,
    fontWeight: "700",
    textTransform: "uppercase",
    marginBottom: 8,
  },

  title: {
    color: "#ffffff",
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 12,
  },

  description: {
    color: "#BBBBBB",
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 16,
  },

  bodyText: {
    color: "#ffffff",
    fontSize: 14,
    lineHeight: 22,
  },

  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  emptyText: {
    color: "#ffffff",
    fontSize: 16,
  },
});
