import { createStackNavigator } from "@react-navigation/stack";

import Header from "../screens/Components/Header.js";

const Stack = createStackNavigator();

const MealStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                header: (props) => <Header {...props}/>,
                headerShown: true,
                headerTransparent: true
            }}
        >
            <Stack.Screen name="Check_In_History" component={CheckInHistoryScreen}/>
            <Stack.Screen name="Session_Balance" component={SessionBalanceScreen}/>
        </Stack.Navigator>
    );
}

export default MealStack;