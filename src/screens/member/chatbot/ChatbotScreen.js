import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

const BRAND_RED = "#c62828";
const BG_DARK = "#050505";
const CARD_DARK = "#171717";
const BUBBLE_DARK = "#1f1f1f";

export default function ChatbotScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea} edges={[]}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.topRow}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.backText}>‹ Back</Text>
          </TouchableOpacity>

          <Text style={styles.headerTitle}>On Core Coach</Text>

          <View style={styles.placeholder} />
        </View>

        <ScrollView
          style={styles.chatArea}
          contentContainerStyle={styles.chatContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Intro Card */}
          <View style={styles.introCard}>
            <Text style={styles.introLabel}>AI FITNESS ASSISTANT</Text>
            <Text style={styles.introTitle}>How can I help today?</Text>
            <Text style={styles.introText}>
              Ask about workouts, nutrition, recovery, supplements, or how to
              use the app.
            </Text>
          </View>

          {/* Bot Message */}
          <View style={styles.botBubble}>
            <Text style={styles.botText}>
              Hey! I’m your On Core Coach. Choose a quick prompt below or type
              your own question.
            </Text>
          </View>

          {/* Quick Prompts */}
          <View style={styles.promptGrid}>
            <TouchableOpacity style={styles.promptChip}>
              <Text style={styles.promptText}>Workout Help</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.promptChip}>
              <Text style={styles.promptText}>Meal Ideas</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.promptChip}>
              <Text style={styles.promptText}>Recovery Tips</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.promptChip}>
              <Text style={styles.promptText}>Supplements</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        {/* Input Bar */}
        <View style={styles.inputBar}>
          <TextInput
            style={styles.input}
            placeholder="Ask something..."
            placeholderTextColor="#888888"
          />

          <TouchableOpacity style={styles.sendButton}>
            <Text style={styles.sendText}>➤</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: BG_DARK,
  },

  container: {
    flex: 1,
    backgroundColor: BG_DARK,
  },

  topRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 14,
  },

  backText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },

  headerTitle: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "700",
  },

  placeholder: {
    width: 50,
  },

  chatArea: {
    flex: 1,
  },

  chatContent: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },

  introCard: {
    backgroundColor: CARD_DARK,
    borderRadius: 22,
    padding: 18,
    marginBottom: 18,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.08)",
  },

  introLabel: {
    color: BRAND_RED,
    fontSize: 12,
    fontWeight: "800",
    letterSpacing: 1,
    marginBottom: 8,
  },

  introTitle: {
    color: "#ffffff",
    fontSize: 26,
    fontWeight: "800",
    marginBottom: 8,
  },

  introText: {
    color: "#BBBBBB",
    fontSize: 14,
    lineHeight: 20,
  },

  botBubble: {
    alignSelf: "flex-start",
    backgroundColor: BUBBLE_DARK,
    borderRadius: 18,
    borderTopLeftRadius: 4,
    padding: 14,
    maxWidth: "86%",
    marginBottom: 18,
  },

  botText: {
    color: "#ffffff",
    fontSize: 14,
    lineHeight: 20,
  },

  promptGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },

  promptChip: {
    backgroundColor: "#0D0D0D",
    borderRadius: 16,
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderWidth: 1,
    borderColor: "rgba(198,40,40,0.55)",
  },

  promptText: {
    color: "#ffffff",
    fontSize: 13,
    fontWeight: "600",
  },

  inputBar: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 18,
    backgroundColor: BG_DARK,
    borderTopWidth: 1,
    borderTopColor: "rgba(255,255,255,0.08)",
  },

  input: {
    flex: 1,
    backgroundColor: "#111111",
    borderRadius: 18,
    paddingHorizontal: 14,
    paddingVertical: 12,
    color: "#ffffff",
    fontSize: 14,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.08)",
  },

  sendButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: BRAND_RED,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
  },

  sendText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "800",
  },
});
