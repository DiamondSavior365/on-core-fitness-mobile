import React, { useMemo, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Header from "../member_components/Header";
import Footer from "../member_components/Footer";

const BRAND_RED = "#c62828";
const BG_DARK = "#050505";
const CARD_DARK = "#0D0D0D";
const BORDER_RED = "rgba(198,40,40,0.35)";
const MUTED = "#BDBDBD";

export default function StoreScreen() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [query, setQuery] = useState("");

  // Replace these with your actual images later (require(...) or uri)
  const IMG = useMemo(
    () => ({
      banner: { uri: "https://via.placeholder.com/900x360" },
      dumbbells: { uri: "https://via.placeholder.com/600x600" },
      bands: { uri: "https://via.placeholder.com/600x600" },
      bottle: { uri: "https://via.placeholder.com/600x600" },
      gloves: { uri: "https://via.placeholder.com/600x600" },
      mat: { uri: "https://via.placeholder.com/600x600" },
    }),
    []
  );

  return (
    <LinearGradient
      colors={["#4b0f1b", "#1a0509", "#000000"]}
      locations={[0, 0.35, 1]}
      style={styles.container}
    >
      {/* -------------------- HEADER -------------------- */}

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {/* Header */}
        <View style={styles.headerRow}>
          <Text style={styles.headerTitle}>Store</Text>
          <TouchableOpacity style={styles.cartBadgeWrap}>
            <Text style={styles.cartIcon}>🛒</Text>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>2</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Search */}
        <View style={styles.searchWrap}>
          <Text style={styles.searchIcon}>🔎</Text>
          <TextInput
            value={query}
            onChangeText={setQuery}
            placeholder="Search gym gear..."
            placeholderTextColor="#8f8f8f"
            style={styles.searchInput}
          />
        </View>

        {/* Category Chips */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.chipsRow}
        >
          {["All", "Weights", "Apparel", "Accessories", "Nutrition"].map(
            (c) => {
              const isActive = activeCategory === c;
              return (
                <TouchableOpacity
                  key={c}
                  onPress={() => setActiveCategory(c)}
                  style={[styles.chip, isActive && styles.chipActive]}
                >
                  <Text
                    style={[styles.chipText, isActive && styles.chipTextActive]}
                  >
                    {c}
                  </Text>
                </TouchableOpacity>
              );
            }
          )}
        </ScrollView>

        {/* Flash Sale Banner */}
        <TouchableOpacity style={styles.bannerCard} activeOpacity={0.9}>
          <Image source={IMG.banner} style={styles.bannerImage} />
          <View style={styles.bannerOverlay} />
          <View style={styles.bannerContent}>
            <View style={styles.bannerLeft}>
              <Text style={styles.bannerKicker}>FLASH SALE</Text>
              <Text style={styles.bannerLine}>
                UP TO <Text style={styles.bannerBold}>50%</Text> OFF
              </Text>

              <View style={styles.shopBtn}>
                <Text style={styles.shopBtnText}>Shop Now</Text>
              </View>
            </View>

            <View style={styles.premiumTag}>
              <Text style={styles.premiumTagText}>PREMIUM{"\n"}GEAR</Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* Featured Products */}
        <SectionHeader title="Featured Products" />

        <View style={styles.twoColRow}>
          <ProductCard
            image={IMG.dumbbells}
            badge="30% OFF"
            title="Adjustable Dumbbells"
            price="$179.99"
            subPrice="Was $259.99"
            variant="left"
          />
          <ProductCard
            image={IMG.bands}
            title="Premium Resistance Bands"
            price="From $29.99"
            variant="right"
          />
        </View>

        {/* Popular Items */}
        <SectionHeader title="Popular Items" />

        <View style={styles.threeColRow}>
          <MiniCard
            image={IMG.bottle}
            title="Insulated Shaker Bottle"
            price="$24.99"
          />
          <MiniCard
            image={IMG.gloves}
            title="Leather Weightlifting Gloves"
            price="$34.99"
          />
          <MiniCard
            image={IMG.mat}
            title="Luxury Yoga Mat"
            price="$74.99"
            badge="Best Seller"
          />
        </View>

        <View style={{ height: 20 }} />
      </ScrollView>
    </LinearGradient>
  );
}

