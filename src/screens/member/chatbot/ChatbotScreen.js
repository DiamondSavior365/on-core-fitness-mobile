import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
  ImageBackground,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

const BRAND_RED = "#c62828";
const BG_DARK = "#050505";
const CARD_DARK = "#171717";
const CARD_DARKER = "#0D0D0D";
const SOFT_GRAY = "#BBBBBB";

export default function ChatbotScreen() {
  const navigation = useNavigation();
  const [inputText, setInputText] = useState("");
  const [messages, setMessages] = useState([]);
  const [hasStartedChat, setHasStartedChat] = useState(false);
  const scrollViewRef = useRef(null);

  function getTemporaryBotReply(userMessage) {
    const lowerMessage = userMessage.toLowerCase();

    if (lowerMessage.includes("workout")) {
      return "I can help with workout ideas soon. For now, think about your goal first: strength, endurance, fat loss, or general fitness.";
    }

    if (
      lowerMessage.includes("meal") ||
      lowerMessage.includes("food") ||
      lowerMessage.includes("nutrition")
    ) {
      return "For meals, a good starting point is lean protein, complex carbs, healthy fats, and vegetables. Soon I’ll be able to give more specific meal ideas.";
    }

    if (
      lowerMessage.includes("recovery") ||
      lowerMessage.includes("sore") ||
      lowerMessage.includes("rest")
    ) {
      return "Recovery starts with sleep, hydration, mobility, and giving your body enough time to repair. If you feel pain or injury, check with a professional.";
    }

    if (
      lowerMessage.includes("supplement") ||
      lowerMessage.includes("protein")
    ) {
      return "Supplements can help support your goals, but they should not replace good nutrition. Protein, hydration, and consistency matter first.";
    }

    return "Great question. Soon I’ll be connected to the AI backend so I can give better fitness, nutrition, and recovery guidance.";
  }

  function handleSend(messageText = inputText) {
    const trimmedMessage = messageText.trim();

    if (!trimmedMessage) return;

    setHasStartedChat(true);

    const userMessage = {
      id: Date.now(),
      sender: "user",
      text: trimmedMessage,
    };

    const botReply = {
      id: Date.now() + 1,
      sender: "bot",
      text: getTemporaryBotReply(trimmedMessage),
    };

    setMessages((prevMessages) => [...prevMessages, userMessage, botReply]);
    setInputText("");
    scrollToBottom();
  }
  function scrollToBottom() {
    setTimeout(() => {
      scrollViewRef.current?.scrollToEnd({ animated: true });
    }, 100);
  }

  return (
    <SafeAreaView style={styles.safeArea} edges={[]}>
      <View style={styles.container}>
        {/* Top Header */}
        <View style={styles.topRow}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.backText}>‹ Back</Text>
          </TouchableOpacity>

          <Text style={styles.headerTitle}>On Core Coach</Text>

          <View style={styles.placeholder} />
        </View>

        <ScrollView
          ref={scrollViewRef}
          style={styles.chatArea}
          contentContainerStyle={styles.chatContent}
          showsVerticalScrollIndicator={false}
          onContentSizeChange={() => {
            if (hasStartedChat) {
              scrollToBottom();
            }
          }}
        >
          {/* Hero / Intro Section */}
          <ImageBackground
            source={require("../../../../assets/Chatbot_Images/chatbot_hero_card_image_3.png")}
            style={styles.heroCard}
            imageStyle={styles.heroBackgroundImage}
          >
            <View style={styles.heroOverlay}>
              <View style={styles.heroContent}>
                <View style={styles.robotCircle}>
                  <Image
                    source={require("../../../../assets/Chatbot_Images/chatbot_button_image_2.png")}
                    style={styles.robotImage}
                  />
                </View>

                <Text style={styles.heroLabel}>AI FITNESS ASSISTANT</Text>

                <Text style={styles.heroTitle}>How can I help you today?</Text>

                <Text style={styles.heroSubtitle}>
                  Ask about workouts, meal ideas, recovery, supplements, or how
                  to use the On Core Fitness app.
                </Text>
              </View>
            </View>
          </ImageBackground>

          {/* Bot Welcome Message */}
          {/* <View style={styles.messageRow}>
            <View style={styles.botAvatar}>
              <Text style={styles.botAvatarText}>AI</Text>
            </View>

            <View style={styles.botBubble}>
              <Text style={styles.botText}>
                Hey! I’m your On Core Coach. Choose a quick prompt below or type
                your own question.
              </Text>
            </View>
          </View> */}

          {/* Quick Prompt Section */}
          <View style={styles.quickSection}>
            <Text style={styles.quickTitle}>Quick Help</Text>

            <View style={styles.promptGrid}>
              <TouchableOpacity
                style={styles.promptCard}
                onPress={() =>
                  handleSend("Can you help me with a workout plan?")
                }
              >
                <Text style={styles.promptEmoji}>💪</Text>
                <Text style={styles.promptTitle}>Workout Help</Text>
                <Text style={styles.promptSubtitle}>Training ideas</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.promptCard}
                onPress={() =>
                  handleSend("Give me healthy meal ideas after a workout.")
                }
              >
                <Text style={styles.promptEmoji}>🥗</Text>
                <Text style={styles.promptTitle}>Meal Ideas</Text>
                <Text style={styles.promptSubtitle}>Healthy eating</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.promptCard}
                onPress={() =>
                  handleSend("How can I recover better after training?")
                }
              >
                <Text style={styles.promptEmoji}>🧘</Text>
                <Text style={styles.promptTitle}>Recovery Tips</Text>
                <Text style={styles.promptSubtitle}>Rest & mobility</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.promptCard}
                onPress={() =>
                  handleSend("Can you explain basic supplements for fitness?")
                }
              >
                <Text style={styles.promptEmoji}>🧃</Text>
                <Text style={styles.promptTitle}>Supplements</Text>
                <Text style={styles.promptSubtitle}>Basic guidance</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Safety Note */}
          <View style={styles.noteCard}>
            <Text style={styles.noteTitle}>Quick note</Text>
            <Text style={styles.noteText}>
              On Core Coach can help with general fitness, nutrition, and
              recovery guidance. For injuries, pain, medical conditions, or
              strict diet needs, check with a qualified professional.
            </Text>
          </View>

          {/* Conversation Messages */}
          <View style={styles.conversationSection}>
            {messages.map((message) => {
              const isUser = message.sender === "user";

              return (
                <View
                  key={message.id}
                  style={[styles.messageRow, isUser && styles.userMessageRow]}
                >
                  {!isUser && (
                    <View style={styles.botAvatar}>
                      <Text style={styles.botAvatarText}>AI</Text>
                    </View>
                  )}

                  <View style={[isUser ? styles.userBubble : styles.botBubble]}>
                    <Text style={isUser ? styles.userText : styles.botText}>
                      {message.text}
                    </Text>
                  </View>
                </View>
              );
            })}
          </View>
        </ScrollView>

        {/* Input Bar */}
        <View style={styles.inputBar}>
          <TextInput
            style={styles.input}
            placeholder="Ask On Core Coach..."
            placeholderTextColor="#888888"
            value={inputText}
            onChangeText={setInputText}
            onSubmitEditing={() => handleSend()}
            returnKeyType="send"
          />

          <TouchableOpacity
            style={styles.sendButton}
            onPress={() => handleSend()}
          >
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
    paddingTop: 8,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255,255,255,0.06)",
  },

  backText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },

  headerTitle: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "800",
  },

  placeholder: {
    width: 50,
  },

  chatArea: {
    flex: 1,
  },

  chatContent: {
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 0,
  },

  heroCard: {
    backgroundColor: CARD_DARK,
    borderRadius: 24,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.08)",
    shadowColor: BRAND_RED,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.18,
    shadowRadius: 12,
    elevation: 6,
    overflow: "hidden",
  },

  heroBackgroundImage: {
    borderRadius: 24,
    resizeMode: "cover",
  },

  heroOverlay: {
    backgroundColor: "rgba(0,0,0,0.15)",
    padding: 16,
  },

  heroContent: {
    alignItems: "center",
    justifyContent: "center",
  },

  robotCircle: {
    width: 76,
    height: 76,
    borderRadius: 46,
    backgroundColor: "#0D0D0D",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: "rgba(0, 0, 0, 0.45)",
  },

  robotImage: {
    width: 76,
    height: 76,
    resizeMode: "contain",
    borderRadius: 46,
  },
  heroLabel: {
    color: BRAND_RED,
    fontSize: 10,
    fontWeight: "900",
    letterSpacing: 1.2,
    marginBottom: 6,
    textAlign: "center",
  },

  heroTitle: {
    color: "#ffffff",
    fontSize: 23,
    fontWeight: "900",
    textAlign: "center",
    marginBottom: 6,
  },

  heroSubtitle: {
    color: SOFT_GRAY,
    fontSize: 13,
    lineHeight: 19,
    textAlign: "center",
  },

  messageRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 14,
  },

  botAvatar: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: BRAND_RED,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },

  botAvatarText: {
    color: "#ffffff",
    fontSize: 12,
    fontWeight: "900",
  },

  botBubble: {
    flex: 1,
    backgroundColor: "#1f1f1f",
    borderRadius: 18,
    borderTopLeftRadius: 4,
    padding: 14,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.06)",
  },

  botText: {
    color: "#ffffff",
    fontSize: 14,
    lineHeight: 20,
  },

  quickSection: {
    marginBottom: 18,
  },

  quickTitle: {
    color: "#ffffff",
    fontSize: 17,
    fontWeight: "800",
    marginBottom: 12,
  },

  promptGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    rowGap: 12,
  },

  promptCard: {
    width: "48%",
    backgroundColor: CARD_DARKER,
    borderRadius: 18,
    padding: 14,
    borderWidth: 1,
    borderColor: "rgba(198,40,40,0.45)",
  },

  promptEmoji: {
    fontSize: 24,
    marginBottom: 8,
  },

  promptTitle: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "800",
    marginBottom: 4,
  },

  promptSubtitle: {
    color: SOFT_GRAY,
    fontSize: 12,
  },

  noteCard: {
    backgroundColor: "rgba(198,40,40,0.12)",
    borderRadius: 18,
    padding: 14,
    borderWidth: 1,
    borderColor: "rgba(198,40,40,0.35)",
  },

  noteTitle: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "800",
    marginBottom: 6,
  },

  noteText: {
    color: SOFT_GRAY,
    fontSize: 12,
    lineHeight: 18,
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
    borderRadius: 20,
    paddingHorizontal: 15,
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
    fontWeight: "900",
  },
  userMessageRow: {
    justifyContent: "flex-end",
  },

  userBubble: {
    alignSelf: "flex-end",
    backgroundColor: BRAND_RED,
    borderRadius: 18,
    borderTopRightRadius: 4,
    padding: 14,
    maxWidth: "86%",
    marginBottom: 14,
  },

  userText: {
    color: "#ffffff",
    fontSize: 14,
    lineHeight: 20,
  },

  conversationSection: {
    marginTop: 18,
    marginBottom: 0,
  },

  emptyChatCard: {
    backgroundColor: "#0D0D0D",
    borderRadius: 16,
    padding: 14,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.08)",
  },

  emptyChatText: {
    color: "#BBBBBB",
    fontSize: 13,
    lineHeight: 18,
    textAlign: "center",
  },
});
