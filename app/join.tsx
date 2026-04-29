import * as React from "react";
import { Image, StyleSheet } from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Join() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Onboarding
          pages={[
            {
              backgroundColor: "#fff",
              image: (
                <Image source={require("../assets/images/react-logo.png")} />
              ),
              title: "Join An Existing Team",
              subtitle: "Enter your team code to join an existing team.",
            },
          ]}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
