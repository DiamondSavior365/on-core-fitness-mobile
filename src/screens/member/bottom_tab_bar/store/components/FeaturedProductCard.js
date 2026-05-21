import React from "react";
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function FeaturedProductCard({ product, style }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={[styles.card, style]}
      activeOpacity={0.9}
      onPress={() =>
        navigation.navigate("Product_Detail_Screen", {
          productId: product.id,
        })
      }
    >
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

          <View style={styles.textWrap}>
            <Text style={styles.title}>{product.displayName}</Text>
            <Text style={styles.price}>{product.price}</Text>

            {product.oldPrice && (
              <Text style={styles.oldPrice}>Was {product.oldPrice}</Text>
            )}
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 190,
    borderRadius: 22,
    backgroundColor: "rgba(0,0,0,0.78)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.10)",
    overflow: "hidden",
  },

  image: {
    flex: 1,
  },

  imageStyle: {
    borderRadius: 22,
    resizeMode: "cover",
  },

  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.35)",
    justifyContent: "flex-end",
  },

  textWrap: {
    padding: 16,
  },

  title: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "900",
    marginBottom: 10,
  },

  price: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "900",
  },

  oldPrice: {
    color: "#bdbdbd",
    fontSize: 14,
    fontWeight: "700",
    marginTop: 4,
  },

  badge: {
    position: "absolute",
    top: 14,
    left: 14,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 14,
    backgroundColor: "rgba(0,0,0,0.65)",
    borderWidth: 1,
    borderColor: "rgba(198,40,40,0.35)",
  },

  badgeText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "900",
  },
});