/* ------------------------- Components ------------------------- */

function SectionHeader({ title }) {
  return (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <View style={styles.sectionLine} />
    </View>
  );
}

function ProductCard({ image, badge, title, price, subPrice, variant }) {
  return (
    <TouchableOpacity style={styles.productCard} activeOpacity={0.9}>
      <Image source={image} style={styles.productImage} />

      {/* Dark overlay for readability */}
      <View style={styles.cardOverlay} />

      {badge ? (
        <View style={styles.cardBadge}>
          <Text style={styles.cardBadgeText}>{badge}</Text>
        </View>
      ) : null}

      <View style={styles.productTextWrap}>
        <Text style={styles.productTitle} numberOfLines={2}>
          {title}
        </Text>

        <View style={styles.priceRow}>
          <Text style={styles.productPrice}>{price}</Text>
        </View>

        {subPrice ? (
          <Text style={styles.productSubPrice}>{subPrice}</Text>
        ) : null}
      </View>

      {/* subtle red edge highlight */}
      <View
        style={[
          styles.edgeHighlight,
          variant === "left" ? { left: 0 } : { right: 0 },
        ]}
      />
    </TouchableOpacity>
  );
}

function MiniCard({ image, title, price, badge }) {
  return (
    <TouchableOpacity style={styles.miniCard} activeOpacity={0.9}>
      <Image source={image} style={styles.miniImage} />
      <View style={styles.miniOverlay} />

      {badge ? (
        <View style={styles.miniBadge}>
          <Text style={styles.miniBadgeText}>{badge}</Text>
        </View>
      ) : null}

      <View style={styles.miniTextWrap}>
        <Text style={styles.miniTitle} numberOfLines={2}>
          {title}
        </Text>
        <Text style={styles.miniPrice}>{price}</Text>
      </View>
    </TouchableOpacity>
  );
}

/* ------------------------- Styles ------------------------- */

