import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
// import DirectoryScreen from "./src/screens/DirectoryScreen";
// import LoginScreen from "./src/screens/LoginScreen";
// import SignUpScreen from "./src/screens/SignUpScreen";
// import { SettingsProvider } from "./src/lib/supabase/hooks/useSettingsContext";
// import AuthProvider from "./src/lib/supabase/providers/AuthProvider";
// import EventListScreen from "./src/screens/EventListScreen";
// import SettingsScreen from "./src/screens/SettingsScreen";
import { View, Image, TouchableOpacity } from "react-native";

const Stack = createStackNavigator();

// const SettingsButton = ({ navigation }) => (
//   <TouchableOpacity onPress={() => navigation.navigate("Settings_Screen")}>
//     <View style={{ paddingRight: 2 }}>
//       <Image
//         source={require("./assets/settings.png")}
//         style={{
//           width: 36,
//           length: 36,
//           resizeMode: "contain",
//         }}
//       />
//     </View>
//   </TouchableOpacity>
// );

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
        {/* <Stack.Screen
          name="Directory_Screen"
          component={DirectoryScreen}
          options={({ navigation }) => ({
            headerShown: true,
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
          name="Login_Screen"
          component={LoginScreen}
          options={{ headerShown: true, headerTransparent: true }}
        />
        <Stack.Screen
          name="Sign_Up_Screen"
          component={SignUpScreen}
          options={{ headerShown: true }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default function App() {
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
