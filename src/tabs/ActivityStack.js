import { createStackNavigator } from "@react-navigation/stack";

import Header from "../screens/Components/Header.js";
import CheckInHistoryScreen from "../screens/CheckInHistoryScreen.js";
import SessionBalanceScreen from "../screens/SessionBalanceScreen.js";

const Stack = createStackNavigator();

const ActivityStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                header: (props) => <Header {...props}/>,
                headerShown: true,
                headerTransparent: false
            }}
        >
            <Stack.Screen name="Check_In_History" component={CheckInHistoryScreen}/>
            <Stack.Screen name="Session_Balance" component={SessionBalanceScreen}/>
        </Stack.Navigator>
    );
}

export default ActivityStack;