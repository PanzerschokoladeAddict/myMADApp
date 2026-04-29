import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text>Welcome to the Home Page!</Text>
      <Link href="/onboarding">Go to Onboarding Page</Link>
      <TextInput placeholder="Input Holder" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
