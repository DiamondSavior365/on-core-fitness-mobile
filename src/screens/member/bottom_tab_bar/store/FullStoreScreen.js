import React from "react";
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import ProductCard from "./components/ProductCard";
import { allProducts, flashSaleProducts } from "./data/products";
import FlashSaleCard from "./components/FlashSaleCard";
import { useCart } from "./context/CartContext";

const { width } = Dimensions.get("window");

export default function FullStoreScreen() {
  const navigation = useNavigation();
  const { cartCount } = useCart();
  return (
    <SafeAreaView style={styles.safeArea} edges={[]}>
      <View style={styles.container}>
        {/* Black spacer under global header */}
        <View style={styles.headerSpacer} />

        <LinearGradient
          colors={["#4b0f1b", "#1a0509", "#000000"]}
          locations={[0, 0.4, 1]}
          style={styles.gradient}
        >
          {/* FIXED TOP AREA */}
          <View style={styles.fixedFullStoreHeader}>
            {/* storeTopRow goes here */}
            {/* section filter ScrollView goes here */}
            <View style={styles.topRow}>
              <TouchableOpacity
                style={styles.backButton}
                activeOpacity={0.8}
                onPress={() => navigation.goBack()}
              >
                <Text style={styles.backIcon}>‹</Text>
              </TouchableOpacity>

              <Text style={styles.fullStoreLogoText}>
                ON <Text style={styles.fullStoreLogoCore}>CORE</Text> FITNESS
              </Text>

              <TouchableOpacity
                style={styles.fullStoreCartButton}
                activeOpacity={0.8}
                onPress={() => navigation.navigate("Cart_Screen")}
              >
                <Text style={styles.fullStoreCartIcon}>🛒</Text>

                <View style={styles.fullStoreCartBadge}>
                  <Text style={styles.fullStoreCartBadgeText}>{cartCount}</Text>
                </View>
              </TouchableOpacity>
            </View>
            {/* <Text style={styles.screenTitle}>Full Store</Text> */}
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.sectionFilterScroll}
            >
              <TouchableOpacity
                style={[
                  styles.sectionFilterButton,
                  styles.sectionFilterButtonActive,
                ]}
              >
                <Text
                  style={[
                    styles.sectionFilterText,
                    styles.sectionFilterTextActive,
                  ]}
                >
                  Flash Sale
                </Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.sectionFilterButton}>
                <Text style={styles.sectionFilterText}>Featured Products</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.sectionFilterButton}>
                <Text style={styles.sectionFilterText}>Popular Items</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.sectionFilterButton}>
                <Text style={styles.sectionFilterText}>All Products</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>

          <ScrollView
            contentContainerStyle={styles.content}
            showsVerticalScrollIndicator={false}
          >
            {/* Sale Items Section */}
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Flash Sale</Text>
              <View style={styles.sectionLine} />
            </View>

            {/* Later: Sale product cards go here */}
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.flashSaleScrollContent}
            >
              {flashSaleProducts.map((product) => (
                <FlashSaleCard
                  key={product.id}
                  product={product}
                  style={styles.flashSaleCard}
                />
              ))}
            </ScrollView>

            {/* All Items Section */}
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>All Products</Text>
              <View style={styles.sectionLine} />
            </View>

            {/* Later: All product cards go here */}
            <View style={styles.allProductsGrid}>
              {allProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  style={styles.allProductCard}
                />
              ))}
            </View>
          </ScrollView>
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
    // paddingTop: 75,
    paddingHorizontal: 16,
    paddingBottom: 30,
  },

  screenTitle: {
    fontSize: 28,
    fontWeight: "800",
    color: "#ffffff",
    marginBottom: 0,
  },

  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 12,
    marginTop: 10,
  },

  sectionTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "800",
  },

  sectionLine: {
    flex: 1,
    height: 1,
    backgroundColor: "rgba(255,255,255,0.10)",
  },
  //------------------------- Back Button Sytle ---------------
  //   topRow: {
  //     flexDirection: "row",
  //     alignItems: "center",
  //     marginBottom: 10,
  //   },

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
  //------------------------- Shopping Cart Button Sytle ---------------
  topRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  fixedFullStoreHeader: {
    paddingTop: 75,
    paddingHorizontal: 16,
    paddingBottom: 0,
  },
  fullStoreCartButton: {
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

  fullStoreCartIcon: {
    fontSize: 20,
  },

  fullStoreCartBadge: {
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

  fullStoreCartBadgeText: {
    color: "#fff",
    fontSize: 11,
    fontWeight: "800",
  },
  //-------------- Full Store Flash Sale Row --------------
  flashSaleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  flashSaleScrollContent: {
    gap: 14,
    paddingRight: 16,
    marginBottom: 5,
  },

  flashSaleCard: {
    width: width * 0.43,
  },

  //-------------- Full Store All Products Grid --------------
  allProductsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    rowGap: 12,
    marginBottom: 30,
  },
  allProductCard: {
    width: width * 0.285,
  },
  //--------------- Logo Styles -----------------
  fullStoreLogoText: {
    color: "#fff",
    fontSize: 22,
    fontFamily: "BlackOpsOne",
    letterSpacing: 1,
  },

  fullStoreLogoCore: {
    color: "#c62828",
  },
  //-------------- Section Filter Button Row --------------
  sectionFilterScroll: {
    paddingVertical: 10,
    gap: 10,
  },

  sectionFilterButton: {
    paddingHorizontal: 16,
    paddingVertical: 9,
    borderRadius: 14,
    backgroundColor: "rgba(0,0,0,0.35)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.10)",
  },

  sectionFilterButtonActive: {
    backgroundColor: "rgba(0,0,0,0.70)",
    borderColor: "rgba(198,40,40,0.75)",
  },

  sectionFilterText: {
    color: "#cfcfcf",
    fontSize: 13,
    fontWeight: "800",
  },

  sectionFilterTextActive: {
    color: "#fff",
  },
});
