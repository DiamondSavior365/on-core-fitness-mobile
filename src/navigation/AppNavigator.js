import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View, ActivityIndicator } from "react-native";
import { useAuth } from "../auth/AuthContext";

// Public screens
import LoginScreen from "../screens/LoginScreen";
import SignUpScreen from "../screens/SignUpScreen";
import DirectoryScreen from "../screens/public/DirectoryScreen";
import PersonalTrainingScreen from "../screens/public/PersonalTrainingScreen";
import WellnessScreen from "../screens/public/WellnessScreen";
import AboutUsScreen from "../screens/public/AboutUsScreen";
import PricingPlanScreen from "../screens/public/PricingPlanScreen";
import ContactUsScreen from "../screens/public/ContactUsScreen";
import ThankYouScreen from "../screens/public/ThankYouScreen";

//Member screens
import MemberHomeScreen from "../screens/member/MemberHomeScreen";
import WorkoutScreen from "../screens/member/top_tab_bar/WorkoutScreen";
import MemberLayout from "../screens/member/member_components/MemberLayout";
import StoreScreen from "../screens/member/bottom_tab_bar/StoreScreen";

// Member screens (example)
// import MemberHomeScreen from "../screens/members/MemberHomeScreen";

const Stack = createStackNavigator();
const RootStack = createStackNavigator();
const PublicStackNav = createStackNavigator();
const MemberInnerStack = createStackNavigator();

function LoadingScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size="large" />
    </View>
  );
}

// function PublicStack() {
//   return (
//     <Stack.Navigator screenOptions={{ headerShown: false }}>
//       <Stack.Screen name="Login_Screen" component={LoginScreen} />
//       <Stack.Screen name="Sign_Up_Screen" component={SignUpScreen} />
//       <Stack.Screen name="Directory_Screen" component={DirectoryScreen} />
//     </Stack.Navigator>
//   );
// }
function PublicStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Login_Screen"
        component={LoginScreen}
        options={{
          headerShown: true,
          headerTransparent: true,
          headerTitle: "",
          // headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="Sign_Up_Screen"
        component={SignUpScreen}
        options={{
          headerShown: true,
          headerTransparent: true,
          headerTitle: "",
          // headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="Directory_Screen"
        component={DirectoryScreen}
        options={{
          headerShown: true,
          headerTransparent: true,
          headerTitle: "",
          // headerBackTitleVisible: false,
        }}
      />

      {/* Detail screens WITH headers */}
      <Stack.Screen
        name="Personal_Training_Screen"
        component={PersonalTrainingScreen}
        options={{
          headerShown: true,
          headerTransparent: true,
          headerTitle: "",
          // headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="Wellness_Screen"
        component={WellnessScreen}
        options={{
          headerShown: true,
          headerTransparent: true,
          headerTitle: "",
          // headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="About_Us_Screen"
        component={AboutUsScreen}
        options={{
          headerShown: true,
          headerTransparent: true,
          headerTitle: "",
          // headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="Pricing_Plan_Screen"
        component={PricingPlanScreen}
        options={{
          headerShown: true,
          headerTransparent: true,
          headerTitle: "",
          // headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="Contact_Us_Screen"
        component={ContactUsScreen}
        options={{
          headerShown: true,
          headerTransparent: true,
          headerTitle: "",
          // headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="Thank_You_Screen"
        component={ThankYouScreen}
        options={{
          headerShown: false,
          headerTransparent: true,
          headerTitle: "",
          // headerBackTitleVisible: false,
        }}
      />
    </Stack.Navigator>
  );
}

// function MemberStack() {
//   return (
//     <Stack.Navigator screenOptions={{ headerShown: false }}>
//       <Stack.Screen
//         name="Member_Home"
//         component={MemberHomeScreen}
//         options={{
//           headerShown: true,
//           headerTransparent: true,
//           headerTitle: "",
//           // headerBackTitleVisible: false,
//         }}
//       />

//       {/* --------------------------- Top Tab Bar --------------------------*/}
//       <Stack.Screen
//         name="Workout_Screen"
//         component={WorkoutScreen}
//         options={{
//           headerShown: true,
//           headerTransparent: true,
//           headerTitle: "",
//           // headerBackTitleVisible: false,
//         }}
//       />

//       {/* --------------------------- Bottom Tab Bar --------------------------*/}
//       <Stack.Screen
//         name="Store_Screen"
//         component={StoreScreen}
//         options={{
//           headerShown: true,
//           headerTransparent: true,
//           headerTitle: "",
//           // headerBackTitleVisible: false,
//         }}
//       />
//     </Stack.Navigator>
//   );
// }

/* ---------------- MEMBER AREA (Header/Footer fixed) ---------------- */

function MemberInnerNavigator() {
  return (
    <MemberLayout>
      <MemberInnerStack.Navigator screenOptions={{ headerShown: false }}>
        <MemberInnerStack.Screen
          name="Member_Home"
          component={MemberHomeScreen}
        />
        <MemberInnerStack.Screen
          name="Workout_Screen"
          component={WorkoutScreen}
        />
        <MemberInnerStack.Screen name="Store_Screen" component={StoreScreen} />
      </MemberInnerStack.Navigator>
    </MemberLayout>
  );
}

function MemberStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Member_Root" component={MemberInnerNavigator} />
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
