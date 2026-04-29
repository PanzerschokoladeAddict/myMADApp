import * as Haptics from "expo-haptics";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import ConfettiCannon from "react-native-confetti-cannon";
import { Button, Text } from "react-native-paper";

export default function Joined() {
  const { teamName } = useLocalSearchParams();
  const router = useRouter();

  useEffect(() => {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
  }, []);

  return (
    <View style={styles.container}>
      <ConfettiCannon
        count={100}
        origin={{ x: -10, y: 0 }}
        autoStart={false}
        fadeOut={true}
      />
      <Text variant="displaySmall" style={styles.emoji}>
        🎉
      </Text>
      <Text variant="headlineMedium" style={styles.title}>
        You're in!
      </Text>
      <Text variant="bodyLarge" style={styles.teamName}>
        You've joined{"\n"}
        {teamName}
      </Text>
      <Button
        mode="contained"
        buttonColor="#4c8f3f"
        onPress={() => router.replace("/")}
        style={styles.button}
      >
        Back to Home
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
    padding: 24,
  },
  emoji: {
    fontSize: 72,
  },
  title: {
    fontWeight: "bold",
  },
  teamName: {
    textAlign: "center",
    fontSize: 18,
  },
  button: {
    marginTop: 16,
    width: "70%",
  },
});
