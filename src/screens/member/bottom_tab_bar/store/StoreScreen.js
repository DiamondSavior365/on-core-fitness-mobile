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
import FeaturedProductCard from "./components/FeaturedProductCard";
import { featuredProducts } from "./data/products";

const { width } = Dimensions.get("window");
export default function StoreScreen() {
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
          <View style={styles.fixedStoreHeader}>
            {/* storeTopRow goes here */}
            {/* section filter ScrollView goes here */}
            <View style={styles.storeTopRow}>
              <TouchableOpacity
                style={styles.storeBackButton}
                activeOpacity={0.8}
                // onPress={() => navigation.goBack()}
              >
                <Text style={styles.storeBackIcon}>‹</Text>
              </TouchableOpacity>

              <Text style={styles.storeLogoText}>
                ON <Text style={styles.storeLogoCore}>CORE</Text> FITNESS
              </Text>

              <TouchableOpacity
                style={styles.storeCartButton}
                activeOpacity={0.8}
              >
                <Text style={styles.storeCartIcon}>🛒</Text>

                <View style={styles.storeCartBadge}>
                  <Text style={styles.storeCartBadgeText}>2</Text>
                </View>
              </TouchableOpacity>
            </View>

            {/* <Text style={styles.storeTitle}>Store</Text> */}
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
            {/* -------------------------------------------------------------------------------- */}
            {/* Store Header Row */}
            {/* <View style={styles.storeHeaderRow}>
              <Text style={styles.storeTitle}>Store</Text>

              <TouchableOpacity style={styles.cartButton}>
                <Text style={styles.cartIcon}>🛒</Text>

                <View style={styles.cartBadge}>
                  <Text style={styles.cartBadgeText}>2</Text>
                </View>
              </TouchableOpacity>
            </View> */}
            {/* -------------------------------------------------------------------------------- */}
            {/* New Store Header Row */}

            {/* 
            -------------------------------------------------------------------------------- */}

            {/* Flash Sale Banner */}
            <TouchableOpacity
              style={styles.flashCard}
              activeOpacity={0.9}
              onPress={() => navigation.navigate("Full_Store_Screen")}
            >
              <ImageBackground
                source={require("../../../../../assets/On_Core_Fitness_Store_Images/store_image_horizontal_2.png")}
                style={styles.flashImage}
                imageStyle={styles.flashImageStyle}
              >
                <View style={styles.flashOverlay}>
                  <View style={styles.flashInner}>
                    <View>
                      <Text style={styles.flashTitle}>FLASH SALE</Text>

                      <Text style={styles.flashLine}>
                        UP TO <Text style={styles.flashBold}>50%</Text> OFF
                      </Text>

                      <View style={styles.flashBtn}>
                        <Text style={styles.flashBtnText}>Shop Now</Text>
                      </View>
                    </View>

                    <View style={styles.premiumTag}>
                      <Text style={styles.premiumTagText}>
                        PREMIUM{"\n"}GEAR
                      </Text>
                    </View>
                  </View>
                </View>
              </ImageBackground>
            </TouchableOpacity>

            {/* Featured Products */}
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Featured Products</Text>
              <View style={styles.sectionLine} />
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.twoColRow}>
                {featuredProducts.map((product) => (
                  <FeaturedProductCard
                    key={product.id}
                    product={product}
                    style={styles.featuredProductCard}
                  />
                ))}
              </View>
            </ScrollView>

            {/* Popular Items */}
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Popular Items</Text>
              <View style={styles.sectionLine} />
            </View>

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingRight: 14 }}
            >
              <View style={styles.threeColRow}>
                {/* Card 1 */}
                <TouchableOpacity style={styles.miniCard} activeOpacity={0.9}>
                  <ImageBackground
                    source={require("../../../../../assets/On_Core_Fitness_Store_Images/Insulated_Shaker_Bottle.png")}
                    style={styles.card1Image}
                    imageStyle={styles.card1ImageStyle}
                  >
                    <View style={styles.card1Overlay}>
                      <View style={styles.miniTextWrap}>
                        <Text style={styles.miniTitle} numberOfLines={2}>
                          Insulated{"\n"}Shaker Bottle
                        </Text>
                        <Text style={styles.miniPrice}>$24.99</Text>
                      </View>
                    </View>
                  </ImageBackground>
                </TouchableOpacity>

                {/* Card 2 */}
                <TouchableOpacity style={styles.miniCard} activeOpacity={0.9}>
                  <ImageBackground
                    source={require("../../../../../assets/On_Core_Fitness_Store_Images/Leather_Weightlifting_Gloves.png")}
                    style={styles.card2Image}
                    imageStyle={styles.card2ImageStyle}
                  >
                    <View style={styles.card2Overlay}>
                      <View style={styles.miniTextWrap}>
                        <Text style={styles.miniTitle} numberOfLines={2}>
                          Leather{"\n"}Weightlifting...
                        </Text>
                        <Text style={styles.miniPrice}>$34.99</Text>
                      </View>
                    </View>
                  </ImageBackground>
                </TouchableOpacity>

                {/* Card 3 */}
                <TouchableOpacity style={styles.miniCard} activeOpacity={0.9}>
                  <ImageBackground
                    source={require("../../../../../assets/On_Core_Fitness_Store_Images/Luxury_Yoga_Mat.png")}
                    style={styles.card3Image}
                    imageStyle={styles.card3ImageStyle}
                  >
                    <View style={styles.card3Overlay}>
                      <View style={styles.miniBadge}>
                        <Text style={styles.miniBadgeText}>Best Seller</Text>
                      </View>

                      <View style={styles.miniTextWrap}>
                        <Text style={styles.miniTitle} numberOfLines={2}>
                          Luxury Yoga{"\n"}Mat
                        </Text>
                        <Text style={styles.miniPrice}>$74.99</Text>
                      </View>
                    </View>
                  </ImageBackground>
                </TouchableOpacity>
              </View>
            </ScrollView>
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
  text: {
    fontSize: 32,
    color: "#fff",
    fontWeight: "bold",
  },
  //------------------------- Store & Shopping Cart Header ---------------
  // storeHeaderRow: {
  //   width: "100%",
  //   flexDirection: "row",
  //   alignItems: "center",
  //   justifyContent: "space-between",
  //   marginBottom: 16,
  // },

  // storeTitle: {
  //   fontSize: 28,
  //   fontWeight: "800",
  //   color: "#ffffff",
  // },

  // cartButton: {
  //   width: 44,
  //   height: 44,
  //   borderRadius: 14,
  //   backgroundColor: "rgba(0,0,0,0.5)",
  //   alignItems: "center",
  //   justifyContent: "center",
  //   position: "relative",
  // },

  // cartIcon: {
  //   fontSize: 20,
  // },

  // cartBadge: {
  //   position: "absolute",
  //   top: 6,
  //   right: 6,
  //   backgroundColor: "#c62828",
  //   width: 18,
  //   height: 18,
  //   borderRadius: 9,
  //   alignItems: "center",
  //   justifyContent: "center",
  // },

  // cartBadgeText: {
  //   color: "#fff",
  //   fontSize: 11,
  //   fontWeight: "800",
  // },
  //------------------------- Card Representation ---------------
  flashCard: {
    width: "100%",
    height: 150,
    borderRadius: 22,
    backgroundColor: "rgba(0,0,0,0.75)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.10)",
    overflow: "hidden",
    marginBottom: 18,
    marginTop: 10,
  },

  flashInner: {
    flex: 1,
    padding: 18,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },

  flashTitle: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "900",
    letterSpacing: 0.6,
    marginBottom: 10,
  },

  flashLine: {
    color: "#e6e6e6",
    fontSize: 16,
    fontWeight: "700",
  },

  flashBold: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "900",
  },

  flashBtn: {
    marginTop: 16,
    alignSelf: "flex-start",
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "rgba(198,40,40,0.40)",
    backgroundColor: "rgba(0,0,0,0.55)",
  },

  flashBtnText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "800",
  },

  premiumTag: {
    backgroundColor: "rgba(0,0,0,0.55)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.12)",
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: 10,
  },

  premiumTagText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "900",
    textAlign: "center",
    letterSpacing: 0.5,
  },
  //-------------- Left/Right Featured Product Cards --------------
  /* Section header */
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 12,
    marginTop: 6,
  },
  sectionTitle: {
    paddingTop: 10,
    color: "#fff",
    fontSize: 18,
    fontWeight: "800",
  },
  sectionLine: {
    flex: 1,
    height: 1,
    backgroundColor: "rgba(255,255,255,0.10)",
    marginTop: 2,
  },
  featuredProductCard: {
    width: width * 0.447,
    marginRight: 14,
  },
  /* 2 cards row */
  twoColRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 18,
  },
  productCard: {
    width: width * 0.447,
    height: 190,
    marginRight: 14,
    borderRadius: 22,
    backgroundColor: "rgba(0,0,0,0.78)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.10)",
    overflow: "hidden",
    justifyContent: "flex-end",
  },
  productTextWrap: {
    padding: 16,
  },
  productTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "900",
    marginBottom: 10,
  },
  productPrice: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "900",
  },
  productSubPrice: {
    color: "#bdbdbd",
    fontSize: 14,
    fontWeight: "700",
    marginTop: 4,
  },

  /* Discount badge */
  cardBadge: {
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
  cardBadgeText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "900",
  },

  /* Red edge highlight */
  edgeHighlight: {
    position: "absolute",
    top: 0,
    bottom: 0,
    width: 4,
    backgroundColor: "rgba(198,40,40,0.55)",
  },
  // ------------- Left Right Popular Items Cards ---------------------
  threeColRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 18,
  },

  miniCard: {
    width: width * 0.289,
    marginRight: 12,
    height: 175,
    borderRadius: 22,
    backgroundColor: "rgba(0,0,0,0.78)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.10)",
    overflow: "hidden",
    justifyContent: "flex-end",
  },

  miniTextWrap: {
    padding: 14,
  },

  miniTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "900",
    marginBottom: 10,
  },

  miniPrice: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "900",
  },

  miniBadge: {
    position: "absolute",
    top: 12,
    right: 12,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 14,
    backgroundColor: "rgba(0,0,0,0.65)",
    borderWidth: 1,
    borderColor: "rgba(198,40,40,0.35)",
  },

  miniBadgeText: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "900",
  },
  //-------------- Store Flash Sale Image Styles --------------
  flashImage: {
    flex: 1,
  },

  flashImageStyle: {
    borderRadius: 22,
    resizeMode: "cover",
  },

  flashOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.20)",
  },
  //-------------- Store Flash Featured Product Left Card Styles  --------------
  productImageLeft: {
    flex: 1,
  },

  productImageLeftStyle: {
    borderRadius: 22,
    resizeMode: "cover",
  },

  productOverlayLeft: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.45)",
    justifyContent: "flex-end",
  },
  //-------------- Store Flash Featured Product Right Card Styles  --------------
  productImageRight: {
    flex: 1,
  },

  productImageRightStyle: {
    borderRadius: 22,
    resizeMode: "cover",
  },

  productOverlayRight: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.25)",
    justifyContent: "flex-end",
  },
  //-------------- Popular Items Card 1 Styles --------------
  card1Image: {
    flex: 1,
  },

  card1ImageStyle: {
    borderRadius: 22,
    resizeMode: "cover",
  },

  card1Overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.10)",
    justifyContent: "flex-end",
  },
  //-------------- Popular Items Card 2 Styles --------------
  card2Image: {
    flex: 1,
  },

  card2ImageStyle: {
    borderRadius: 22,
    resizeMode: "cover",
  },

  card2Overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.0)",
    justifyContent: "flex-end",
  },
  //-------------- Popular Items Card 3 Styles --------------
  card3Image: {
    flex: 1,
  },

  card3ImageStyle: {
    borderRadius: 22,
    resizeMode: "cover",
  },

  card3Overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.0)",
    justifyContent: "flex-end",
  },
  //------------------------- Store Top Row Styles ---------------
  storeTopRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  //------------------------- Store Back Button Styles ---------------
  storeBackButton: {
    width: 42,
    height: 42,
    borderRadius: 14,
    backgroundColor: "rgba(0,0,0,0.45)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.10)",
    alignItems: "center",
    justifyContent: "center",
  },

  storeBackIcon: {
    color: "#fff",
    fontSize: 38,
    fontWeight: "600",
    marginTop: -4,
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

  //------------------------- Store Cart Button Styles ---------------
  storeCartButton: {
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

  storeCartIcon: {
    fontSize: 20,
  },

  storeCartBadge: {
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

  storeCartBadgeText: {
    color: "#fff",
    fontSize: 11,
    fontWeight: "800",
  },

  //------------------------- Store Title Styles ---------------
  storeTitle: {
    fontSize: 28,
    fontWeight: "800",
    color: "#ffffff",
    marginBottom: 16,
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
  fixedStoreHeader: {
    paddingTop: 75,
    paddingHorizontal: 16,
    paddingBottom: 6,
  },
});
