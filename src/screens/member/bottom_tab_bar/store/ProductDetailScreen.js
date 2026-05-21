import React from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation, useRoute } from "@react-navigation/native";
import { products } from "./data/products";

export default function ProductDetailScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { productId } = route.params;
  const product = products.find((item) => item.id === productId);
  if (!product) {
    return (
      <View style={styles.container}>
        <Text style={{ color: "#fff" }}>Product not found.</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea} edges={[]}>
      <View style={styles.container}>
        <LinearGradient
          colors={["#4b0f1b", "#1a0509", "#000000"]}
          locations={[0, 0.4, 1]}
          style={styles.gradient}
        >
          <View style={styles.content}>
            <View style={styles.topRow}>
              <TouchableOpacity
                style={styles.backButton}
                activeOpacity={0.8}
                onPress={() => navigation.goBack()}
              >
                <Text style={styles.backIcon}>‹</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.cartButton} activeOpacity={0.8}>
                <Text style={styles.cartIcon}>🛒</Text>

                <View style={styles.cartBadge}>
                  <Text style={styles.cartBadgeText}>2</Text>
                </View>
              </TouchableOpacity>
            </View>

            {/* <Text style={styles.title}>Product Detail</Text> */}
            <ImageBackground
              source={product.image}
              style={styles.productImage}
              imageStyle={styles.productImageStyle}
            />

            <Text style={styles.productName}>{product.name}</Text>
            <Text style={styles.productPrice}>{product.price}</Text>

            {product.oldPrice && (
              <Text style={styles.productOldPrice}>{product.oldPrice}</Text>
            )}

            <Text style={styles.productDescription}>{product.description}</Text>
          </View>
        </LinearGradient>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#050505",
  },

  container: {
    flex: 1,
    backgroundColor: "#050505",
  },

  gradient: {
    flex: 1,
  },

  content: {
    flex: 1,
    paddingTop: 75,
    paddingHorizontal: 16,
    paddingBottom: 30,
  },

  topRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },

  backButton: {
    width: 42,
    height: 42,
    borderRadius: 14,
    backgroundColor: "rgba(0,0,0,0.45)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.10)",
    alignItems: "center",
    justifyContent: "center",
  },

  backIcon: {
    color: "#fff",
    fontSize: 38,
    fontWeight: "600",
    marginTop: -4,
  },

  cartButton: {
    width: 42,
    height: 42,
    borderRadius: 14,
    backgroundColor: "rgba(0,0,0,0.45)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.10)",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },

  cartIcon: {
    fontSize: 20,
  },

  cartBadge: {
    position: "absolute",
    top: 5,
    right: 5,
    backgroundColor: "#c62828",
    width: 18,
    height: 18,
    borderRadius: 9,
    alignItems: "center",
    justifyContent: "center",
  },

  cartBadgeText: {
    color: "#fff",
    fontSize: 11,
    fontWeight: "800",
  },

  title: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "900",
  },
  //   --------------------- Product Display Styles -------------------
  productImage: {
    width: "100%",
    height: 300,
    borderRadius: 24,
    overflow: "hidden",
    marginBottom: 22,
  },

  productImageStyle: {
    borderRadius: 24,
    resizeMode: "cover",
  },

  productName: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "900",
    marginBottom: 8,
  },

  productPrice: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "900",
  },

  productOldPrice: {
    color: "#9e9e9e",
    fontSize: 16,
    fontWeight: "700",
    textDecorationLine: "line-through",
    marginTop: 4,
  },

  productDescription: {
    color: "#d0d0d0",
    fontSize: 15,
    lineHeight: 22,
    marginTop: 18,
  },
});
