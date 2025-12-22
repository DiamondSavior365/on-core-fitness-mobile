import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import LeftIcon from "../../../assets/icons/left-round.svg";
import SearchIcon from "../../../assets/icons/search.svg";
import BellIcon from "../../../assets/icons/bell.svg";
import ProfileIcon from "../../../assets/icons/profile2.svg";

const Header = ({ navigation, back, route, options }) => {
    const insets = useSafeAreaInsets();

    return (
        <View style={[styles.container, { paddingTop: insets.top }]}>
            <View style={styles.row}>
                <View style={{ height: 30 }}>
                    {(route.name !== "Home_Screen") ? (
                        <TouchableOpacity 
                            style={{ flexDirection: "row", alignItems: "center" }}
                            onPress={navigation.goBack}
                        >
                            <LeftIcon 
                                width={20}
                                height={20}
                                fill="#c62828"
                            />
                            <Text style={styles.title}>{options.title}</Text>
                        </TouchableOpacity>
                    ) : (
                        <View>
                            <Image source={require("../../../assets/logo/white-logo.png")} resizeMode="contain" style={{ height: 28, width: 225 }}/>
                        </View>
                    )}
                </View>
                {(options.titleOnly !== false) && (
                    <View style={{ flexDirection: "row", alignItems: "center", gap: 16 }}>
                        <TouchableOpacity>
                            <SearchIcon
                                width={24}
                                height={24}
                                stroke="#FFFFFF"
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <BellIcon
                                width={24}
                                height={24}
                                fill="#FFFFFF"
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <ProfileIcon
                                width={24}
                                height={24}
                                fill="#FFFFFF"
                            />
                        </TouchableOpacity>
                    </View>
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#131313"
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 16,
        paddingBottom: 12
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginLeft: 6,
        color: "#FFFFFF"
    },
    greeting: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#FFFFFF"
    }
});

export default Header;
