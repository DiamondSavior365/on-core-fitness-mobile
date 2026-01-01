import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View, ActivityIndicator } from "react-native";
import { useAuth } from "../auth/AuthContext";

// Public screens
import LoginScreen from "../screens/LoginScreen";
import SignUpScreen from "../screens/SignUpScreen";
import DirectoryScreen from "../screens/public/DirectoryScreen";
import MemberHomeScreen from "../screens/MemberHomeScreen";

// Member screens (example)
// import MemberHomeScreen from "../screens/members/MemberHomeScreen";

const Stack = createStackNavigator();

function LoadingScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size="large" />
    </View>
  );
}

function PublicStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login_Screen" component={LoginScreen} />
      <Stack.Screen name="Sign_Up_Screen" component={SignUpScreen} />
      <Stack.Screen name="Directory_Screen" component={DirectoryScreen} />
    </Stack.Navigator>
  );
}

function MemberStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Member_Home" component={MemberHomeScreen} />
    </Stack.Navigator>
  );
}

export default function AppNavigator() {
  const { session, initializing } = useAuth();

  if (initializing) return <LoadingScreen />;

  return (
    <NavigationContainer>
      {session ? <MemberStack /> : <PublicStack />}
    </NavigationContainer>
  );
}
