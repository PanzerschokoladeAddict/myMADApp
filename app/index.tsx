import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const router = useRouter();

  return (
    <SafeAreaProvider style={styles.header}>
      <SafeAreaView style={styles.container}>
        <Button
          style={styles.button}
          mode="contained"
          buttonColor="#4c8f3f"
          onPress={() => router.push("/onboarding")}
        >
          Create A New Team
        </Button>
        <Button
          style={styles.button}
          mode="contained"
          buttonColor="#4c8f3f"
          onPress={() => router.push("/scan")}
        >
          Join An Existing Team
        </Button>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 40,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 80,
  },
  button: {
    justifyContent: "center",
    width: "70%",
    height: 80,
  },
});
