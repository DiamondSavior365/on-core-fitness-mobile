import * as React from "react";
import { AuthProvider } from "./src/auth/AuthContext";
import AppNavigator from "./src/navigation/AppNavigator";
import { useFonts } from "expo-font";

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

  return (
    <AuthProvider>
      <AppNavigator />
    </AuthProvider>
  );
}