const styles = StyleSheet.create({
  container: { flex: 1 },

  content: {
    paddingTop: 16,
    paddingHorizontal: 16,
    paddingBottom: 30,
  },

  /* Header */
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "800",
    color: "#fff",
    letterSpacing: 0.2,
  },
  cartBadgeWrap: {
    width: 46,
    height: 46,
    borderRadius: 14,
    backgroundColor: "rgba(0,0,0,0.45)",
    borderWidth: 1,
    borderColor: BORDER_RED,
    alignItems: "center",
    justifyContent: "center",
  },
  cartIcon: { fontSize: 20 },
  badge: {
    position: "absolute",
    top: 6,
    right: 6,
    backgroundColor: BRAND_RED,
    minWidth: 18,
    height: 18,
    borderRadius: 9,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 5,
  },
  badgeText: { color: "#fff", fontSize: 11, fontWeight: "800" },

  /* Search */
  searchWrap: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.55)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.10)",
    borderRadius: 14,
    paddingHorizontal: 12,
    height: 44,
    marginBottom: 12,
  },
  searchIcon: { marginRight: 8, fontSize: 16, opacity: 0.9 },
  searchInput: {
    flex: 1,
    color: "#fff",
    fontSize: 14,
  },

  /* Chips */
  chipsRow: {
    paddingBottom: 10,
    gap: 10,
  },
  chip: {
    paddingHorizontal: 14,
    height: 34,
    borderRadius: 999,
    backgroundColor: "rgba(0,0,0,0.40)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.10)",
    alignItems: "center",
    justifyContent: "center",
  },
  chipActive: {
    borderColor: "rgba(198,40,40,0.6)",
    backgroundColor: "rgba(198,40,40,0.12)",
  },
  chipText: { color: "#ddd", fontSize: 13, fontWeight: "700" },
  chipTextActive: { color: "#fff" },

  /* Banner */
  bannerCard: {
    height: 150,
    borderRadius: 18,
    overflow: "hidden",
    backgroundColor: CARD_DARK,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.10)",
    marginBottom: 18,
  },
  bannerImage: { width: "100%", height: "100%" },
  bannerOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.45)",
  },
  bannerContent: {
    ...StyleSheet.absoluteFillObject,
    padding: 14,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  bannerLeft: { justifyContent: "center" },
  bannerKicker: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "900",
    letterSpacing: 0.6,
    marginBottom: 6,
  },
  bannerLine: { color: "#e9e9e9", fontSize: 14, fontWeight: "700" },
  bannerBold: { color: "#fff", fontSize: 16, fontWeight: "900" },
  shopBtn: {
    marginTop: 12,
    alignSelf: "flex-start",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: BORDER_RED,
    backgroundColor: "rgba(0,0,0,0.55)",
  },
  shopBtnText: { color: "#fff", fontSize: 13, fontWeight: "800" },

  premiumTag: {
    alignSelf: "flex-start",
    backgroundColor: "rgba(0,0,0,0.55)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.12)",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  premiumTagText: {
    color: "#fff",
    fontSize: 10,
    fontWeight: "900",
    textAlign: "center",
    letterSpacing: 0.4,
  },

  /* Section header */
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 10,
    marginTop: 4,
  },
  sectionTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "800",
  },
  sectionLine: {
    flex: 1,
    height: 1,
    backgroundColor: "rgba(255,255,255,0.10)",
    marginTop: 2,
  },

  /* Featured row (2 cards) */
  twoColRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 18,
  },
  productCard: {
    width: "48%",
    height: 190,
    borderRadius: 18,
    overflow: "hidden",
    backgroundColor: CARD_DARK,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.10)",
  },
  productImage: { width: "100%", height: "100%" },
  cardOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.35)",
  },
  cardBadge: {
    position: "absolute",
    top: 10,
    left: 10,
    backgroundColor: "rgba(0,0,0,0.65)",
    borderWidth: 1,
    borderColor: BORDER_RED,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 10,
  },
  cardBadgeText: { color: "#fff", fontSize: 12, fontWeight: "900" },
  productTextWrap: {
    position: "absolute",
    left: 12,
    right: 12,
    bottom: 12,
  },
  productTitle: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "900",
    marginBottom: 6,
  },
  priceRow: { flexDirection: "row", alignItems: "baseline", gap: 8 },
  productPrice: { color: "#fff", fontSize: 18, fontWeight: "900" },
  productSubPrice: { color: MUTED, fontSize: 12, fontWeight: "700" },

  edgeHighlight: {
    position: "absolute",
    top: 0,
    bottom: 0,
    width: 3,
    backgroundColor: "rgba(198,40,40,0.55)",
  },

  /* Popular row (3 cards) */
  threeColRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  miniCard: {
    width: "31.5%",
    height: 170,
    borderRadius: 18,
    overflow: "hidden",
    backgroundColor: CARD_DARK,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.10)",
  },
  miniImage: { width: "100%", height: "100%" },
  miniOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.35)",
  },
  miniBadge: {
    position: "absolute",
    top: 10,
    left: 10,
    backgroundColor: "rgba(0,0,0,0.65)",
    borderWidth: 1,
    borderColor: BORDER_RED,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 10,
  },
  miniBadgeText: { color: "#fff", fontSize: 11, fontWeight: "900" },
  miniTextWrap: {
    position: "absolute",
    left: 10,
    right: 10,
    bottom: 10,
  },
  miniTitle: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "900",
    marginBottom: 6,
  },
  miniPrice: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "900",
  },
});
