// src/screens/member/MemberLayout.js
import React from "react";
import { View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  useRoute,
  getFocusedRouteNameFromRoute,
} from "@react-navigation/native";
import Header from "./Header";
import Footer from "./Footer";

const BG_DARK = "#050505";

export default function MemberLayout({ children }) {
  const route = useRoute();

  // Get the currently focused screen inside the nested navigator
  const focusedRouteName = getFocusedRouteNameFromRoute(route) ?? "Member_Home";

  // Hide header ONLY on Store screen
  const hideHeader =
    focusedRouteName === "Store_Screen" || focusedRouteName === "Sports_Screen";

  return (
    <SafeAreaView style={styles.safeArea} edges={[]}>
      <View style={styles.container}>
        {!hideHeader && <Header />}

        <View style={styles.content}>{children}</View>
      </View>

      <Footer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: BG_DARK,
  },
  container: {
    flex: 1,
    backgroundColor: BG_DARK,
  },
  content: {
    flex: 1,
  },
});
