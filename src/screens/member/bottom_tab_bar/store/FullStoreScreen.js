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
          <ScrollView
            contentContainerStyle={styles.content}
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.topRow}>
              <TouchableOpacity
                style={styles.backButton}
                activeOpacity={0.8}
                onPress={() => navigation.goBack()}
              >
                <Text style={styles.backIcon}>‹</Text>
              </TouchableOpacity>
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
            <Text style={styles.screenTitle}>Full Store</Text>

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
              {/* Product Card 1 */}
              <TouchableOpacity
                style={styles.allProductCard1}
                activeOpacity={0.9}
              >
                <ImageBackground
                  source={require("../../../../../assets/On_Core_Fitness_Store_Images/MRE_Lite_Protien_Powder.png")}
                  style={styles.allProductImage1}
                  imageStyle={styles.allProductImageStyle1}
                >
                  <View style={styles.allProductOverlay1}>
                    <Text style={styles.allProductTitle1}>
                      MRE Lite{"\n"}Protein Powder
                    </Text>
                    <Text style={styles.allProductPrice1}>$39.99</Text>
                  </View>
                </ImageBackground>
              </TouchableOpacity>

              {/* Product Card 2 */}
              <TouchableOpacity
                style={styles.allProductCard2}
                activeOpacity={0.9}
              >
                <ImageBackground
                  source={require("../../../../../assets/On_Core_Fitness_Store_Images/Beyond_Raw_LIT_Pre_Workout.png")}
                  style={styles.allProductImage2}
                  imageStyle={styles.allProductImageStyle2}
                >
                  <View style={styles.allProductOverlay2}>
                    <Text style={styles.allProductTitle2}>
                      Beyond Raw LIT{"\n"}Pre-Workout
                    </Text>
                    <Text style={styles.allProductPrice2}>$29.99</Text>
                  </View>
                </ImageBackground>
              </TouchableOpacity>

              {/* Product Card 3 */}
              <TouchableOpacity
                style={styles.allProductCard3}
                activeOpacity={0.9}
              >
                <ImageBackground
                  source={require("../../../../../assets/On_Core_Fitness_Store_Images/Insulated_Shaker_Bottle.png")}
                  style={styles.allProductImage3}
                  imageStyle={styles.allProductImageStyle3}
                >
                  <View style={styles.allProductOverlay3}>
                    <Text style={styles.allProductTitle3}>
                      Insulated{"\n"}Shaker Bottle
                    </Text>
                    <Text style={styles.allProductPrice3}>$24.99</Text>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
              {/* Product Card 4 */}
              <TouchableOpacity
                style={styles.allProductCard4}
                activeOpacity={0.9}
              >
                <ImageBackground
                  source={require("../../../../../assets/On_Core_Fitness_Store_Images/Leather_Weightlifting_Gloves.png")}
                  style={styles.allProductImage4}
                  imageStyle={styles.allProductImageStyle4}
                >
                  <View style={styles.allProductOverlay4}>
                    <Text style={styles.allProductTitle4}>
                      Leather{"\n"}Weightlifting Gloves
                    </Text>
                    <Text style={styles.allProductPrice4}>$34.99</Text>
                  </View>
                </ImageBackground>
              </TouchableOpacity>

              {/* Product Card 5 */}
              <TouchableOpacity
                style={styles.allProductCard5}
                activeOpacity={0.9}
              >
                <ImageBackground
                  source={require("../../../../../assets/On_Core_Fitness_Store_Images/Luxury_Yoga_Mat.png")}
                  style={styles.allProductImage5}
                  imageStyle={styles.allProductImageStyle5}
                >
                  <View style={styles.allProductOverlay5}>
                    <Text style={styles.allProductTitle5}>
                      Luxury{"\n"}Yoga Mat
                    </Text>
                    <Text style={styles.allProductPrice5}>$74.99</Text>
                  </View>
                </ImageBackground>
              </TouchableOpacity>

              {/* Product Card 6 */}
              <TouchableOpacity
                style={styles.allProductCard6}
                activeOpacity={0.9}
              >
                <ImageBackground
                  source={require("../../../../../assets/On_Core_Fitness_Store_Images/Weightlifting_Belt.png")}
                  style={styles.allProductImage6}
                  imageStyle={styles.allProductImageStyle6}
                >
                  <View style={styles.allProductOverlay6}>
                    <Text style={styles.allProductTitle6}>
                      Weightlifting{"\n"}Belt
                    </Text>
                    <Text style={styles.allProductPrice6}>$49.99</Text>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
              {/* Product Card 7 */}
              <TouchableOpacity
                style={styles.allProductCard7}
                activeOpacity={0.9}
              >
                <ImageBackground
                  source={require("../../../../../assets/On_Core_Fitness_Store_Images/Resistance_Loop_Bands.png")}
                  style={styles.allProductImage7}
                  imageStyle={styles.allProductImageStyle7}
                >
                  <View style={styles.allProductOverlay7}>
                    <Text style={styles.allProductTitle7}>
                      Resistance{"\n"}Loop Bands
                    </Text>
                    <Text style={styles.allProductPrice7}>$19.99</Text>
                  </View>
                </ImageBackground>
              </TouchableOpacity>

              {/* Product Card 8 */}
              <TouchableOpacity
                style={styles.allProductCard8}
                activeOpacity={0.9}
              >
                <ImageBackground
                  source={require("../../../../../assets/On_Core_Fitness_Store_Images/Speed_Jump_Rope.png")}
                  style={styles.allProductImage8}
                  imageStyle={styles.allProductImageStyle8}
                >
                  <View style={styles.allProductOverlay8}>
                    <Text style={styles.allProductTitle8}>
                      Speed{"\n"}Jump Rope
                    </Text>
                    <Text style={styles.allProductPrice8}>$16.99</Text>
                  </View>
                </ImageBackground>
              </TouchableOpacity>

              {/* Product Card 9 */}
              <TouchableOpacity
                style={styles.allProductCard9}
                activeOpacity={0.9}
              >
                <ImageBackground
                  source={require("../../../../../assets/On_Core_Fitness_Store_Images/Gym_Duffle_Bag.png")}
                  style={styles.allProductImage9}
                  imageStyle={styles.allProductImageStyle9}
                >
                  <View style={styles.allProductOverlay9}>
                    <Text style={styles.allProductTitle9}>
                      Gym{"\n"}Duffle Bag
                    </Text>
                    <Text style={styles.allProductPrice9}>$49.99</Text>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
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
    paddingTop: 75,
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

  //-------------- All Products Card 1 --------------
  allProductCard1: {
    width: width * 0.285,
    height: 145,
    borderRadius: 16,
    backgroundColor: "rgba(0,0,0,0.78)",
    borderWidth: 1,
    borderColor: "rgba(198,40,40,0.35)",
    overflow: "hidden",
  },

  allProductImage1: {
    flex: 1,
  },

  allProductImageStyle1: {
    borderRadius: 16,
    resizeMode: "cover",
  },

  allProductOverlay1: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.30)",
    justifyContent: "flex-end",
    padding: 10,
  },

  allProductTitle1: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "900",
    lineHeight: 14,
  },

  allProductPrice1: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "900",
    marginTop: 4,
  },
  //-------------- All Products Card 2 --------------
  allProductCard2: {
    width: width * 0.285,
    height: 145,
    borderRadius: 16,
    backgroundColor: "rgba(0,0,0,0.78)",
    borderWidth: 1,
    borderColor: "rgba(198,40,40,0.35)",
    overflow: "hidden",
  },

  allProductImage2: {
    flex: 1,
  },

  allProductImageStyle2: {
    borderRadius: 16,
    resizeMode: "cover",
  },

  allProductOverlay2: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.30)",
    justifyContent: "flex-end",
    padding: 10,
  },

  allProductTitle2: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "900",
    lineHeight: 14,
  },

  allProductPrice2: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "900",
    marginTop: 4,
  },

  //-------------- All Products Card 3 --------------
  allProductCard3: {
    width: width * 0.285,
    height: 145,
    borderRadius: 16,
    backgroundColor: "rgba(0,0,0,0.78)",
    borderWidth: 1,
    borderColor: "rgba(198,40,40,0.35)",
    overflow: "hidden",
  },

  allProductImage3: {
    flex: 1,
  },

  allProductImageStyle3: {
    borderRadius: 16,
    resizeMode: "cover",
  },

  allProductOverlay3: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.30)",
    justifyContent: "flex-end",
    padding: 10,
  },

  allProductTitle3: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "900",
    lineHeight: 14,
  },

  allProductPrice3: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "900",
    marginTop: 4,
  },
  //-------------- All Products Card 4 --------------
  allProductCard4: {
    width: width * 0.285,
    height: 145,
    borderRadius: 16,
    backgroundColor: "rgba(0,0,0,0.78)",
    borderWidth: 1,
    borderColor: "rgba(198,40,40,0.35)",
    overflow: "hidden",
  },

  allProductImage4: {
    flex: 1,
  },

  allProductImageStyle4: {
    borderRadius: 16,
    resizeMode: "cover",
  },

  allProductOverlay4: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.30)",
    justifyContent: "flex-end",
    padding: 10,
  },

  allProductTitle4: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "900",
    lineHeight: 14,
  },

  allProductPrice4: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "900",
    marginTop: 4,
  },
  //-------------- All Products Card 5 --------------
  allProductCard5: {
    width: width * 0.285,
    height: 145,
    borderRadius: 16,
    backgroundColor: "rgba(0,0,0,0.78)",
    borderWidth: 1,
    borderColor: "rgba(198,40,40,0.35)",
    overflow: "hidden",
  },

  allProductImage5: {
    flex: 1,
  },

  allProductImageStyle5: {
    borderRadius: 16,
    resizeMode: "cover",
  },

  allProductOverlay5: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.30)",
    justifyContent: "flex-end",
    padding: 10,
  },

  allProductTitle5: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "900",
    lineHeight: 14,
  },

  allProductPrice5: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "900",
    marginTop: 4,
  },
  //-------------- All Products Card 6 --------------
  allProductCard6: {
    width: width * 0.285,
    height: 145,
    borderRadius: 16,
    backgroundColor: "rgba(0,0,0,0.78)",
    borderWidth: 1,
    borderColor: "rgba(198,40,40,0.35)",
    overflow: "hidden",
  },

  allProductImage6: {
    flex: 1,
  },

  allProductImageStyle6: {
    borderRadius: 16,
    resizeMode: "cover",
  },

  allProductOverlay6: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.30)",
    justifyContent: "flex-end",
    padding: 10,
  },

  allProductTitle6: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "900",
    lineHeight: 14,
  },

  allProductPrice6: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "900",
    marginTop: 4,
  },
  //-------------- All Products Card 7 --------------
  allProductCard7: {
    width: width * 0.285,
    height: 145,
    borderRadius: 16,
    backgroundColor: "rgba(0,0,0,0.78)",
    borderWidth: 1,
    borderColor: "rgba(198,40,40,0.35)",
    overflow: "hidden",
  },

  allProductImage7: {
    flex: 1,
  },

  allProductImageStyle7: {
    borderRadius: 16,
    resizeMode: "cover",
  },

  allProductOverlay7: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.30)",
    justifyContent: "flex-end",
    padding: 10,
  },

  allProductTitle7: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "900",
    lineHeight: 14,
  },

  allProductPrice7: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "900",
    marginTop: 4,
  },
  //-------------- All Products Card 8 --------------
  allProductCard8: {
    width: width * 0.285,
    height: 145,
    borderRadius: 16,
    backgroundColor: "rgba(0,0,0,0.78)",
    borderWidth: 1,
    borderColor: "rgba(198,40,40,0.35)",
    overflow: "hidden",
  },

  allProductImage8: {
    flex: 1,
  },

  allProductImageStyle8: {
    borderRadius: 16,
    resizeMode: "cover",
  },

  allProductOverlay8: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.30)",
    justifyContent: "flex-end",
    padding: 10,
  },

  allProductTitle8: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "900",
    lineHeight: 14,
  },

  allProductPrice8: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "900",
    marginTop: 4,
  },
  //-------------- All Products Card 9 --------------
  allProductCard9: {
    width: width * 0.285,
    height: 145,
    borderRadius: 16,
    backgroundColor: "rgba(0,0,0,0.78)",
    borderWidth: 1,
    borderColor: "rgba(198,40,40,0.35)",
    overflow: "hidden",
  },

  allProductImage9: {
    flex: 1,
  },

  allProductImageStyle9: {
    borderRadius: 16,
    resizeMode: "cover",
  },

  allProductOverlay9: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.30)",
    justifyContent: "flex-end",
    padding: 10,
  },

  allProductTitle9: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "900",
    lineHeight: 14,
  },

  allProductPrice9: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "900",
    marginTop: 4,
  },
});
