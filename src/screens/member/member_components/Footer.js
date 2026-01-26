import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import HomeIcon from "../../../../assets/icons/home.svg";
import ProgressIcon from "../../../../assets/icons/history.svg";
import MealIcon from "../../../../assets/icons/meal.svg";
import StoreIcon from "../../../../assets/icons/store2.svg";
import { useNavigation } from "@react-navigation/native";

export default function Footer() {
  const navigation = useNavigation();

  return (
    <View style={styles.footer}>
      <TabItem
        icon={HomeIcon}
        label="Home"
        onPress={() => navigation.navigate("Home")}
      />
      <TabItem
        icon={ProgressIcon}
        label="Progress"
        onPress={() => navigation.navigate("Progress")}
      />
      <TabItem
        icon={MealIcon}
        label="Meals"
        onPress={() => navigation.navigate("Meals")}
      />
      <TabItem
        icon={StoreIcon}
        label="Store"
        onPress={() => navigation.navigate("Store_Screen")}
      />
    </View>
  );
}

const TabItem = ({ icon: Icon, label, onPress }) => (
  <TouchableOpacity style={styles.tabItem} onPress={onPress}>
    <Icon width={26} height={26} color="#ffffff" />
    <Text style={styles.tabLabel}>{label}</Text>
  </TouchableOpacity>
);

const BRAND_RED = "#c62828";

const styles = StyleSheet.create({
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingBottom: 14,
    paddingTop: 10,
    backgroundColor: BRAND_RED,
    paddingHorizontal: 15,
  },
  tabItem: {
    alignItems: "center",
  },
  tabLabel: {
    marginTop: 4,
    fontSize: 11,
    color: "#ffffff",
  },
});

// export default Footer;
