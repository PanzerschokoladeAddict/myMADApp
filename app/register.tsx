import React from "react";
import { StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Register() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Button style={styles.button} mode="contained" buttonColor="#8f3f3f">
          Exit to Home
        </Button>
        <Button style={styles.button} mode="contained" buttonColor="#4c8f3f">
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
