import React from "react";
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function ProductCard({ product, style }) {
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
          <Text style={styles.title}>{product.displayName}</Text>
          <Text style={styles.price}>{product.price}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 145,
    borderRadius: 16,
    backgroundColor: "rgba(0,0,0,0.78)",
    borderWidth: 1,
    borderColor: "rgba(198,40,40,0.35)",
    overflow: "hidden",
  },

  image: {
    flex: 1,
  },

  imageStyle: {
    borderRadius: 16,
    resizeMode: "cover",
  },

  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.30)",
    justifyContent: "flex-end",
    padding: 10,
  },

  title: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "900",
    lineHeight: 14,
  },

  price: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "900",
    marginTop: 4,
  },
});
