// src/screens/member/MemberLayout.js
import React from "react";
import { View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "./Header";
import Footer from "./Footer";

const BG_DARK = "#050505";

export default function MemberLayout({ children }) {
  return (
    <SafeAreaView style={styles.safeArea} edges={["top"]}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>{children}</View>
      </View>
      <Footer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: BG_DARK },
  container: { flex: 1, backgroundColor: BG_DARK },
  content: { flex: 1 },
});
