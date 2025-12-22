import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomTabBar } from "@react-navigation/bottom-tabs";

import HomeStack from "../../tabs/HomeStack.js";
import ActivityStack from "../../tabs/ActivityStack.js";

import MealIcon from "../../../assets/icons/meal.svg";
import StoreIcon from "../../../assets/icons/store2.svg";
import ActivityIcon from "../../../assets/icons/activity.svg";
import HomeIcon from "../../../assets/icons/home.svg";
import SettingsScreen from "../SettingsScreen.js";

const Tab = createBottomTabNavigator();

const buttons = [
  { routeName: "Home", icon: HomeIcon, component: HomeStack },
  { routeName: "Activity", icon: ActivityIcon, component: ActivityStack },
  { routeName: "Payment", icon: MealIcon, component: SettingsScreen },
  { routeName: "Recurring_Services", icon: StoreIcon, component: SettingsScreen }
];

function TabBar(props) {
  return (
    <View style={{ backgroundColor: "#c62828" }}>
      <View style={{ alignItems: "center" }}>
        <BottomTabBar {...props} />
      </View>
    </View>
  );
}

const TabButton = ({ item, ...props }) => {
  const isFocused = props["aria-selected"];

  return (
    <TouchableOpacity
      onPress={props.onPress}
      activeOpacity={1}
      style={{ 
        justifyContent: "center",
        alignItems: "center",
        flex: 1
      }}
    >
      <item.icon width={36} height={36} fill={isFocused ? "#FFFFFF" : "#FFFFFF"}/>
    </TouchableOpacity>
  );
}

const Footer = () => {
    return (
        <Tab.Navigator 
          id="MainTabs"
          tabBar={(props) => <TabBar {...props}/>}
          screenOptions={{ 
            headerShown: false,
            tabBarStyle: {
              height: 70,
              backgroundColor: "#c62828",
              paddingTop: 0,
              paddingBottom: 0,
              borderTopWidth: 0
            },
            tabBarItemStyle: {
              flex: 0,
              width: 85,
              justifyContent: "center",
              alignItems: "center"
            },
            tabBarIconStyle: {
              justifyContent: "center",
              alignItems: "center",
              flex: 1
            }
          }}
        >
          {
            buttons.map((item, index) => (
              <Tab.Screen 
                name={item.routeName}
                component={item.component}
                options={{
                  tabBarShowLabel: false,
                  tabBarButton: (props) => <TabButton item={item} {...props}/>
                }}
              />
            ))
          }
        </Tab.Navigator>
    );
};

export default Footer;