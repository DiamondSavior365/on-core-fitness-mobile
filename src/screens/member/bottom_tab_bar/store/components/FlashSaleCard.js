import React from "react";
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  View,
} from "react-native";

export default function FlashSaleCard({ product, style }) {
  return (
    <TouchableOpacity style={[styles.card, style]} activeOpacity={0.9}>
      <ImageBackground
        source={product.image}
        style={styles.image}
        imageStyle={styles.imageStyle}
      >
        <View style={styles.overlay}>
          {product.discountLabel && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{product.discountLabel}</Text>
            </View>
          )}

          <View style={styles.info}>
            <Text style={styles.title} numberOfLines={2}>
              {product.displayName}
            </Text>

            <Text style={styles.price} numberOfLines={1}>
              {product.price}
            </Text>

            {product.oldPrice && (
              <Text style={styles.oldPrice}>{product.oldPrice}</Text>
            )}
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 145,
    borderRadius: 18,
    backgroundColor: "rgba(0,0,0,0.78)",
    borderWidth: 1,
    borderColor: "rgba(198,40,40,0.45)",
    overflow: "hidden",
  },

  image: {
    flex: 1,
  },

  imageStyle: {
    borderRadius: 18,
    resizeMode: "cover",
  },

  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.35)",
    justifyContent: "center",
  },

  badge: {
    position: "absolute",
    top: 10,
    left: 10,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 14,
    backgroundColor: "rgba(0,0,0,0.75)",
    borderWidth: 1,
    borderColor: "rgba(198,40,40,0.55)",
  },

  badgeText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "900",
  },

  info: {
    position: "absolute",
    right: 12,
    bottom: 18,
    width: "43%",
  },

  title: {
    color: "#fff",
    fontSize: 11,
    fontWeight: "900",
    marginBottom: 6,
    lineHeight: 13,
  },

  price: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "900",
  },

  oldPrice: {
    color: "#9e9e9e",
    fontSize: 13,
    fontWeight: "700",
    textDecorationLine: "line-through",
  },
});
