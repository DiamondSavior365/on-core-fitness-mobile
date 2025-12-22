import { createStackNavigator } from "@react-navigation/stack";

import LandingScreen from "../screens/LandingScreen.js";
import LoginScreen from "../screens/LoginScreen.js";
import SignUpScreen from "../screens/SignUpScreen.js";

const Stack = createStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                initialRouteName: "Landing_Screen",
                headerShown: false
            }}
        >
            <Stack.Screen name="Landing_Screen" component={LandingScreen}/>
            <Stack.Screen name="Login_Screen" component={LoginScreen}/>
            <Stack.Screen name="Sign_Up_Screen" component={SignUpScreen}/>
        </Stack.Navigator>
    );
}

export default AuthStack;