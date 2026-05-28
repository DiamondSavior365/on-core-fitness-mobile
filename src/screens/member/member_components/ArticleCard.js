import React from "react";
import { TouchableOpacity, Image, Text, View, StyleSheet } from "react-native";

const BRAND_RED = "#c62828";
const CARD_DARK = "#0D0D0D";

export default function ArticleCard({
  title,
  image,
  imageUrl,
  category,
  description,
  onPress,
  compact = false,
}) {
  return (
    <TouchableOpacity
      style={[styles.articleCard, compact && styles.compactCard]}
      onPress={onPress}
      activeOpacity={0.85}
    >
      {/* <Image
        source={image}
        style={[styles.articleImage, compact && styles.compactImage]}
      /> */}
      <Image
        source={imageUrl ? { uri: imageUrl } : image}
        style={[styles.articleImage, compact && styles.compactImage]}
      />

      <View style={styles.articleTextWrap}>
        {category && <Text style={styles.categoryText}>{category}</Text>}

        <Text
          style={[styles.articleTitle, compact && styles.compactTitle]}
          numberOfLines={compact ? 2 : 1}
        >
          {title}
        </Text>

        {!compact && description && (
          <Text style={styles.articleDescription} numberOfLines={2}>
            {description}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  articleCard: {
    backgroundColor: CARD_DARK,
    borderRadius: 16,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.08)",
  },

  compactCard: {
    width: "48%",
  },

  articleImage: {
    width: "100%",
    height: 170,
    resizeMode: "cover",
  },

  compactImage: {
    height: 140,
  },

  articleTextWrap: {
    padding: 10,
  },

  categoryText: {
    color: BRAND_RED,
    fontSize: 11,
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

  compactTitle: {
    fontSize: 13,
    fontWeight: "600",
    marginBottom: 0,
  },

  articleDescription: {
    color: "#BBBBBB",
    fontSize: 13,
    lineHeight: 18,
  },
});
