import { View, TouchableOpacity, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { useHeaderHeight } from "@react-navigation/elements";
import Profile from "../../assets/icons/profile.svg";
import Wallet from "../../assets/icons/wallet.svg";
import Membership from "../../assets/icons/membership.svg";
import History from "../../assets/icons/history.svg";
import Document from "../../assets/icons/document.svg";
import Meal from "../../assets/icons/meal.svg";
import Balance from "../../assets/icons/balance.svg";
import Store from "../../assets/icons/store.svg"
import RightChevron from "../../assets/icons/right-chevron.svg";

const icons = {
    profile: Profile,
    wallet: Wallet,
    membership: Membership,
    history: History,
    document: Document,
    meal: Meal,
    balance: Balance,
    store: Store
}

const SettingsButton = ({title, icon}) => {
    const Icon = icons[icon];
    
    return (
        <TouchableOpacity
            style={styles.button}
            activeOpacity={0.9}
        >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Icon
                    width={24}
                    height={24}
                    style={styles.icon}
                />
                <Text style={styles.text}>{title}</Text>
            </View>
            <RightChevron
                width={24}
                height={24}
                color="#c62828"
            />
        </TouchableOpacity>
    );
};

const SettingsScreen = () => {
    const headerHeight = useHeaderHeight();

    return (
        <View style={{ height: 1000, backgroundColor: "#202020", paddingTop: headerHeight }}>
            <SettingsButton title="My Profile" icon="profile"/>
            <SettingsButton title="Payment Methods" icon="wallet"/>
            <SettingsButton title="Payment History" icon="document"/>
            <SettingsButton title="Membership" icon="membership"/>
            <SettingsButton title="Session Balance" icon="balance"/>
            <SettingsButton title="Check-in History" icon="history"/>
            <SettingsButton title="Recurring Services" icon="store"/>
            <SettingsButton title="Favorite Meals" icon="meal"/>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        backgroundColor: "#242424",
        marginBottom: 2
    },
    icon: {
        marginRight: 12
    },
    text: {
        color: "#FFFFFF",
        fontSize: 16
    }
});

export default SettingsScreen;