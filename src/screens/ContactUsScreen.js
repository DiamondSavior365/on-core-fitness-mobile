import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

const ContactUsScreen = ({ navigation }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [interests, setInterests] = useState({
    tour: false,
    freeSession: false,
    personalTraining: false,
    wellness: false,
    specials: false,
    freePass: false,
  });
  const [agreed, setAgreed] = useState(false);

  const toggleInterest = (key) => {
    setInterests((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoStack}>
        <Text style={[styles.logoBase, styles.logoOn]}>ON</Text>
        <Text style={[styles.logoBase, styles.logoCore]}>CORE</Text>
        <Text style={[styles.logoBase, styles.logoFitness]}>FITNESS</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Image
          source={require("../../assets/On_Core_Fitness_Images/on_core_fitness_image_15.png")}
          style={styles.heroImage}
        />
        <Text style={[styles.sectionTextOne, styles.logoCore]}>CONTACT US</Text>
        <Text style={styles.sectionTextTwo}>
          We're here to support your fitness journey - reach out and connect
          with our team.
        </Text>
        <Text style={styles.sectionTextTwo}>
          2688 Santiago Blvd., Orange, CA 92867
        </Text>
        <Text style={styles.sectionTextTwo}>Everyday from 4AM – 11PM</Text>
        <Text style={styles.sectionTextTwo}>Phone: 714-988-7987</Text>
        <View style={styles.formCard}>
          <Text style={styles.formHeaderText}>
            Please fill out the form. Our team will be contacting you soon.
          </Text>

          <TextInput
            style={styles.input}
            placeholder="First Name *"
            autoCapitalize="words"
            value={firstName}
            onChangeText={setFirstName}
          />

          <TextInput
            style={styles.input}
            placeholder="Last Name *"
            autoCapitalize="words"
            value={lastName}
            onChangeText={setLastName}
          />

          <TextInput
            style={styles.input}
            placeholder="Email *"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            value={email}
            onChangeText={setEmail}
          />

          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            keyboardType="phone-pad"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
          <Text style={styles.interestHeader}>I'm interested in:</Text>

          <TouchableOpacity
            style={styles.checkboxRow}
            onPress={() => toggleInterest("tour")}
          >
            <View
              style={[
                styles.checkbox,
                interests.tour && styles.checkboxChecked,
              ]}
            />
            <Text style={styles.checkboxLabel}>Take a Tour</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.checkboxRow}
            onPress={() => toggleInterest("freeSession")}
          >
            <View
              style={[
                styles.checkbox,
                interests.freeSession && styles.checkboxChecked,
              ]}
            />
            <Text style={styles.checkboxLabel}>
              Free One Hour Start Up Training
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.checkboxRow}
            onPress={() => toggleInterest("personalTraining")}
          >
            <View
              style={[
                styles.checkbox,
                interests.personalTraining && styles.checkboxChecked,
              ]}
            />
            <Text style={styles.checkboxLabel}>Personal Training</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.checkboxRow}
            onPress={() => toggleInterest("wellness")}
          >
            <View
              style={[
                styles.checkbox,
                interests.wellness && styles.checkboxChecked,
              ]}
            />
            <Text style={styles.checkboxLabel}>Wellness</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.checkboxRow}
            onPress={() => toggleInterest("specials")}
          >
            <View
              style={[
                styles.checkbox,
                interests.specials && styles.checkboxChecked,
              ]}
            />
            <Text style={styles.checkboxLabel}>Our Specials</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.checkboxRow}
            onPress={() => toggleInterest("freePass")}
          >
            <View
              style={[
                styles.checkbox,
                interests.freePass && styles.checkboxChecked,
              ]}
            />
            <Text style={styles.checkboxLabel}>Free Pass</Text>
          </TouchableOpacity>
          <View style={styles.termsCard}>
            <TouchableOpacity
              style={styles.checkboxRow}
              onPress={() => setAgreed(!agreed)}
            >
              <View style={[styles.checkbox, agreed && styles.checkboxChecked]}>
                {agreed && <Text style={styles.checkboxCheck}>✓</Text>}
              </View>

              <Text style={styles.termsText}>
                I agree to the terms and conditions provided by On Core Fitness.
                By providing my phone number, I agree to receive text messages
                from the business.
              </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={[
              styles.submitButton,
              !agreed && styles.submitButtonDisabled,
            ]}
            disabled={!agreed}
            onPress={() => {
              // submit handler goes here later
              console.log("Form submitted");
            }}
          >
            <Text style={styles.submitButtonText}>SUBMIT</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const scale = width / 375;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },

  /* HERO */
  heroContainer: {
    width: "100%",
    position: "relative",
  },

  heroImage: {
    width: width,
    height: Math.round(width * 0.45),

    resizeMode: "cover",
  },
  content: {
    padding: 20,
    backgroundColor: "#000",
  },

  sectionTextOne: {
    paddingTop: 10,
    color: "#fff",
    fontSize: 25,
    lineHeight: 26,
    fontWeight: "800", // max bold
    fontFamily: "RussoOne",
    textAlign: "center",
  },

  sectionTextTwo: {
    marginVertical: -5,
    paddingHorizontal: 5,
    color: "#fff",
    fontSize: 15,
    lineHeight: 21,
    fontWeight: "400", // regular
    alignItems: "center",
    textAlign: "center",
  },
  logoBase: {
    fontSize: 33 * scale,
    fontWeight: "bold",
    letterSpacing: 3,
    textAlign: "center",

    textShadowColor: "#000",
    textShadowOffset: { width: 6, height: 7 },
    textShadowRadius: 10,
    fontFamily: "BlackOpsOne",
  },
  logoOn: {
    color: "#ffffff",
  },

  logoCore: {
    color: "#c62828", // brand red
    marginVertical: 4,
  },

  logoFitness: {
    color: "#ffffff",
  },
  logoStack: {
    flexDirection: "row", // 👈 THIS is the key
    alignItems: "center",
    justifyContent: "center",
    marginTop: 110,
    gap: 8, // spacing between words (RN 0.71+)
  },
  scrollContainer: {
    paddingVertical: 20,
    alignItems: "center",
    gap: 20,
  },
  input: {
    height: 48,
    width: "95%",
    alignSelf: "center",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 12,
    backgroundColor: "#fff",
  },
  // formCard: {
  //   width: "95%",
  //   backgroundColor: "rgba(255, 255, 255, 0.07)",
  //   borderRadius: 16,
  //   paddingVertical: 16,
  //   paddingHorizontal: 18,
  //   marginBottom: 10,
  // },

  // formHeaderText: {
  //   color: "#fff",
  //   fontSize: 15,
  //   lineHeight: 22,
  //   textAlign: "center",
  //   fontWeight: "400",
  // },
  formCard: {
    width: "95%",
    backgroundColor: "rgba(255, 255, 255, 0.07)",
    borderRadius: 18,
    paddingVertical: 18,
    paddingHorizontal: 16,
    // marginTop: 10,
  },

  formHeaderText: {
    color: "#fff",
    fontSize: 15,
    lineHeight: 22,
    textAlign: "center",
    marginBottom: 16,
  },
  interestHeader: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "600",
    marginTop: 10,
    marginBottom: 8,
  },

  checkboxRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 6,
  },

  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1.5,
    borderColor: "#fff",
    borderRadius: 4,
    marginRight: 10,
  },

  checkboxChecked: {
    backgroundColor: "#c62828", // brand red
    borderColor: "#c62828",
  },

  checkboxLabel: {
    color: "#fff",
    fontSize: 14,
  },
  submitButton: {
    marginTop: 16,
    backgroundColor: "#c62828", // brand red
    paddingVertical: 14,
    borderRadius: 999,
    alignItems: "center",
  },

  submitButtonDisabled: {
    backgroundColor: "rgba(198, 40, 40, 0.4)",
  },

  submitButtonText: {
    color: "#fff",
    fontSize: 15,
    letterSpacing: 2,
    fontFamily: "RussoOne",
  },
  termsCard: {
    backgroundColor: "rgba(255, 255, 255, 0.09)",
    borderRadius: 14,
    padding: 14,
    marginTop: 12,
    marginBottom: 8,
  },

  termsText: {
    color: "#fff",
    fontSize: 13,
    lineHeight: 18,
    flex: 1,
  },
  checkboxCheck: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    lineHeight: 18,
  },
});

export default ContactUsScreen;
