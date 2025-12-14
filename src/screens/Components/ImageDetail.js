import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

//This is not a screen component, this is a single component
//Screen components show content in its entirety
//while single components show just a resuable piece

// Destructruring the Props property to obtain imageSource, title and score.
const ImageDetail = (prop) => {
  // console.log(prop); // use to view properties, must have props as parameter for ImageDetail function

  return (
    <View style={styles.centeredContainer}>
      <View style={styles.container}></View>
      <Image
        source={prop.imageSource}
        style={{ width: 385, height: 385, resizeMode: "contain" }}
      />
      <Text style={styles.title}>{prop.title}</Text>
      <Text style={styles.info}>Info - {prop.info}</Text>
      <Text style={styles.confirm_guest}>Confirmed Guest: {prop.count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredContainer: {
    alignItems: "center", // centers horizontally
    // justifyContent: "center", // optional: centers vertically if you give height
    // padding: 10, // optional: adds some spacing from screen edges
  },
  container: {
    marginBottom: 30,
  },
  title: {
    marginTop: 10,
    fontSize: 30,
    fontWeight: "bold",
    fontFamily: "Times New Roman",
    marginBottom: 10,
    paddingHorizontal: 15,
  },
  info: {
    marginBottom: 10,
    fontStyle: "italic",
    letterSpacing: 1,
    color: "#a52a2a", // dark reddish tone
    textShadowColor: "#000",
    textShadowOffset: { width: 0.5, height: 1.5 },
    textShadowRadius: 2,
    paddingHorizontal: 15,
  },
  confirm_guest: {
    fontWeight: "600",
    color: "#1E7A1E", // slightly lighter, eerie green
    textShadowColor: "#003300",
    textShadowColor: "#228B22",
    textShadowRadius: 4,

    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    marginTop: 4,
  },
});

export default ImageDetail;
