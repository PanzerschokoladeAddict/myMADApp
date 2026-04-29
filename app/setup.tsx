import * as React from "react";
import { Image, StyleSheet } from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function SetUp() {
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
              title: "Welcome to TeamUp!",
              subtitle: "Your ultimate team management app.",
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
