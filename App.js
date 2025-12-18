import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import DirectoryScreen from "./src/screens/DirectoryScreen";
import LoginScreen from "./src/screens/LoginScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import PersonalTrainingScreen from "./src/screens/PersonalTrainingScreen";
import WellnessScreen from "./src/screens/WellnessScreen";
// import { SettingsProvider } from "./src/lib/supabase/hooks/useSettingsContext";
// import AuthProvider from "./src/lib/supabase/providers/AuthProvider";
import EventListScreen from "./src/screens/EventListScreen";
// import SettingsScreen from "./src/screens/SettingsScreen";
import { View, Image, TouchableOpacity } from "react-native";

import { useFonts } from "expo-font";

const Stack = createStackNavigator();

const SettingsButton = ({ navigation }) => (
  <TouchableOpacity onPress={() => navigation.navigate("Settings_Screen")}>
    <View style={{ paddingRight: 2 }}>
      <Image
        source={require("./assets/settings.png")}
        style={{
          width: 36,
          length: 36,
          resizeMode: "contain",
        }}
      />
    </View>
  </TouchableOpacity>
);

function RootApp() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          title: "",
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        {/* <Stack.Screen
          name="Settings_Screen"
          component={SettingsScreen}
          options={{ title: "App Settings", headerShown: true }}
        /> */}
        {/* 
        
        */}
        <Stack.Screen
          name="Login_Screen"
          component={LoginScreen}
          options={{ headerShown: true, headerTransparent: true }}
        />
        <Stack.Screen
          name="Sign_Up_Screen"
          component={SignUpScreen}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Directory_Screen"
          component={DirectoryScreen}
          options={({ navigation }) => ({
            headerShown: true,
            headerTransparent: true,
            headerRight: () => <SettingsButton navigation={navigation} />,
          })}
        />
        <Stack.Screen
          name="EventListScreen"
          component={EventListScreen}
          options={({ navigation }) => ({
            headerShown: true,
            headerRight: () => <SettingsButton navigation={navigation} />,
          })}
        />
        <Stack.Screen
          name="Personal_Training_Screen"
          component={PersonalTrainingScreen}
          options={({ navigation }) => ({
            headerShown: true,
            headerTransparent: true,
            // headerRight: () => <SettingsButton navigation={navigation} />,
          })}
        />
        <Stack.Screen
          name="Wellness_Screen"
          component={WellnessScreen}
          options={({ navigation }) => ({
            headerShown: true,
            headerTransparent: true,
            // headerRight: () => <SettingsButton navigation={navigation} />,
          })}
        />
        {/* <Stack.Screen
          name="Wellness_Screen"
          component={WellnessScreen}
          options={({ navigation }) => ({
            headerShown: true,
            headerTransparent: true,
            // headerRight: () => <SettingsButton navigation={navigation} />,
          })}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  const [fontsLoaded] = useFonts({
    BlackOpsOne: require("./assets/Fonts/Black_Ops_One/BlackOpsOne-Regular.ttf"),
    DarkUnderground: require("./assets/Fonts/dark-underground/Dark Underground.ttf"),
    RussoOne: require("./assets/Fonts/Russo_One/RussoOne-Regular.ttf"),
    ScratchedLetters: require("./assets/Fonts/scratched-letters/Scratched Letters.ttf"),
    SquadaOne: require("./assets/Fonts/Squada_One/SquadaOne-Regular.ttf"),
    Staatliches: require("./assets/Fonts/Staatliches/Staatliches-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return <RootApp />;
}

// export default function App() {
//   React.useEffect(() => {
//     // Temporary network test
//     fetch("https://chteuxxqhosshehtqlyz.supabase.co")
//       .then(() => console.log("Supabase reachable!"))
//       .catch((err) => console.log("Supabase NOT reachable:", err));
//   }, []);

//   return (
//     <AuthProvider>
//       <SettingsProvider>
//         <RootApp />
//       </SettingsProvider>
//     </AuthProvider>
//   );
// }
