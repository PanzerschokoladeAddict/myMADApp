import * as React from "react";
import { Alert, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Onboarding() {
  function onPress() {
    Alert.alert("Let's get started!");
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Button icon="party-popper" mode="contained" onPress={() => onPress()}>
          Get Started
        </Button>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
