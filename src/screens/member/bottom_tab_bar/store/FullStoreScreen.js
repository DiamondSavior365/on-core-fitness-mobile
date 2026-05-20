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
import { allProducts } from "./data/products";

const { width } = Dimensions.get("window");

export default function FullStoreScreen() {
  const navigation = useNavigation();
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
              >
                <Text style={styles.fullStoreCartIcon}>🛒</Text>

                <View style={styles.fullStoreCartBadge}>
                  <Text style={styles.fullStoreCartBadgeText}>2</Text>
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
            <View style={styles.flashSaleRow}>
              {/* Flash Sale Card 1 */}
              <TouchableOpacity
                style={styles.flashSaleCard1}
                activeOpacity={0.9}
              >
                <ImageBackground
                  source={require("../../../../../assets/On_Core_Fitness_Store_Images/MRE_Lite_Protien_Powder.png")}
                  style={styles.flashSaleImage1}
                  imageStyle={styles.flashSaleImageStyle1}
                >
                  <View style={styles.flashSaleOverlay1}>
                    <View style={styles.flashSaleBadge1}>
                      <Text style={styles.flashSaleBadgeText1}>30% OFF</Text>
                    </View>

                    <View style={styles.flashSaleInfo1}>
                      <Text style={styles.flashSaleTitle1}>
                        MRE Lite{"\n"}Protein Powder
                      </Text>

                      <Text style={styles.flashSalePrice1}>$39.99</Text>
                      <Text style={styles.flashSaleOldPrice1}>$56.99</Text>
                    </View>
                  </View>
                </ImageBackground>
              </TouchableOpacity>

              {/* Flash Sale Card 2 */}
              <TouchableOpacity
                style={styles.flashSaleCard2}
                activeOpacity={0.9}
              >
                <ImageBackground
                  source={require("../../../../../assets/On_Core_Fitness_Store_Images/Beyond_Raw_LIT_Pre_Workout.png")}
                  style={styles.flashSaleImage2}
                  imageStyle={styles.flashSaleImageStyle2}
                >
                  <View style={styles.flashSaleOverlay2}>
                    <View style={styles.flashSaleBadge2}>
                      <Text style={styles.flashSaleBadgeText2}>25% OFF</Text>
                    </View>

                    <View style={styles.flashSaleInfo2}>
                      <Text style={styles.flashSaleTitle2}>
                        Beyond Raw{"\n"}LIT Pre-Workout
                      </Text>

                      <Text style={styles.flashSalePrice2}>$29.99</Text>
                      <Text style={styles.flashSaleOldPrice2}>$39.99</Text>
                    </View>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
            </View>

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

  //-------------- Full Store Flash Sale Card 1 --------------
  flashSaleCard1: {
    width: width * 0.43,
    height: 145,
    borderRadius: 18,
    backgroundColor: "rgba(0,0,0,0.78)",
    borderWidth: 1,
    borderColor: "rgba(198,40,40,0.45)",
    overflow: "hidden",
  },

  flashSaleImage1: {
    flex: 1,
  },

  flashSaleImageStyle1: {
    borderRadius: 18,
    resizeMode: "cover",
  },

  flashSaleOverlay1: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.45)",
    justifyContent: "center",
  },

  flashSaleBadge1: {
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

  flashSaleBadgeText1: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "900",
  },

  flashSaleInfo1: {
    position: "absolute",
    right: 12,
    bottom: 18,
    width: "43%",
  },

  flashSaleTitle1: {
    color: "#fff",
    fontSize: 11,
    fontWeight: "900",
    marginBottom: 6,
    lineHeight: 13,
  },

  flashSalePrice1: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "900",
  },

  flashSaleOldPrice1: {
    color: "#9e9e9e",
    fontSize: 13,
    fontWeight: "700",
    textDecorationLine: "line-through",
  },

  //-------------- Full Store Flash Sale Card 2 --------------
  flashSaleCard2: {
    width: width * 0.43,
    height: 145,
    borderRadius: 18,
    backgroundColor: "rgba(0,0,0,0.78)",
    borderWidth: 1,
    borderColor: "rgba(198,40,40,0.45)",
    overflow: "hidden",
  },

  flashSaleImage2: {
    flex: 1,
  },

  flashSaleImageStyle2: {
    borderRadius: 18,
    resizeMode: "cover",
  },

  flashSaleOverlay2: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.30)",
    justifyContent: "center",
  },

  flashSaleBadge2: {
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

  flashSaleBadgeText2: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "900",
  },

  flashSaleInfo2: {
    position: "absolute",
    left: 12,
    bottom: 18,
    width: "42%",
  },

  flashSaleTitle2: {
    color: "#fff",
    fontSize: 11,
    fontWeight: "900",
    marginBottom: 6,
    lineHeight: 13,
  },

  flashSalePrice2: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "900",
  },

  flashSaleOldPrice2: {
    color: "#9e9e9e",
    fontSize: 13,
    fontWeight: "700",
    textDecorationLine: "line-through",
  },
  //-------------- Full Store All Products Grid --------------
  allProductsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    rowGap: 12,
    marginBottom: 30,
  },
  // //-------------- All Products Card Syles --------------
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
