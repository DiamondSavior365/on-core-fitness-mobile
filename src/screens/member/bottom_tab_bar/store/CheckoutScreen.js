import React from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
  Alert,
  Linking,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { useCart } from "./context/CartContext";
import { useAuth } from "../../../../auth/AuthContext";
import { supabase } from "../../../../lib/supabaseClient";
import * as WebBrowser from "expo-web-browser";

export default function CheckoutScreen() {
  const navigation = useNavigation();
  const { cartItems, subtotal, clearCart } = useCart();
  const { user } = useAuth();

  const customerName = user?.user_metadata?.full_name ?? "Not available";
  const customerEmail = user?.email ?? "Not available";
  const customerPhone = user?.user_metadata?.phone ?? "Not added yet";

  const estimatedTax = subtotal * 0.0875;
  const total = subtotal + estimatedTax;
  const handleContinueToPayment = async () => {
    try {
      const { data, error } = await supabase.functions.invoke(
        "create-checkout-session",
        {
          body: {
            userId: user?.id,
            customerName,
            customerEmail,
            customerPhone,
            cartItems,
            subtotal,
          },
        }
      );

      if (error) {
        Alert.alert("Checkout Error", error.message);
        return;
      }

      // if (data?.url) {
      //   Linking.openURL(data.url);
      // }
      if (data?.url) {
        await WebBrowser.openBrowserAsync(data.url);

        clearCart();
        navigation.navigate("Store_Screen");
      }
    } catch (err) {
      Alert.alert("Checkout Error", "Something went wrong starting checkout.");
    }
  };

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

              <Text style={styles.screenTitle}>Checkout</Text>

              <View style={styles.placeholderButton} />
            </View>

            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.scrollContent}
            >
              <View style={styles.sectionBox}>
                <Text style={styles.sectionTitle}>Order Summary</Text>

                {cartItems.map((item) => (
                  <View key={item.id} style={styles.orderItemRow}>
                    <View style={styles.orderItemInfo}>
                      <Text style={styles.orderItemName}>{item.name}</Text>
                      <Text style={styles.orderItemQuantity}>
                        Qty: {item.quantity}
                      </Text>
                    </View>

                    <Text style={styles.orderItemPrice}>{item.price}</Text>
                  </View>
                ))}

                <View style={styles.divider} />

                <View style={styles.totalRow}>
                  <Text style={styles.totalLabel}>Subtotal</Text>
                  <Text style={styles.totalValue}>${subtotal.toFixed(2)}</Text>
                </View>

                {/* <View style={styles.totalRow}>
                  <Text style={styles.totalLabel}>Estimated Tax</Text>
                  <Text style={styles.totalValue}>
                    ${estimatedTax.toFixed(2)}
                  </Text>
                </View>

                <View style={styles.totalRow}>
                  <Text style={styles.finalTotalLabel}>Total</Text>
                  <Text style={styles.finalTotalValue}>
                    ${total.toFixed(2)}
                  </Text>
                </View> */}
                <View style={styles.totalRow}>
                  <Text style={styles.totalLabel}>Tax</Text>
                  {/* Stripe requires Head office address, product tax code, and tax registrations to enable automatic tax in the Supabase edge function */}
                  {/* <Text style={styles.totalValue}>Calculated at payment</Text> */}
                  <Text style={styles.totalValue}>Taxes may apply</Text>
                </View>

                <View style={styles.totalRow}>
                  <Text style={styles.finalTotalLabel}>Estimated Total</Text>
                  <Text style={styles.finalTotalValue}>
                    ${subtotal.toFixed(2)}+
                  </Text>
                </View>
              </View>

              <View style={styles.sectionBox}>
                <Text style={styles.sectionTitle}>Customer Info</Text>

                <View style={styles.customerInfoRow}>
                  <Text style={styles.customerInfoLabel}>Name</Text>
                  <Text style={styles.customerInfoValue}>{customerName}</Text>
                </View>

                <View style={styles.customerInfoRow}>
                  <Text style={styles.customerInfoLabel}>Email</Text>
                  <Text style={styles.customerInfoValue}>{customerEmail}</Text>
                </View>

                <View style={styles.customerInfoRow}>
                  <Text style={styles.customerInfoLabel}>Phone</Text>
                  <Text style={styles.customerInfoValue}>{customerPhone}</Text>
                </View>
              </View>

              {/* <TouchableOpacity
                style={styles.paymentButton}
                activeOpacity={0.85}
                onPress={() =>
                  Alert.alert(
                    "Checkout Coming Soon",
                    "Stripe checkout will be added later."
                  )
                }
              >
                <Text style={styles.paymentButtonText}>
                  Continue to Payment
                </Text>
              </TouchableOpacity> */}
              <TouchableOpacity
                style={styles.paymentButton}
                activeOpacity={0.85}
                onPress={handleContinueToPayment}
              >
                <Text style={styles.paymentButtonText}>
                  Continue to Payment
                </Text>
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

  scrollContent: {
    paddingBottom: 120,
  },

  sectionBox: {
    backgroundColor: "rgba(0,0,0,0.55)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.10)",
    borderRadius: 20,
    padding: 16,
    marginBottom: 18,
  },

  sectionTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "900",
    marginBottom: 14,
  },

  orderItemRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 14,
  },

  orderItemInfo: {
    flex: 1,
    marginRight: 12,
  },

  orderItemName: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "800",
  },

  orderItemQuantity: {
    color: "#bdbdbd",
    fontSize: 13,
    fontWeight: "700",
    marginTop: 3,
  },

  orderItemPrice: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "900",
  },

  divider: {
    height: 1,
    backgroundColor: "rgba(255,255,255,0.12)",
    marginVertical: 8,
  },

  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },

  totalLabel: {
    color: "#d0d0d0",
    fontSize: 15,
    fontWeight: "700",
  },

  totalValue: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "800",
  },

  finalTotalLabel: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "900",
  },

  finalTotalValue: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "900",
  },

  placeholderText: {
    color: "#bdbdbd",
    fontSize: 14,
    lineHeight: 20,
  },

  paymentButton: {
    height: 56,
    borderRadius: 18,
    backgroundColor: "#c62828",
    alignItems: "center",
    justifyContent: "center",
  },
  paymentButtonText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "900",
  },
  //---------------------- Customer Info Style -------------------
  customerInfoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },

  customerInfoLabel: {
    color: "#bdbdbd",
    fontSize: 14,
    fontWeight: "700",
  },

  customerInfoValue: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "800",
    maxWidth: "65%",
    textAlign: "right",
  },
});
