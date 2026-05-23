import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation, useRoute } from "@react-navigation/native";
import { products } from "./data/products";
import { useCart } from "./context/CartContext";

export default function ProductDetailScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const [quantity, setQuantity] = useState(0);
  const { addToCart, cartCount } = useCart();
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
              <Text style={styles.storeLogoText}>
                ON <Text style={styles.storeLogoCore}>CORE</Text> FITNESS
              </Text>
              <TouchableOpacity
                style={styles.cartButton}
                activeOpacity={0.8}
                onPress={() => navigation.navigate("Cart_Screen")}
              >
                <Text style={styles.cartIcon}>🛒</Text>

                <View style={styles.cartBadge}>
                  <Text style={styles.cartBadgeText}>{cartCount}</Text>
                </View>
              </TouchableOpacity>
            </View>

            {/* <Text style={styles.title}>Product Detail</Text> */}
            {/* <ImageBackground
              source={product.image}
              style={styles.productImage}
              imageStyle={styles.productImageStyle}
            />

            <Text style={styles.productName}>{product.name}</Text>
            <Text style={styles.productPrice}>{product.price}</Text>

            {product.oldPrice && (
              <Text style={styles.productOldPrice}>{product.oldPrice}</Text>
            )}

            <Text style={styles.productDescription}>{product.description}</Text> */}
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.scrollContent}
            >
              {/* 1. Large product image */}
              <ImageBackground
                source={product.image}
                style={styles.productImage}
                imageStyle={[
                  styles.productImageStyle,
                  product.detailImageStyle,
                ]}
              >
                {/* 2. Discount badge */}
                {product.discountLabel && (
                  <View style={styles.discountBadge}>
                    <Text style={styles.discountBadgeText}>
                      {product.discountLabel}
                    </Text>
                  </View>
                )}
              </ImageBackground>

              {/* 3. Product name */}
              <Text style={styles.productName}>{product.name}</Text>

              {/* 4. Price + old price */}
              <View style={styles.priceRow}>
                <Text style={styles.productPrice}>{product.price}</Text>

                {product.oldPrice && (
                  <Text style={styles.productOldPrice}>{product.oldPrice}</Text>
                )}
              </View>

              {/* 5. Description */}
              <Text style={styles.productDescription}>
                {product.description}
              </Text>

              {/* 6. Quantity selector placeholder */}
              <View style={styles.quantityBox}>
                <Text style={styles.quantityLabel}>Quantity</Text>

                <View style={styles.quantityControls}>
                  <TouchableOpacity
                    style={styles.quantityButton}
                    onPress={() => setQuantity((prev) => Math.max(0, prev - 1))}
                  >
                    <Text style={styles.quantityButtonText}>−</Text>
                  </TouchableOpacity>

                  {/* <Text style={styles.quantityNumber}>1</Text> */}
                  <Text style={styles.quantityNumber}>{quantity}</Text>

                  <TouchableOpacity
                    style={styles.quantityButton}
                    onPress={() => setQuantity((prev) => prev + 1)}
                  >
                    <Text style={styles.quantityButtonText}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>

              {/* 7. Add to Cart button */}
              <TouchableOpacity
                style={styles.addToCartButton}
                activeOpacity={0.85}
                onPress={() => {
                  if (quantity <= 0) {
                    Alert.alert(
                      "Invalid Quantity",
                      "Please select at least 1 item."
                    );
                    return;
                  }

                  addToCart(product, quantity);

                  Alert.alert(
                    "Added to Cart",
                    `${quantity} ${product.name} added to your cart.`
                  );
                }}
              >
                <Text style={styles.addToCartText}>Add to Cart</Text>
              </TouchableOpacity>
            </ScrollView>
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
  scrollContent: {
    paddingBottom: 120,
  },

  productImage: {
    width: "100%",
    height: 320,
    borderRadius: 24,
    overflow: "hidden",
    marginBottom: 22,
    backgroundColor: "#050505",
  },

  productImageStyle: {
    borderRadius: 24,
    resizeMode: "cover",
  },

  discountBadge: {
    position: "absolute",
    top: 16,
    left: 16,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 14,
    backgroundColor: "rgba(0,0,0,0.70)",
    borderWidth: 1,
    borderColor: "rgba(198,40,40,0.55)",
  },

  discountBadgeText: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "900",
  },

  productName: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "900",
    marginBottom: 10,
  },

  priceRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: 18,
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
  },

  productDescription: {
    color: "#d0d0d0",
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 24,
  },

  quantityBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "rgba(0,0,0,0.45)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.10)",
    borderRadius: 18,
    padding: 14,
    marginBottom: 20,
  },

  quantityLabel: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "800",
  },

  quantityControls: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },

  quantityButton: {
    width: 34,
    height: 34,
    borderRadius: 12,
    backgroundColor: "rgba(198,40,40,0.75)",
    alignItems: "center",
    justifyContent: "center",
  },

  quantityButtonText: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "900",
  },

  quantityNumber: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "900",
  },

  addToCartButton: {
    height: 56,
    borderRadius: 18,
    backgroundColor: "#c62828",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.12)",
  },

  addToCartText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "900",
  },
  //------------------------- Store Logo Text Styles ---------------
  storeLogoText: {
    color: "#fff",
    fontSize: 22,
    fontFamily: "BlackOpsOne",
    letterSpacing: 1,
  },

  storeLogoCore: {
    color: "#c62828",
  },
});
