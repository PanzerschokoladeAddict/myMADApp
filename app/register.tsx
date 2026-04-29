import { router } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Register() {
  async function _handleExit() {
    router.push("/setup");
  }

  async function _handleCreate() {
    router.push("/create");
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Button
          style={styles.button}
          mode="contained"
          buttonColor="#8f3f3f"
          onPress={() => _handleExit()}
        >
          Exit to Home
        </Button>
        <Button
          style={styles.button}
          mode="contained"
          buttonColor="#4c8f3f"
          onPress={() => _handleCreate()}
        >
          Register
        </Button>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    margin: 16,
  },
});
