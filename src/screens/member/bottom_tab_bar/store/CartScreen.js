import React from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { useCart } from "./context/CartContext";

export default function CartScreen() {
  const navigation = useNavigation();

  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    subtotal,
  } = useCart();

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

              <Text style={styles.screenTitle}>Cart</Text>

              <View style={styles.placeholderButton} />
            </View>

            {cartItems.length === 0 ? (
              <View style={styles.emptyCartBox}>
                <Text style={styles.emptyCartText}>Your cart is empty.</Text>
              </View>
            ) : (
              <>
                <ScrollView
                  showsVerticalScrollIndicator={false}
                  contentContainerStyle={styles.cartList}
                >
                  {cartItems.map((item) => (
                    <View key={item.id} style={styles.cartItemCard}>
                      <Image source={item.image} style={styles.cartItemImage} />

                      <View style={styles.cartItemInfo}>
                        <Text style={styles.cartItemName}>{item.name}</Text>
                        <Text style={styles.cartItemPrice}>{item.price}</Text>

                        <View style={styles.quantityRow}>
                          <TouchableOpacity
                            style={styles.quantityButton}
                            onPress={() => decreaseQuantity(item.id)}
                          >
                            <Text style={styles.quantityButtonText}>−</Text>
                          </TouchableOpacity>

                          <Text style={styles.quantityText}>
                            {item.quantity}
                          </Text>

                          <TouchableOpacity
                            style={styles.quantityButton}
                            onPress={() => increaseQuantity(item.id)}
                          >
                            <Text style={styles.quantityButtonText}>+</Text>
                          </TouchableOpacity>

                          <TouchableOpacity
                            style={styles.removeButton}
                            onPress={() => removeFromCart(item.id)}
                          >
                            <Text style={styles.removeButtonText}>Remove</Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                  ))}
                </ScrollView>

                <View style={styles.checkoutBox}>
                  <View style={styles.subtotalRow}>
                    <Text style={styles.subtotalLabel}>Subtotal</Text>
                    <Text style={styles.subtotalValue}>
                      ${subtotal.toFixed(2)}
                    </Text>
                  </View>

                  <TouchableOpacity
                    style={styles.checkoutButton}
                    activeOpacity={0.85}
                  >
                    <Text style={styles.checkoutButtonText}>Checkout</Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
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
    marginBottom: 20,
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

  screenTitle: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "900",
  },

  placeholderButton: {
    width: 42,
    height: 42,
  },

  emptyCartBox: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  emptyCartText: {
    color: "#d0d0d0",
    fontSize: 18,
    fontWeight: "700",
  },

  cartList: {
    paddingBottom: 20,
  },

  cartItemCard: {
    flexDirection: "row",
    backgroundColor: "rgba(0,0,0,0.55)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.10)",
    borderRadius: 20,
    padding: 12,
    marginBottom: 14,
  },

  cartItemImage: {
    width: 88,
    height: 88,
    borderRadius: 16,
  },

  cartItemInfo: {
    flex: 1,
    marginLeft: 12,
    justifyContent: "space-between",
  },

  cartItemName: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "900",
  },

  cartItemPrice: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "900",
    marginTop: 4,
  },

  quantityRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },

  quantityButton: {
    width: 30,
    height: 30,
    borderRadius: 10,
    backgroundColor: "rgba(198,40,40,0.75)",
    alignItems: "center",
    justifyContent: "center",
  },

  quantityButtonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "900",
  },

  quantityText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "900",
    marginHorizontal: 12,
  },

  removeButton: {
    marginLeft: 12,
  },

  removeButtonText: {
    color: "#cfcfcf",
    fontSize: 12,
    fontWeight: "800",
  },

  checkoutBox: {
    backgroundColor: "rgba(0,0,0,0.70)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.10)",
    borderRadius: 20,
    padding: 16,
  },

  subtotalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 14,
  },

  subtotalLabel: {
    color: "#d0d0d0",
    fontSize: 16,
    fontWeight: "800",
  },

  subtotalValue: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "900",
  },

  checkoutButton: {
    height: 52,
    borderRadius: 16,
    backgroundColor: "#c62828",
    alignItems: "center",
    justifyContent: "center",
  },

  checkoutButtonText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "900",
  },
});
