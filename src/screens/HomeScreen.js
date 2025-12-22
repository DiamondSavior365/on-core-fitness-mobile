import { ScrollView, View, Text, TouchableOpacity, Image } from "react-native";

import DumbellIcon from "../../assets/icons/dumbell.svg";
import ClipboardIcon from "../../assets/icons/clipboard.svg";
import ArrowIcon from "../../assets/icons/left-round.svg";

const VerticalLine = () => (
    <View style={{ height: "75%", alignSelf: "center", width: 1, backgroundColor: "#FFFFFF" }}></View>
);

const HomeScreen = () => {
    return (
        <ScrollView style={{ flex: 1, backgroundColor: "#131313" }}>
            <View style={{ flexDirection: "row", paddingVertical: 8, paddingHorizontal: 8, justifyContent: "space-evenly" }}>
                <TouchableOpacity style={{ justifyContent: "center", alignItems: "center" }}>
                    <DumbellIcon width={42} height={42}/>
                    <Text style={{ color: "#FFFFFF", fontSize: 12 }}>Workout</Text>
                </TouchableOpacity>
                <VerticalLine/>
                <TouchableOpacity style={{ justifyContent: "center", alignItems: "center" }}>
                    <ClipboardIcon width={42} height={42}/>
                    <Text style={{ color: "#FFFFFF", fontSize: 12 }}>Progress</Text>
                </TouchableOpacity>
                <VerticalLine/>
                <TouchableOpacity>
                    <Text style={{ color: "#FFFFFF", fontSize: 12 }}>Nutrition</Text>
                </TouchableOpacity>
                <VerticalLine/>
                <TouchableOpacity>
                    <Text style={{ color: "#FFFFFF", fontSize: 12 }}>Community</Text>
                </TouchableOpacity>
            </View>
            <View style={{ padding: 16 }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                    <Text style={{ color: "#FFFFFF", fontSize: 18 }}>Recommendations</Text>
                    <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }}>
                        <Text style={{ color: "#FFFFFF", marginRight: 4 }}>See All</Text>
                        <ArrowIcon width={16} height={16} fill="#c62828" style={{ transform: [{ rotate: "180deg" }] }}/>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: "row", paddingVertical: 16 }}>
                    <TouchableOpacity style={{ borderRadius: 16, backgroundColor: "#FFF", height: 150, width: "49%", marginRight: "2%" }}>
                        <Image/>
                        <View>
                            <Text>hello</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ borderRadius: 16, backgroundColor: "#FFF", width: "49%"  }}>
                        <Image/>
                        <View>
                            <Text>hello</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ backgroundColor: "#c62828", height: 200, justifyContent: "center", alignItems: "center" }}>
                <TouchableOpacity style={{ flexDirection: "row", backgroundColor: "#202020", borderRadius: 20, width: "85%", height: "60%" }}>
                    <View style={{ justifyContent: "center", alignItems: "center", padding: 16, width: "50%" }}>
                        <Text style={{ color: "#FFF", fontSize: 24, textAlign: "center" }}>Weekly Challenge</Text>
                        <Text style={{ color: "#FFF" }}>Plank With Hip Twist</Text>
                    </View>
                    <Image/>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

export default HomeScreen;