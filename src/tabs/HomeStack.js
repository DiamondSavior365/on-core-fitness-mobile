import { createStackNavigator } from "@react-navigation/stack";

import DirectoryScreen from "../screens/DirectoryScreen.js";
import PersonalTrainingScreen from "../screens/PersonalTrainingScreen.js";
import WellnessScreen from "../screens/WellnessScreen.js";
import Header from "../screens/Components/Header.js";
import HomeScreen from "../screens/HomeScreen.js";

const Stack = createStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                initialRouteName: "Home_Screen",
                header: (props) => <Header {...props}/>,
                headerShown: true,
                headerTransparent: false
            }}
        >
            <Stack.Screen name="Home_Screen" component={HomeScreen} options={{ title: "Home" }}/>
            <Stack.Screen name="Personal_Training_Screen" component={PersonalTrainingScreen} options={{ title: "Personal Training" }}/>
            <Stack.Screen name="Wellness_Screen" component={WellnessScreen} options={{ title: "Wellness" }}/>
        </Stack.Navigator>
    );
}

export default HomeStack;