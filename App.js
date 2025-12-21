import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";

import Footer from "./src/screens/Components/Footer.js";
import AuthStack from "./src/tabs/AuthStack.js";

// import { SettingsProvider } from "./src/lib/supabase/hooks/useSettingsContext";
// import AuthProvider from "./src/lib/supabase/providers/AuthProvider";

const RootApp = () => {
  const user = "Guest";

  return (
    <NavigationContainer>
      {(user) ? (
        <Footer/>
      ) : (
        <AuthStack/>
      )}
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

  return <RootApp/>;
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
